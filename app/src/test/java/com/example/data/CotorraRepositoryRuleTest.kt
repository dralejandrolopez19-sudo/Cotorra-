package com.example.data

import com.example.base.FirestoreEmulatorTestBase
import com.google.firebase.firestore.FirebaseFirestoreException
import kotlinx.coroutines.flow.first
import kotlinx.coroutines.runBlocking
import kotlinx.coroutines.withTimeout
import org.junit.Assert.assertEquals
import org.junit.Assert.assertNotNull
import org.junit.Assert.assertTrue
import org.junit.Test

class CotorraRepositoryRuleTest : FirestoreEmulatorTestBase() {

    @Test
    fun saveAndGetUserProfile_authenticatedOwner_succeeds() = runBlocking {
        val uid = signInTestUser(ALICE_EMAIL)
        val repository = CotorraRepository(firestore, auth)

        val saveResult = withTimeout(DEFAULT_TIMEOUT_MS) {
            repository.saveUserProfile(
                displayName = "Compa Quisqueya",
                email = ALICE_EMAIL,
                activeLanguageId = "en",
                activeLevel = "A1",
                dailyGoalMinutes = 25,
                coins = 1250,
                lives = 5,
                currentStreak = 12
            )
        }
        assertTrue(saveResult.isSuccess)

        val profileResult = withTimeout(DEFAULT_TIMEOUT_MS) {
            repository.getUserProfile(uid)
        }
        assertTrue(profileResult.isSuccess)
        val profile = profileResult.getOrNull()
        assertNotNull(profile)
        assertEquals("Compa Quisqueya", profile?.displayName)
        assertEquals("en", profile?.activeLanguageId)
    }

    @Test
    fun saveAndObserveLanguageProgress_authenticatedOwner_emitsRealtimeUpdates() = runBlocking {
        signInTestUser(ALICE_EMAIL)
        val repository = CotorraRepository(firestore, auth)

        val saveResult = withTimeout(DEFAULT_TIMEOUT_MS) {
            repository.saveLanguageProgress(
                languageId = "en",
                currentLevel = "A1",
                completedLessonsCount = 4,
                studyMinutes = 100,
                listeningScore = 72,
                readingScore = 80,
                speakingScore = 65,
                writingScore = 74
            )
        }
        assertTrue(saveResult.isSuccess)

        val progressList = withTimeout(FLOW_TIMEOUT_MS) {
            repository.observeLanguageProgress().first { list -> list.any { it.languageId == "en" } }
        }
        assertTrue(progressList.any { it.languageId == "en" && it.completedLessonsCount == 4L })
    }

    @Test
    fun getUserProfile_crossUserAccess_failsWithPermissionDenied() = runBlocking {
        val aliceUid = signInTestUser(ALICE_EMAIL)
        val aliceRepo = CotorraRepository(firestore, auth)
        withTimeout(DEFAULT_TIMEOUT_MS) {
            aliceRepo.saveUserProfile(displayName = "Alice", email = ALICE_EMAIL).getOrThrow()
        }

        signInTestUser(BOB_EMAIL)
        val bobRepo = CotorraRepository(firestore, auth)
        val crossReadResult = withTimeout(DEFAULT_TIMEOUT_MS) {
            bobRepo.getUserProfile(aliceUid)
        }
        assertTrue(crossReadResult.isFailure)
        val exception = crossReadResult.exceptionOrNull() as? FirebaseFirestoreException
        assertEquals(FirebaseFirestoreException.Code.PERMISSION_DENIED, exception?.code)
    }

    @Test
    fun getUserProfile_unauthenticatedCaller_failsWithPermissionDenied() = runBlocking {
        auth.signOut()
        val repo = CotorraRepository(firestore, auth)
        val unauthResult = withTimeout(DEFAULT_TIMEOUT_MS) {
            repo.getUserProfile("protected_user_doc")
        }
        assertTrue(unauthResult.isFailure)
        val exception = unauthResult.exceptionOrNull() as? FirebaseFirestoreException
        assertEquals(FirebaseFirestoreException.Code.PERMISSION_DENIED, exception?.code)
    }

    private companion object {
        const val ALICE_EMAIL = "alice_cotorra@test.com"
        const val BOB_EMAIL = "bob_cotorra@test.com"
        const val DEFAULT_TIMEOUT_MS = 5000L
        const val FLOW_TIMEOUT_MS = 4000L
    }
}
