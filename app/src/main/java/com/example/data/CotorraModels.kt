package com.example.data

import com.google.firebase.Timestamp
import com.google.firebase.firestore.DocumentId
import com.google.firebase.firestore.IgnoreExtraProperties
import com.google.firebase.firestore.ServerTimestamp

@IgnoreExtraProperties
data class UserProfileDoc(
    @DocumentId val id: String = "",
    val userId: String = "",
    val displayName: String = "Compa Estudiante",
    val email: String? = null,
    val avatarId: String = "classic",
    val activeLanguageId: String = "en",
    val activeLevel: String = "A1",
    val dailyGoalMinutes: Long = 25L,
    val learningGoal: String = "conversation",
    val coins: Long = 1250L,
    val lives: Long = 5L,
    val currentStreak: Long = 12L,
    val bestStreak: Long = 12L,
    val totalStudyMinutes: Long = 392L,
    val completedLessonsCount: Long = 18L,
    val wordsLearnedCount: Long = 248L,
    val isDarkTheme: Boolean = false,
    val stateJson: String? = null,
    @ServerTimestamp val createdAt: Timestamp? = null,
    @ServerTimestamp val updatedAt: Timestamp? = null
)

@IgnoreExtraProperties
data class LanguageProgressDoc(
    @DocumentId val id: String = "",
    val userId: String = "",
    val languageId: String = "en",
    val currentLevel: String = "A1",
    val completedLessonsCount: Long = 0L,
    val studyMinutes: Long = 0L,
    val listeningScore: Long = 0L,
    val readingScore: Long = 0L,
    val speakingScore: Long = 0L,
    val writingScore: Long = 0L,
    @ServerTimestamp val createdAt: Timestamp? = null,
    @ServerTimestamp val updatedAt: Timestamp? = null
)

@IgnoreExtraProperties
data class VocabularyCardDoc(
    @DocumentId val id: String = "",
    val userId: String = "",
    val languageId: String = "en",
    val word: String = "",
    val translation: String = "",
    val contextSentence: String? = null,
    val intervalDays: Long = 1L,
    val mistakeCount: Long = 0L,
    @ServerTimestamp val createdAt: Timestamp? = null,
    @ServerTimestamp val updatedAt: Timestamp? = null
)
