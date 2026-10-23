package com.example.data

import android.content.Context
import com.example.R
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.firestore.DocumentSnapshot
import com.google.firebase.firestore.FieldValue
import com.google.firebase.firestore.FirebaseFirestore
import com.google.firebase.firestore.snapshots
import kotlinx.coroutines.CancellationException
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.catch
import kotlinx.coroutines.flow.flow
import kotlinx.coroutines.flow.emitAll
import kotlinx.coroutines.flow.map
import kotlinx.coroutines.tasks.await

class CotorraRepository(
    private val db: FirebaseFirestore,
    private val auth: FirebaseAuth = FirebaseAuth.getInstance()
) {
    constructor(context: Context) : this(
        FirebaseFirestore.getInstance(
            context.applicationContext.getString(R.string.firestore_database_id)
        )
    )

    private fun requireUserId(): String {
        return auth.currentUser?.uid
            ?: throw IllegalStateException("User must be signed in with Google before accessing Firestore.")
    }

    suspend fun saveUserProfile(
        displayName: String,
        email: String?,
        avatarId: String = "classic",
        activeLanguageId: String = "en",
        activeLevel: String = "A1",
        dailyGoalMinutes: Int = 25,
        learningGoal: String = "conversation",
        coins: Int = 1250,
        lives: Int = 5,
        currentStreak: Int = 12,
        bestStreak: Int = 12,
        totalStudyMinutes: Int = 392,
        completedLessonsCount: Int = 18,
        wordsLearnedCount: Int = 248,
        isDarkTheme: Boolean = false,
        stateJson: String? = null
    ): Result<String> {
        val uid = requireUserId()
        val docRef = db.collection("users").document(uid)
        return try {
            val existingSnap = docRef.get().await()
            val payload = mutableMapOf<String, Any>(
                "userId" to uid,
                "displayName" to displayName.take(100).ifBlank { "Compa Estudiante" },
                "avatarId" to avatarId.take(64),
                "activeLanguageId" to activeLanguageId,
                "activeLevel" to activeLevel,
                "dailyGoalMinutes" to dailyGoalMinutes,
                "learningGoal" to learningGoal.take(64),
                "coins" to coins.coerceIn(0, 1_000_000),
                "lives" to lives.coerceIn(0, 50),
                "currentStreak" to currentStreak.coerceIn(0, 10_000),
                "bestStreak" to bestStreak.coerceIn(0, 10_000),
                "totalStudyMinutes" to totalStudyMinutes.coerceIn(0, 1_000_000),
                "completedLessonsCount" to completedLessonsCount.coerceIn(0, 50_000),
                "wordsLearnedCount" to wordsLearnedCount.coerceIn(0, 200_000),
                "isDarkTheme" to isDarkTheme,
                "updatedAt" to FieldValue.serverTimestamp()
            )
            if (!email.isNullOrBlank()) {
                payload["email"] = email.take(200)
            }
            if (!stateJson.isNullOrBlank() && stateJson.length <= 190_000) {
                payload["stateJson"] = stateJson
            }
            if (existingSnap.exists()) {
                val updatePayload = payload.toMutableMap()
                updatePayload.remove("userId")
                docRef.update(updatePayload).await()
            } else {
                payload["createdAt"] = FieldValue.serverTimestamp()
                docRef.set(payload).await()
            }
            Result.success(uid)
        } catch (e: CancellationException) {
            throw e
        } catch (e: Exception) {
            handleFirestoreError(e, OperationType.WRITE, docRef.path)
            Result.failure(e)
        }
    }

    suspend fun getUserProfile(targetUserId: String = requireUserId()): Result<UserProfileDoc?> {
        val docRef = db.collection("users").document(targetUserId)
        return try {
            val snap = docRef.get().await()
            val profile = snap.toObject(
                UserProfileDoc::class.java,
                DocumentSnapshot.ServerTimestampBehavior.ESTIMATE
            )
            Result.success(profile)
        } catch (e: CancellationException) {
            throw e
        } catch (e: Exception) {
            handleFirestoreError(e, OperationType.GET, docRef.path)
            Result.failure(e)
        }
    }

    fun observeUserProfile(): Flow<UserProfileDoc?> = flow {
        val uid = requireUserId()
        val docRef = db.collection("users").document(uid)
        emitAll(
            docRef.snapshots()
                .map { snapshot ->
                    snapshot.toObject(
                        UserProfileDoc::class.java,
                        DocumentSnapshot.ServerTimestampBehavior.ESTIMATE
                    )
                }
                .catch { error ->
                    if (error is Exception) handleFirestoreError(error, OperationType.GET, docRef.path)
                    throw error
                }
        )
    }

    suspend fun saveLanguageProgress(
        languageId: String,
        currentLevel: String,
        completedLessonsCount: Int,
        studyMinutes: Int,
        listeningScore: Int,
        readingScore: Int,
        speakingScore: Int,
        writingScore: Int
    ): Result<String> {
        val uid = requireUserId()
        val docRef = db.collection("users").document(uid).collection("progress").document(languageId)
        return try {
            val existingSnap = docRef.get().await()
            if (existingSnap.exists()) {
                docRef.update(
                    mapOf(
                        "currentLevel" to currentLevel,
                        "completedLessonsCount" to completedLessonsCount.coerceIn(0, 10_000),
                        "studyMinutes" to studyMinutes.coerceIn(0, 500_000),
                        "listeningScore" to listeningScore.coerceIn(0, 100),
                        "readingScore" to readingScore.coerceIn(0, 100),
                        "speakingScore" to speakingScore.coerceIn(0, 100),
                        "writingScore" to writingScore.coerceIn(0, 100),
                        "updatedAt" to FieldValue.serverTimestamp()
                    )
                ).await()
            } else {
                docRef.set(
                    mapOf(
                        "userId" to uid,
                        "languageId" to languageId,
                        "currentLevel" to currentLevel,
                        "completedLessonsCount" to completedLessonsCount.coerceIn(0, 10_000),
                        "studyMinutes" to studyMinutes.coerceIn(0, 500_000),
                        "listeningScore" to listeningScore.coerceIn(0, 100),
                        "readingScore" to readingScore.coerceIn(0, 100),
                        "speakingScore" to speakingScore.coerceIn(0, 100),
                        "writingScore" to writingScore.coerceIn(0, 100),
                        "createdAt" to FieldValue.serverTimestamp(),
                        "updatedAt" to FieldValue.serverTimestamp()
                    )
                ).await()
            }
            Result.success(languageId)
        } catch (e: CancellationException) {
            throw e
        } catch (e: Exception) {
            handleFirestoreError(e, OperationType.WRITE, docRef.path)
            Result.failure(e)
        }
    }

    fun observeLanguageProgress(): Flow<List<LanguageProgressDoc>> = flow {
        val uid = requireUserId()
        val colRef = db.collection("users").document(uid).collection("progress")
        emitAll(
            colRef.whereEqualTo("userId", uid)
                .snapshots()
                .map { snapshot ->
                    snapshot.toObjects(
                        LanguageProgressDoc::class.java,
                        DocumentSnapshot.ServerTimestampBehavior.ESTIMATE
                    )
                }
                .catch { error ->
                    if (error is Exception) handleFirestoreError(error, OperationType.LIST, colRef.path)
                    throw error
                }
        )
    }

    suspend fun saveVocabularyCard(
        vocabId: String,
        languageId: String,
        word: String,
        translation: String,
        contextSentence: String? = null,
        intervalDays: Int = 1,
        mistakeCount: Int = 0
    ): Result<String> {
        val uid = requireUserId()
        val safeId = vocabId.replace(Regex("[^a-zA-Z0-9_\\-]"), "_").take(100).ifBlank { "vocab_1" }
        val docRef = db.collection("users").document(uid).collection("vocabulary").document(safeId)
        return try {
            val existingSnap = docRef.get().await()
            val payload = mutableMapOf<String, Any>(
                "word" to word.take(200),
                "translation" to translation.take(200),
                "intervalDays" to intervalDays.coerceIn(0, 3650),
                "mistakeCount" to mistakeCount.coerceIn(0, 10_000),
                "updatedAt" to FieldValue.serverTimestamp()
            )
            if (!contextSentence.isNullOrBlank()) {
                payload["contextSentence"] = contextSentence.take(500)
            }
            if (existingSnap.exists()) {
                docRef.update(payload).await()
            } else {
                payload["userId"] = uid
                payload["languageId"] = languageId
                payload["createdAt"] = FieldValue.serverTimestamp()
                docRef.set(payload).await()
            }
            Result.success(safeId)
        } catch (e: CancellationException) {
            throw e
        } catch (e: Exception) {
            handleFirestoreError(e, OperationType.WRITE, docRef.path)
            Result.failure(e)
        }
    }
}
