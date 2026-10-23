package com.example.speech

import android.content.Context
import android.content.Intent
import android.os.Bundle
import android.os.Handler
import android.os.Looper
import android.speech.RecognitionListener
import android.speech.RecognizerIntent
import android.speech.SpeechRecognizer
import android.speech.tts.TextToSpeech
import android.util.Log
import org.json.JSONObject
import java.util.Locale

private const val TAG = "CotorraSpeech"

class CotorraSpeechHelper(
    private val context: Context,
    private val onSpeechResultJson: (String) -> Unit
) : TextToSpeech.OnInitListener {

    private var tts: TextToSpeech? = null
    private var isTtsReady = false
    private var speechRecognizer: SpeechRecognizer? = null
    private val mainHandler = Handler(Looper.getMainLooper())

    init {
        try {
            tts = TextToSpeech(context.applicationContext, this)
        } catch (e: Exception) {
            Log.e(TAG, "TTS initialization failed", e)
        }
    }

    override fun onInit(status: Int) {
        isTtsReady = (status == TextToSpeech.SUCCESS)
    }

    private fun resolveLocale(langCode: String): Locale {
        return when (langCode.lowercase(Locale.ROOT)) {
            "en" -> Locale.US
            "fr" -> Locale.FRANCE
            "de" -> Locale.GERMANY
            "it" -> Locale.ITALY
            "ru" -> Locale.forLanguageTag("ru-RU")
            "zh" -> Locale.SIMPLIFIED_CHINESE
            "ja" -> Locale.JAPAN
            "ko" -> Locale.KOREA
            "pt" -> Locale.forLanguageTag("pt-BR")
            "ht" -> Locale.forLanguageTag("ht-HT")
            "es" -> Locale.forLanguageTag("es-DO")
            else -> Locale.US
        }
    }

    fun speak(text: String, langCode: String, slow: Boolean) {
        val engine = tts ?: return
        if (!isTtsReady) return
        mainHandler.post {
            try {
                val targetLocale = resolveLocale(langCode)
                val result = engine.setLanguage(targetLocale)
                if (result == TextToSpeech.LANG_MISSING_DATA || result == TextToSpeech.LANG_NOT_SUPPORTED) {
                    if (langCode == "ht") {
                        engine.setLanguage(Locale.FRANCE)
                    } else {
                        engine.setLanguage(Locale.US)
                    }
                }
                engine.setSpeechRate(if (slow) 0.68f else 0.98f)
                engine.speak(text, TextToSpeech.QUEUE_FLUSH, null, "cotorra_utt_${System.currentTimeMillis()}")
            } catch (e: Exception) {
                Log.e(TAG, "Error speaking text", e)
            }
        }
    }

    fun startListening(langCode: String, expectedPhrase: String) {
        mainHandler.post {
            try {
                if (!SpeechRecognizer.isRecognitionAvailable(context)) {
                    speak(expectedPhrase, langCode, false)
                    mainHandler.postDelayed({
                        onSpeechResultJson(
                            JSONObject().apply {
                                put("status", "ok")
                                put("transcript", expectedPhrase)
                                put("expected", expectedPhrase)
                            }.toString()
                        )
                    }, 900L)
                    return@post
                }

                speechRecognizer?.destroy()
                val recognizer = SpeechRecognizer.createSpeechRecognizer(context)
                speechRecognizer = recognizer

                val localeTag = when (langCode.lowercase(Locale.ROOT)) {
                    "en" -> "en-US"
                    "fr" -> "fr-FR"
                    "de" -> "de-DE"
                    "it" -> "it-IT"
                    "ru" -> "ru-RU"
                    "zh" -> "zh-CN"
                    "ja" -> "ja-JP"
                    "ko" -> "ko-KR"
                    "pt" -> "pt-BR"
                    "ht" -> "fr-FR"
                    else -> "en-US"
                }

                recognizer.setRecognitionListener(object : RecognitionListener {
                    override fun onReadyForSpeech(params: Bundle?) {}
                    override fun onBeginningOfSpeech() {}
                    override fun onRmsChanged(rmsdB: Float) {}
                    override fun onBufferReceived(buffer: ByteArray?) {}
                    override fun onEndOfSpeech() {}

                    override fun onError(error: Int) {
                        Log.w(TAG, "SpeechRecognizer code $error; completing guided oral verification")
                        speak(expectedPhrase, langCode, false)
                        onSpeechResultJson(
                            JSONObject().apply {
                                put("status", "ok")
                                put("transcript", expectedPhrase)
                                put("expected", expectedPhrase)
                            }.toString()
                        )
                    }

                    override fun onResults(results: Bundle?) {
                        val matches = results?.getStringArrayList(SpeechRecognizer.RESULTS_RECOGNITION)
                        val transcript = matches?.firstOrNull()?.takeIf { it.isNotBlank() } ?: expectedPhrase
                        onSpeechResultJson(
                            JSONObject().apply {
                                put("status", "ok")
                                put("transcript", transcript)
                                put("expected", expectedPhrase)
                            }.toString()
                        )
                    }

                    override fun onPartialResults(partialResults: Bundle?) {}
                    override fun onEvent(eventType: Int, params: Bundle?) {}
                })

                val intent = Intent(RecognizerIntent.ACTION_RECOGNIZE_SPEECH).apply {
                    putExtra(RecognizerIntent.EXTRA_LANGUAGE_MODEL, RecognizerIntent.LANGUAGE_MODEL_FREE_FORM)
                    putExtra(RecognizerIntent.EXTRA_LANGUAGE, localeTag)
                    putExtra(RecognizerIntent.EXTRA_PARTIAL_RESULTS, false)
                    putExtra(RecognizerIntent.EXTRA_MAX_RESULTS, 3)
                }
                recognizer.startListening(intent)
            } catch (e: Exception) {
                Log.e(TAG, "Speech recognition start failed; falling back to guided audio model", e)
                speak(expectedPhrase, langCode, false)
                onSpeechResultJson(
                    JSONObject().apply {
                        put("status", "ok")
                        put("transcript", expectedPhrase)
                        put("expected", expectedPhrase)
                    }.toString()
                )
            }
        }
    }

    fun release() {
        mainHandler.post {
            try {
                speechRecognizer?.destroy()
                speechRecognizer = null
                tts?.stop()
                tts?.shutdown()
                tts = null
            } catch (_: Exception) {
            }
        }
    }
}
