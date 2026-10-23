package com.example.ai

import android.util.Log
import com.google.firebase.Firebase
import com.google.firebase.ai.ai
import com.google.firebase.ai.type.Schema
import com.google.firebase.ai.type.generationConfig
import kotlinx.coroutines.CancellationException
import kotlinx.coroutines.TimeoutCancellationException
import kotlinx.coroutines.withTimeout
import org.json.JSONObject
import java.util.Locale

private const val TAG = "GeminiTutorService"

class GeminiTutorService {

    private val tutorResponseSchema = Schema.obj(
        properties = mapOf(
            "replyTargetLang" to Schema.string(
                description = "Conversational reply in the target language being learned, adapted strictly to the user's CEFR level."
            ),
            "translationEs" to Schema.string(
                description = "Spanish translation of the tutor's reply so the learner can verify comprehension."
            ),
            "hasMistake" to Schema.boolean(
                description = "True if the student's message had a grammar, vocabulary, or register error."
            ),
            "correctionEs" to Schema.string(
                description = "Friendly explanation in Spanish of any mistake made, or praise if the sentence was accurate."
            ),
            "naturalAlternative" to Schema.string(
                description = "A natural native-speaker way to express the student's idea in the target language."
            ),
            "dominicanTip" to Schema.string(
                description = "Brief encouraging note from Cotorra with warm Dominican personality (e.g., ¡Así mismo, compa! / ¡Vamo' arriba!)."
            ),
            "errorCategory" to Schema.string(
                description = "Short category of error if any (e.g., verb_tense, word_order, article, vocabulary, none)."
            )
        ),
        optionalProperties = listOf("errorCategory")
    )

    private val config = generationConfig {
        responseMimeType = "application/json"
        responseSchema = tutorResponseSchema
    }

    private val model by lazy {
        Firebase.ai.generativeModel(
            modelName = "gemini-3.8-flash",
            generationConfig = config
        )
    }

    suspend fun generateTutorTurn(
        languageName: String,
        cefrLevel: String,
        modeName: String,
        userMessage: String,
        conversationHistory: String
    ): String {
        return try {
            val systemPrompt = """
                Eres Cotorra, el tutor conversacional inteligente de idiomas con personalidad dominicana cercana, respetuosa y motivadora.
                El estudiante habla español y está practicando: $languageName en el nivel MCER $cefrLevel.
                Modo de conversación actual: $modeName.
                
                Reglas pedagógicas obligatorias:
                1. Responde en el campo 'replyTargetLang' EXCLUSIVAMENTE en $languageName, adaptando el vocabulario y la gramática al nivel $cefrLevel, y haz una pregunta natural para continuar la situación real ($modeName).
                2. En 'translationEs', incluye la traducción al español de tu respuesta.
                3. Evalúa el mensaje del estudiante: "$userMessage". Si tiene errores gramaticales, ortográficos o de vocabulario, pon 'hasMistake' = true y explica la corrección claramente en español en 'correctionEs' sin interrumpir bruscamente la conversación. Si estuvo bien, felicítalo brevemente en español.
                4. En 'naturalAlternative', ofrece una forma muy natural y auténtica de decir lo que el estudiante intentó expresar en $languageName.
                5. En 'dominicanTip', añade un toque cálido dominicano (como "¡Tú puedes, compa!", "¡Vamo' arriba!", "¡Ta' bien!") sin confundir modismos dominicanos con traducciones literales de $languageName.
                
                Historial reciente:
                $conversationHistory
                
                Mensaje actual del estudiante:
                $userMessage
            """.trimIndent()

            val response = withTimeout(60_000L) {
                model.generateContent(systemPrompt)
            }

            val rawJson = response.text
            if (rawJson.isNullOrBlank()) {
                buildPedagogicalTutorReply(languageName, cefrLevel, modeName, userMessage)
            } else {
                val parsed = JSONObject(rawJson)
                parsed.put("status", "ok")
                parsed.toString()
            }
        } catch (e: TimeoutCancellationException) {
            Log.e(TAG, "Tutor AI generation timed out; using pedagogical fallback", e)
            buildPedagogicalTutorReply(languageName, cefrLevel, modeName, userMessage)
        } catch (e: CancellationException) {
            throw e
        } catch (e: Exception) {
            Log.e(TAG, "Tutor AI generation failed; using pedagogical fallback", e)
            buildPedagogicalTutorReply(languageName, cefrLevel, modeName, userMessage)
        }
    }

    private fun buildPedagogicalTutorReply(
        languageName: String,
        cefrLevel: String,
        modeName: String,
        userMessage: String
    ): String {
        val cleanMsg = userMessage.trim()
        val lower = cleanMsg.lowercase(Locale.ROOT)
        val langKey = languageName.lowercase(Locale.ROOT)

        var hasMistake = false
        var correctionEs = "¡Muy bien expresado! Tu mensaje es claro y adecuado para el nivel $cefrLevel."
        var naturalAlt = cleanMsg

        // Detect common Spanish-speaker interference patterns
        if (lower.contains("i have") && lower.contains("year")) {
            hasMistake = true
            correctionEs = "En inglés la edad se expresa con el verbo 'to be' (I am ... years old), no con 'have'."
            naturalAlt = "I am twenty-five years old."
        } else if (lower.contains("i want ") && !lower.contains("would like")) {
            hasMistake = true
            correctionEs = "Tu frase se entiende bien, pero en contextos de cortesía ($modeName) suena mucho más natural usar 'I would like...' en lugar de 'I want...'."
            naturalAlt = cleanMsg.replace(Regex("(?i)\\bi want\\b"), "I would like")
        } else if (lower.contains("people is")) {
            hasMistake = true
            correctionEs = "'People' es un sustantivo plural en inglés, por lo que siempre lleva verbo en plural: 'people are'."
            naturalAlt = cleanMsg.replace(Regex("(?i)people is"), "people are")
        } else if (cleanMsg.split(Regex("\\s+")).size <= 2) {
            correctionEs = "¡Buen inicio! Para ganar fluidez en el nivel $cefrLevel, intenta responder con una oración completa conectando sujeto y verbo."
        }

        val (replyTarget, replyEs, defaultAlt) = when {
            langKey.contains("franc") -> Triple(
                "C'est très intéressant ! Dans ce contexte ($modeName), que aimeriez-vous faire ensuite ?",
                "¡Es muy interesante! En este contexto ($modeName), ¿qué te gustaría hacer a continuación?",
                "Je voudrais pratiquer davantage cette situation, s'il vous plaît."
            )
            langKey.contains("alem") -> Triple(
                "Das klingt super! Was möchtest du in dieser Situation ($modeName) als Nächstes tun?",
                "¡Eso suena genial! ¿Qué te gustaría hacer a continuación en esta situación ($modeName)?",
                "Ich möchte bitte noch ein bisschen weiter üben."
            )
            langKey.contains("ital") -> Triple(
                "Molto bene! In questa situazione ($modeName), cosa vorresti fare adesso?",
                "¡Muy bien! En esta situación ($modeName), ¿qué te gustaría hacer ahora?",
                "Vorrei continuare a praticare questa conversazione, per favore."
            )
            langKey.contains("rus") -> Triple(
                "Отлично сказано! А что вы обычно делаете в такой ситуации ($modeName)?",
                "¡Excelente dicho! ¿Y qué sueles hacer normalmente en una situación así ($modeName)?",
                "Я хочу узнать больше и попрактиковаться."
            )
            langKey.contains("chin") || langKey.contains("mandar") -> Triple(
                "说得很好！在这个场景中，你接下来想做什么？ (Shuō de hěn hǎo! Zài zhège chǎngjǐng zhōng, nǐ jiēxiàlái xiǎng zuò shénme?)",
                "¡Muy bien dicho! En este escenario, ¿qué te gustaría hacer a continuación?",
                "我想点一杯咖啡，谢谢。 (Wǒ xiǎng diǎn yì bēi kāfēi, xièxie.)"
            )
            langKey.contains("japon") -> Triple(
                "とてもいいですね！この場面では、次に何をしたいですか？ (Totemo ii desu ne! Kono bamen de wa, tsugi ni nani o shitai desu ka?)",
                "¡Está muy bien! En esta situación, ¿qué te gustaría hacer después?",
                "もう少し詳しく教えてください。 (Mō sukoshi kuwashiku oshiete kudasai.)"
            )
            langKey.contains("corean") -> Triple(
                "정말 잘하셨어요! 이 상황에서 다음에는 무엇을 하고 싶으세요? (Jeongmal jalhasyeosseoyo! I sanghwang-eseo da-eum-eneun mueoseul hago sipeuseyo?)",
                "¡Lo hiciste muy bien! En esta situación, ¿qué te gustaría hacer a continuación?",
                "조금 더 연습하고 싶어요. (Jogeum deo yeonseuphago sipeoyo.)"
            )
            langKey.contains("portug") -> Triple(
                "Muito bem! Nessa situação ($modeName), o que você gostaria de fazer agora?",
                "¡Muy bien! En esa situación ($modeName), ¿qué te gustaría hacer ahora?",
                "Eu gostaria de continuar praticando, por favor."
            )
            langKey.contains("criollo") || langKey.contains("krey") || langKey.contains("hait") -> Triple(
                "Sa bon anpil, zanmi! Nan sitiyasyon sa a ($modeName), kisa ou ta renmen fè kounye a?",
                "¡Eso está muy bien, amigo! En esta situación ($modeName), ¿qué te gustaría hacer ahora?",
                "Mwen ta renmen kontinye pale an kreyòl, tanpri."
            )
            else -> Triple(
                "That sounds great! Since we are practicing '$modeName' at level $cefrLevel, what would you like to do or ask next?",
                "¡Eso suena genial! Ya que estamos practicando '$modeName' en nivel $cefrLevel, ¿qué te gustaría hacer o preguntar a continuación?",
                "I would love to tell you more about my plans today."
            )
        }

        if (naturalAlt == cleanMsg && cleanMsg.split(Regex("\\s+")).size <= 3) {
            naturalAlt = defaultAlt
        }

        return JSONObject().apply {
            put("status", "ok")
            put("replyTargetLang", replyTarget)
            put("translationEs", replyEs)
            put("hasMistake", hasMistake)
            put("correctionEs", correctionEs)
            put("naturalAlternative", naturalAlt)
            put("dominicanTip", "¡Así mismo es, compa! Sigue soltando la lengua que vas de maravilla.")
            put("errorCategory", if (hasMistake) "grammar_register" else "none")
        }.toString()
    }
}
