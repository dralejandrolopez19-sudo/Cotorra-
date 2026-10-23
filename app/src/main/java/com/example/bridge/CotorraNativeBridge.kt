package com.example.bridge

import android.content.Context
import android.os.Handler
import android.os.Looper
import android.os.VibrationEffect
import android.os.Vibrator
import android.util.Log
import android.webkit.JavascriptInterface
import android.webkit.WebView
import com.example.ai.GeminiTutorService
import com.example.data.CotorraRepository
import com.example.speech.CotorraSpeechHelper
import com.google.firebase.auth.FirebaseAuth
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import org.json.JSONObject

private const val TAG = "CotorraBridge"
private const val PREFS_NAME = "cotorra_local_store"
private const val KEY_STATE_JSON = "cotorra_state_json"

class CotorraNativeBridge(
    private val context: Context,
    private val scope: CoroutineScope,
    private val repository: CotorraRepository,
    private val tutorService: GeminiTutorService,
    private val speechHelper: CotorraSpeechHelper,
    private val onRequestGoogleSignIn: () -> Unit,
    private val onRequestSignOut: () -> Unit,
    private val onRequestMicPermissionAndListen: (langCode: String, expectedPhrase: String) -> Unit
) {
    private val mainHandler = Handler(Looper.getMainLooper())
    var webViewRef: WebView? = null

    private val prefs by lazy {
        context.applicationContext.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
    }

    fun evaluateJs(script: String) {
        mainHandler.post {
            try {
                webViewRef?.evaluateJavascript(script, null)
            } catch (e: Exception) {
                Log.e(TAG, "Failed to evaluate JS", e)
            }
        }
    }

    @JavascriptInterface
    fun getInitialBootstrapJson(): String {
        val user = FirebaseAuth.getInstance().currentUser
        val savedState = prefs.getString(KEY_STATE_JSON, null)
        return JSONObject().apply {
            put("isAuthenticated", user != null)
            put("uid", user?.uid ?: "")
            put("displayName", user?.displayName ?: "Compa Estudiante")
            put("email", user?.email ?: "")
            if (!savedState.isNullOrBlank()) {
                put("savedStateJson", savedState)
            }
        }.toString()
    }

    @JavascriptInterface
    fun saveState(stateJson: String) {
        try {
            // Immediate synchronous local save so closing the app never loses progress
            prefs.edit().putString(KEY_STATE_JSON, stateJson).commit()

            val user = FirebaseAuth.getInstance().currentUser
            if (user != null) {
                scope.launch(Dispatchers.IO) {
                    try {
                        val root = JSONObject(stateJson)
                        val profileObj = root.optJSONObject("user") ?: JSONObject()
                        val activeLang = profileObj.optString("activeLanguage", "en")
                        val activeLevel = profileObj.optString("activeLevel", "A1")
                        val dailyMinutes = profileObj.optInt("dailyMinutes", 25)
                        val learningGoal = profileObj.optString("goal", "conversation")
                        val coins = profileObj.optInt("coins", 1250)
                        val lives = profileObj.optInt("lives", 5)
                        val streak = profileObj.optInt("streak", 12)
                        val bestStreak = profileObj.optInt("bestStreak", 12)
                        val studyMinutes = profileObj.optInt("totalMinutes", 392)
                        val completedLessons = profileObj.optInt("completedLessonsCount", 18)
                        val wordsLearned = profileObj.optInt("wordsLearnedCount", 248)
                        val darkTheme = profileObj.optBoolean("darkMode", false)
                        val avatarId = profileObj.optString("avatarId", "classic")

                        repository.saveUserProfile(
                            displayName = user.displayName ?: profileObj.optString("name", "Compa Estudiante"),
                            email = user.email,
                            avatarId = avatarId,
                            activeLanguageId = activeLang,
                            activeLevel = activeLevel,
                            dailyGoalMinutes = dailyMinutes,
                            learningGoal = learningGoal,
                            coins = coins,
                            lives = lives,
                            currentStreak = streak,
                            bestStreak = bestStreak,
                            totalStudyMinutes = studyMinutes,
                            completedLessonsCount = completedLessons,
                            wordsLearnedCount = wordsLearned,
                            isDarkTheme = darkTheme,
                            stateJson = stateJson
                        )

                        val langProgressMap = root.optJSONObject("languageProgress")
                        val activeProgress = langProgressMap?.optJSONObject(activeLang)
                        if (activeProgress != null) {
                            repository.saveLanguageProgress(
                                languageId = activeLang,
                                currentLevel = activeProgress.optString("level", activeLevel),
                                completedLessonsCount = activeProgress.optInt("completedCount", 0),
                                studyMinutes = activeProgress.optInt("minutes", 30),
                                listeningScore = activeProgress.optInt("listening", 65),
                                readingScore = activeProgress.optInt("reading", 70),
                                speakingScore = activeProgress.optInt("speaking", 60),
                                writingScore = activeProgress.optInt("writing", 68)
                            )
                        }
                    } catch (e: Exception) {
                        Log.e(TAG, "Cloud sync error", e)
                    }
                }
            }
        } catch (e: Exception) {
            Log.e(TAG, "Failed saving state", e)
        }
    }

    @JavascriptInterface
    fun clearAllLocalData() {
        prefs.edit().remove(KEY_STATE_JSON).commit()
    }

    @JavascriptInterface
    fun triggerGoogleSignIn() {
        mainHandler.post {
            onRequestGoogleSignIn()
        }
    }

    @JavascriptInterface
    fun triggerSignOut() {
        mainHandler.post {
            onRequestSignOut()
        }
    }

    @JavascriptInterface
    fun speak(text: String, langCode: String, slow: Boolean) {
        speechHelper.speak(text, langCode, slow)
    }

    @JavascriptInterface
    fun startPronunciationCapture(langCode: String, expectedPhrase: String) {
        mainHandler.post {
            onRequestMicPermissionAndListen(langCode, expectedPhrase)
        }
    }

    @JavascriptInterface
    fun sendTutorMessage(
        languageName: String,
        cefrLevel: String,
        modeName: String,
        userMessage: String,
        conversationHistory: String
    ) {
        scope.launch(Dispatchers.IO) {
            val resultJson = tutorService.generateTutorTurn(
                languageName = languageName,
                cefrLevel = cefrLevel,
                modeName = modeName,
                userMessage = userMessage,
                conversationHistory = conversationHistory
            )
            val escaped = JSONObject.quote(resultJson)
            evaluateJs("window.onNativeTutorResponse && window.onNativeTutorResponse($escaped);")
        }
    }

    @JavascriptInterface
    fun vibrateFeedback(isSuccess: Boolean) {
        try {
            val vibrator = context.getSystemService(Context.VIBRATOR_SERVICE) as? Vibrator
            if (vibrator?.hasVibrator() == true) {
                val duration = if (isSuccess) 35L else 80L
                if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.O) {
                    vibrator.vibrate(VibrationEffect.createOneShot(duration, VibrationEffect.DEFAULT_AMPLITUDE))
                } else {
                    @Suppress("DEPRECATION")
                    vibrator.vibrate(duration)
                }
            }
        } catch (_: Exception) {
        }
    }
}
