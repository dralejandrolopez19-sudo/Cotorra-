window.COTORRA_CURRICULUM = {
  languages: [
    {
      id: "en",
      name: "Inglés",
      nativeName: "English",
      flag: "🇺🇸",
      ttsLang: "en",
      group: "standard",
      lessonsPerLevel: { A1: 120, A2: 160, B1: 200, B2: 240, C1: 280 },
      focusAreas: ["Pronunciación vocálica y th", "Verbos y phrasal verbs", "Tiempos verbales", "Expresiones idiomáticas", "Conversación natural"],
      specialModule: {
        title: "Fonética y Ritmo del Inglés (Stress-Timed)",
        subtitle: "Sonidos vocálicos, schwa /ə/, sonidos /θ/ y /ð/ y enlaces naturales",
        items: [
          { symbol: "/θ/ vs /ð/", example: "Think vs. This", meaning: "Lengua suave entre los dientes: sin vibrar (think) y vibrando (this)." },
          { symbol: "/ə/ Schwa", example: "About, Teacher, Today", meaning: "El sonido vocálico neutro y relajado más frecuente en inglés hablado." },
          { symbol: "Linking", example: "What_are_you_up_to?", meaning: "Unión fluida de consonante final con vocal inicial en conversación real." },
          { symbol: "-ed Endings", example: "Worked /t/, Played /d/, Wanted /ɪd/", meaning: "Tres pronunciaciones distintas del pasado regular según el sonido final." }
        ]
      }
    },
    {
      id: "fr",
      name: "Francés",
      nativeName: "Français",
      flag: "🇫🇷",
      ttsLang: "fr",
      group: "standard",
      lessonsPerLevel: { A1: 120, A2: 160, B1: 200, B2: 240, C1: 280 },
      focusAreas: ["Sonidos nasales (an, on, in)", "Liaison y elisión", "Género y concordancia", "Conjugaciones (être/avoir)", "Comprensión oral natural"],
      specialModule: {
        title: "Sonidos Nasales y Liaison Francesa",
        subtitle: "Domina la musicalidad y los enlaces del francés hablado",
        items: [
          { symbol: "Nasales /ɑ̃/ /ɔ̃/ /ɛ̃/", example: "Sans, Bon, Vin", meaning: "El aire sale por nariz y boca sin pronunciar la 'n' final como consonante dura." },
          { symbol: "La Liaison", example: "Les_amis [lezami]", meaning: "La consonante final muda se pronuncia como /z/ o /t/ cuando la siguiente palabra empieza con vocal." },
          { symbol: "Vocal /y/ (u)", example: "Tu vs. Tout", meaning: "Labios redondeados como para decir 'u', pero lengua en posición de 'i'." },
          { symbol: "E caduc (muda)", example: "Je ne sais pas → J'sais pas", meaning: "Reducción natural en el registro conversacional cotidiano." }
        ]
      }
    },
    {
      id: "de",
      name: "Alemán",
      nativeName: "Deutsch",
      flag: "🇩🇪",
      ttsLang: "de",
      group: "standard",
      lessonsPerLevel: { A1: 120, A2: 160, B1: 200, B2: 240, C1: 280 },
      focusAreas: ["Artículos der, die, das", "4 casos y declinaciones", "Verbos separables (Trennbare Verben)", "Orden de palabras (V2 y final)", "Compuestos léxicos"],
      specialModule: {
        title: "Artículos, Casos y Orden de Palabras (V2)",
        subtitle: "Estructura lógica del alemán desde el primer día",
        items: [
          { symbol: "der / die / das", example: "der Tisch, die Lampe, das Buch", meaning: "Aprende siempre cada sustantivo junto con su artículo masculino, femenino o neutro." },
          { symbol: "Verbo en 2ª posición", example: "Heute lerne ich Deutsch", meaning: "En oraciones principales enunciativas, el verbo conjugado siempre ocupa el segundo bloque." },
          { symbol: "Verbos separables", example: "anrufen → Ich rufe dich an", meaning: "El prefijo tónico viaja al final de la oración principal." },
          { symbol: "Umlaute ä, ö, ü y ß", example: "schön, für, Straße", meaning: "Vocales palatalizadas y la Eszett (ss sorda tras vocal larga)." }
        ]
      }
    },
    {
      id: "it",
      name: "Italiano",
      nativeName: "Italiano",
      flag: "🇮🇹",
      ttsLang: "it",
      group: "standard",
      lessonsPerLevel: { A1: 120, A2: 160, B1: 200, B2: 240, C1: 280 },
      focusAreas: ["Pronunciación (c/g, gli, gn, dobles)", "Conjugaciones y passato prossimo", "Preposiciones articuladas", "Falsos amigos con el español", "Conversación cotidiana"],
      specialModule: {
        title: "Fonética Italiana y Consonantes Dobles",
        subtitle: "Claves para no confundir italiano con español",
        items: [
          { symbol: "ci / ce vs chi / che", example: "Ciao /tʃao/ vs. Chiave /kjave/", meaning: "La 'h' conserva el sonido duro /k/ o /g/ ante 'e' e 'i'." },
          { symbol: "gli /ʎ/ y gn /ɲ/", example: "Famiglia, Gnocchi", meaning: "Sonidos palatales suaves fundamentales en el vocabulario diario." },
          { symbol: "Doppie (Dobles)", example: "Pala vs. Palla, Nono vs. Nonno", meaning: "Sostener la consonante doble cambia por completo el significado." },
          { symbol: "Preposizioni articolate", example: "in + il = nel, a + la = alla", meaning: "Fusión obligatoria de preposición simple con artículo determinado." }
        ]
      }
    },
    {
      id: "ru",
      name: "Ruso",
      nativeName: "Русский",
      flag: "🇷🇺",
      ttsLang: "ru",
      group: "standard",
      lessonsPerLevel: { A1: 120, A2: 160, B1: 200, B2: 240, C1: 280 },
      focusAreas: ["Alfabeto cirílico (33 letras)", "Sistema de 6 casos", "Aspecto verbal (imperfectivo/perfectivo)", "Acentuación móvil y akanie", "Pronunciación palatalizada"],
      specialModule: {
        title: "Módulo de Alfabeto Cirílico y Reducción Vocálica",
        subtitle: "Domina las letras amigas, falsas amigas y nuevas del cirílico",
        items: [
          { symbol: "А, К, М, О, Т", example: "Мама, Кот, Там", meaning: "Letras que suenan igual que en el alfabeto latino." },
          { symbol: "В /v/, Н /n/, Р /r/, С /s/", example: "Москва (Moskvá), Ресторан", meaning: "Falsos amigos visuales: parecen latinas pero representan otro sonido." },
          { symbol: "Ж, Ч, Ш, Щ, Ы, Ю, Я", example: "Привет (Privét), Хорошо (Joroshó)", meaning: "Letras propias del cirílico esenciales para leer carteles y diálogos." },
          { symbol: "Аканье (Akanie)", example: "Молоко → [məlɐˈko]", meaning: "La 'о' no acentuada se pronuncia como una 'a' suave." }
        ]
      }
    },
    {
      id: "zh",
      name: "Chino mandarín",
      nativeName: "中文 (普通话)",
      flag: "🇨🇳",
      ttsLang: "zh",
      group: "cjk_medium",
      lessonsPerLevel: { A1: 180, A2: 260, B1: 360, B2: 450, C1: 550 },
      focusAreas: ["Pinyin y fonética inicial/final", "Los 4 tonos + tono neutro", "Caracteres simplificados (Hanzi)", "Orden de trazos y radicales", "Clasificadores y partículas (了, 吗, 的)"],
      specialModule: {
        title: "Pinyin, los 4 Tonos y Caracteres Simplificados",
        subtitle: "Base tonal y visual del mandarín estándar",
        items: [
          { symbol: "1º Tono (mā 妈)", example: "Alto y plano sostenido", meaning: "Significa 'madre'. Mantén la voz alta y constante." },
          { symbol: "2º Tono (má 麻)", example: "Ascendente (como pregunta)", meaning: "Significa 'cáñamo'. Sube del tono medio al agudo." },
          { symbol: "3º Tono (mǎ 马)", example: "Descendente-ascendente", meaning: "Significa 'caballo'. Baja grave y vuelve a subir." },
          { symbol: "4º Tono (mà 骂)", example: "Descendente firme y breve", meaning: "Significa 'regañar'. Cae con fuerza desde arriba." }
        ]
      }
    },
    {
      id: "ja",
      name: "Japonés",
      nativeName: "日本語",
      flag: "🇯🇵",
      ttsLang: "ja",
      group: "japanese",
      lessonsPerLevel: { A1: 200, A2: 300, B1: 400, B2: 500, C1: 600 },
      focusAreas: ["Silabario Hiragana (46 básicos)", "Silabario Katakana (préstamos)", "Kanji por nivel JLPT/MCER", "Partículas gramaticales (は, が, を, に)", "Cortesía Desu/Masu y Keigo"],
      specialModule: {
        title: "Hiragana, Katakana y Kanji Esencial",
        subtitle: "Los tres sistemas de escritura integrados del japonés",
        items: [
          { symbol: "あ い う え お (Hiragana)", example: "ありがとう (Arigatō)", meaning: "Silabario fonético curvo para palabras nativas y gramática japonesa." },
          { symbol: "ア イ ウ エ オ (Katakana)", example: "コーヒー (Kōhī - Café)", meaning: "Silabario angular para palabras extranjeras, nombres y onomatopeyas." },
          { symbol: "日・本・人・水・食 (Kanji)", example: "日本人 (Nihonjin)", meaning: "Ideogramas con lectura china (On'yomi) y japonesa (Kun'yomi)." },
          { symbol: "Partículas は / を / に", example: "私は日本語を話します", meaning: "Marcan la función de cada palabra (tema, objeto directo, destino/tiempo)." }
        ]
      }
    },
    {
      id: "ko",
      name: "Coreano",
      nativeName: "한국어",
      flag: "🇰🇷",
      ttsLang: "ko",
      group: "cjk_medium",
      lessonsPerLevel: { A1: 180, A2: 260, B1: 360, B2: 450, C1: 550 },
      focusAreas: ["Alfabeto Hangul (bloques silábicos)", "Consonantes simples, aspiradas y tensas", "Partículas (은/는, 이/가, 을/를)", "Terminaciones verbales (-아요/-어요)", "Honoríficos y registros de habla"],
      specialModule: {
        title: "Hangul: El Alfabeto Científico en Bloques",
        subtitle: "Combina consonantes y vocales en sílabas visuales",
        items: [
          { symbol: "ㄱ ㄴ ㄷ ㄹ ㅁ ㅂ ㅅ ㅇ", example: "가 (ga), 나 (na), 다 (da)", meaning: "Las consonantes imitan la posición de la lengua y los labios al hablar." },
          { symbol: "ㅏ ㅓ ㅗ ㅜ ㅡ ㅣ", example: "아 (a), 어 (eo), 오 (o), 우 (u)", meaning: "Vocales basadas en el cielo (punto/trazo corto), la tierra (horizontal) y el ser humano (vertical)." },
          { symbol: "Bloque C + V + Batchim", example: "한 (ㅎ + ㅏ + ㄴ = Han)", meaning: "Cada carácter es una sílaba formada por consonante inicial, vocal y consonante final (batchim)." },
          { symbol: "Registro Cortés (-요)", example: "안녕하세요 (Annyeonghaseyo)", meaning: "Nivel cortés estándar (Haeyo-che) ideal para conversaciones cotidianas respetuosas." }
        ]
      }
    },
    {
      id: "pt",
      name: "Portugués",
      nativeName: "Português",
      flag: "🇧🇷",
      ttsLang: "pt",
      group: "standard",
      lessonsPerLevel: { A1: 120, A2: 160, B1: 200, B2: 240, C1: 280 },
      focusAreas: ["Vocales abiertas, cerradas y nasales (ão, õe)", "Palatalización de t/d en Brasil", "Conjugaciones e infinitivo pessoal", "Falsos amigos hispano-portugueses", "Variantes de Brasil y Portugal"],
      specialModule: {
        title: "Falsos Amigos y Variantes Brasil vs. Portugal",
        subtitle: "Habla portugués auténtico sin caer en el 'portuñol'",
        items: [
          { symbol: "ão / õe / ã", example: "Não, Corações, Maçã", meaning: "Diptongos y vocales nasales característicos del portugués." },
          { symbol: "ti / di en Brasil", example: "Bom dia [bõ ˈdʒi.ɐ], Noite [ˈnoj.tʃi]", meaning: "En gran parte de Brasil, 't' y 'd' ante sonido /i/ suenan como /tʃ/ y /dʒ/." },
          { symbol: "Falsos amigos", example: "Acordar = Despertar, Escritório = Oficina, Polvo = Pulpo", meaning: "Palabras idénticas al español pero con significado completamente distinto." },
          { symbol: "BR vs. PT", example: "Você está falando (BR) vs. Tu estás a falar (PT)", meaning: "Gerundio en Brasil frente a 'estar a + infinitivo' en Portugal." }
        ]
      }
    },
    {
      id: "ht",
      name: "Criollo haitiano",
      nativeName: "Kreyòl ayisyen",
      flag: "🇭🇹",
      ttsLang: "ht",
      group: "standard",
      lessonsPerLevel: { A1: 120, A2: 160, B1: 200, B2: 240, C1: 280 },
      focusAreas: ["Ortografía fonética oficial (IPN)", "Vocales orales y nasales (an, en, on)", "Marcadores preverbales (ap, te, pral)", "Negación con pa y artículos pospuestos", "Conversación cotidiana y convivencia"],
      specialModule: {
        title: "Ortografía Fonética y Gramática del Kreyòl Ayisyen",
        subtitle: "Una lengua con reglas propias, clara y 100% fonética",
        items: [
          { symbol: "1 sonido = 1 grafía", example: "Bonjou (Buenos días), Mèsi (Gracias)", meaning: "En Kreyòl no hay letras mudas: cada letra o dígrafo siempre suena igual." },
          { symbol: "ou /u/, ch /ʃ/, j /ʒ/", example: "Kouman ou ye? (¿Cómo estás?)", meaning: "'ou' suena como la 'u' española; 'ou' también es el pronombre 'tú/usted'." },
          { symbol: "Marcadores temporales", example: "Mwen pale / Mwen ap pale / Mwen te pale / Mwen pral pale", meaning: "El verbo no cambia de terminación: se anteponen partículas (ap = progresivo, te = pasado, pral = futuro)." },
          { symbol: "Negación con 'pa'", example: "Mwen pa konprann (No entiendo)", meaning: "Se coloca 'pa' directamente antes del verbo o marcador temporal." }
        ]
      }
    }
  ],

  cefrLevels: [
    {
      code: "A1",
      name: "Acceso (Principiante)",
      unlockCriteria: "80% de precisión acumulada en unidades A1 + aprobar la Prueba de Salida A1.",
      description: "Comprende y utiliza expresiones cotidianas muy frecuentes: presentarse, pedir información básica, comprar y desenvolverse en situaciones sencillas.",
      unlockedByDefault: true
    },
    {
      code: "A2",
      name: "Plataforma (Elemental)",
      unlockCriteria: "Completar hitos A1 + superar Evaluación de Salida A2 con ≥80% en las 4 competencias.",
      description: "Describe en términos sencillos aspectos de su pasado, entorno inmediato, viajes, salud y tareas habituales.",
      unlockedByDefault: false
    },
    {
      code: "B1",
      name: "Umbral (Intermedio)",
      unlockCriteria: "Superar Prueba de Salida A2 + 5 sesiones conversacionales guiadas aprobadas.",
      description: "Se desenvuelve en la mayor parte de situaciones de viaje y trabajo, narra experiencias, deseos y justifica opiniones brevemente.",
      unlockedByDefault: false
    },
    {
      code: "B2",
      name: "Avanzado (Intermedio Alto)",
      unlockCriteria: "Superar Prueba de Salida B1 + precisión ≥85% en producción escrita y oral.",
      description: "Se relaciona con hablantes nativos con fluidez y naturalidad, comprende textos complejos y defiende puntos de vista con matices.",
      unlockedByDefault: false
    },
    {
      code: "C1",
      name: "Dominio Operativo Eficaz",
      unlockCriteria: "Superar Prueba de Salida B2 + evaluación integral de expresión espontánea.",
      description: "Se expresa de forma fluida y espontánea sin esfuerzo evidente en ámbitos sociales, académicos y profesionales exigentes.",
      unlockedByDefault: false
    }
  ],

  // 10 COMPLETE, VERIFIED LESSONS FOR ENGLISH A1 covering all 11 exercise types
  englishA1Lessons: [
    {
      id: "en_a1_1",
      order: 1,
      unitTitle: "Unidad 1: Primeros pasos y presentaciones",
      title: "Saludos y presentarse con confianza",
      objective: "Saludar según la hora del día, decir tu nombre y responder preguntas básicas de presentación.",
      durationMin: 7,
      xpReward: 40,
      coinReward: 25,
      exercises: [
        {
          id: "en_1_ex1",
          type: "LISTEN_SELECT",
          competency: "LISTENING",
          instruction: "Escucha el audio y selecciona el saludo correcto en inglés.",
          audioText: "Good morning! Nice to meet you.",
          phonetic: "/ɡʊd ˈmɔːrnɪŋ naɪs tə miːt juː/",
          options: [
            "Good morning! Nice to meet you.",
            "Good night! See you tomorrow.",
            "Good afternoon! Where are you?",
            "Hello! What time is it?"
          ],
          correctAnswer: "Good morning! Nice to meet you.",
          explanationEs: "«Good morning» se usa por la mañana hasta el mediodía, y «Nice to meet you» significa «Mucho gusto en conocerte»."
        },
        {
          id: "en_1_ex2",
          type: "MULTIPLE_CHOICE",
          competency: "READING",
          instruction: "Completa el diálogo con la respuesta natural cuando alguien dice: «Hi! My name is Sarah. What's your name?»",
          prompt: "— Hi! My name is Sarah. What's your name?\n— _______________________",
          options: [
            "I'm Carlos. Nice to meet you!",
            "Yes, I have twenty years.",
            "Thank you, goodbye yesterday.",
            "She is from Boston."
          ],
          correctAnswer: "I'm Carlos. Nice to meet you!",
          explanationEs: "Para presentarte puedes usar «I'm [Nombre]» o «My name is [Nombre]», seguido de «Nice to meet you!»."
        },
        {
          id: "en_1_ex3",
          type: "MATCH_PAIRS",
          competency: "READING",
          instruction: "Relaciona cada expresión en inglés con su significado en español.",
          pairs: [
            { left: "Good morning", right: "Buenos días" },
            { left: "How is it going?", right: "¿Cómo te va?" },
            { left: "See you later", right: "Nos vemos luego" },
            { left: "Nice to meet you", right: "Mucho gusto" }
          ],
          correctAnswer: "Good morning:Buenos días|How is it going?:¿Cómo te va?|See you later:Nos vemos luego|Nice to meet you:Mucho gusto",
          explanationEs: "Estas cuatro expresiones forman la base de cualquier saludo y despedida cotidiana en inglés."
        },
        {
          id: "en_1_ex4",
          type: "ORDER_WORDS",
          competency: "WRITING",
          instruction: "Ordena las palabras para formar la oración: «Hola, me llamo Elena y estoy muy bien.»",
          prompt: "Hola, me llamo Elena y estoy muy bien.",
          words: ["Hello,", "my", "name", "is", "Elena", "and", "I", "am", "doing", "great."],
          correctAnswer: "Hello, my name is Elena and I am doing great.",
          explanationEs: "En inglés el sujeto («I») nunca se omite antes del verbo («am»)."
        },
        {
          id: "en_1_ex5",
          type: "ORAL_REPEAT",
          competency: "SPEAKING",
          instruction: "Escucha y pronuncia en voz alta esta frase de presentación.",
          audioText: "Good morning, my name is Alex and I am ready to learn.",
          translationEs: "Buenos días, mi nombre es Alex y estoy listo para aprender.",
          phonetic: "/ɡʊd ˈmɔːrnɪŋ maɪ neɪm ɪz ˈælɪks/",
          correctAnswer: "Good morning, my name is Alex and I am ready to learn.",
          explanationEs: "Recuerda cerrar los labios al final de «name» (/neɪm/) para que la 'm' suene clara."
        }
      ]
    },
    {
      id: "en_a1_2",
      order: 2,
      unitTitle: "Unidad 1: Primeros pasos y presentaciones",
      title: "Origen, países y nacionalidades",
      objective: "Preguntar y expresar de dónde eres y qué idiomas hablas usando el verbo 'to be' y 'speak'.",
      durationMin: 7,
      xpReward: 45,
      coinReward: 25,
      exercises: [
        {
          id: "en_2_ex1",
          type: "FILL_BLANK",
          competency: "WRITING",
          instruction: "Completa el espacio con la forma correcta del verbo 'to be' (am / is / are).",
          prompt: "Where ___ you from? I am from the Dominican Republic.",
          options: ["are", "is", "am", "be"],
          correctAnswer: "are",
          explanationEs: "Con el pronombre «you» siempre usamos «are»: «Where are you from?» (¿De dónde eres?)."
        },
        {
          id: "en_2_ex2",
          type: "CONTEXTUAL_TRANSLATION",
          competency: "WRITING",
          instruction: "Traduce al inglés dentro de este contexto de presentación internacional.",
          prompt: "Soy de Santo Domingo y hablo español.",
          correctAnswer: "I am from Santo Domingo and I speak Spanish.",
          acceptedAlternatives: [
            "I'm from Santo Domingo and I speak Spanish.",
            "I am from Santo Domingo and I speak Spanish",
            "I'm from Santo Domingo and I speak Spanish"
          ],
          explanationEs: "En inglés las nacionalidades y los idiomas siempre se escriben con mayúscula inicial («Spanish», «English», «Dominican»)."
        },
        {
          id: "en_2_ex3",
          type: "READING_COMPREHENSION",
          competency: "READING",
          instruction: "Lee el breve diálogo y responde la pregunta de comprensión.",
          passage: "Lucas: Hi! Are you from Mexico?\nValeria: No, I'm not. I'm from Colombia, from Medellín. And you?\nLucas: I'm from Brazil, so my native language is Portuguese, but I'm learning English now.",
          prompt: "¿Cuál es la lengua materna de Lucas según el diálogo?",
          options: [
            "Portugués (Portuguese)",
            "Español (Spanish)",
            "Inglés (English)",
            "Francés (French)"
          ],
          correctAnswer: "Portugués (Portuguese)",
          explanationEs: "Lucas dice claramente: «I'm from Brazil, so my native language is Portuguese»."
        },
        {
          id: "en_2_ex4",
          type: "SENTENCE_BUILDER",
          competency: "WRITING",
          instruction: "Construye la pregunta en inglés para esta situación: Quieres saber si tu nuevo compañero habla inglés.",
          prompt: "Situación: Pregúntale educadamente «¿Hablas inglés?»",
          words: ["Do", "you", "speak", "English?"],
          correctAnswer: "Do you speak English?",
          explanationEs: "Para hacer preguntas en presente simple con verbos de acción como «speak», usamos el auxiliar «Do» al inicio: «Do you speak...?»."
        }
      ]
    },
    {
      id: "en_a1_3",
      order: 3,
      unitTitle: "Unidad 1: Primeros pasos y presentaciones",
      title: "Números, edad y datos de contacto",
      objective: "Expresar tu edad correctamente en inglés (con 'to be', no 'to have') y dar tu número o correo.",
      durationMin: 7,
      xpReward: 45,
      coinReward: 30,
      exercises: [
        {
          id: "en_3_ex1",
          type: "MULTIPLE_CHOICE",
          competency: "READING",
          instruction: "Elige la forma correcta en inglés para decir «Tengo 24 años».",
          prompt: "Cuidado con el error típico de traducir palabra por palabra desde el español:",
          options: [
            "I am twenty-four years old.",
            "I have twenty-four years.",
            "I am twenty-four years.",
            "My age has twenty-four."
          ],
          correctAnswer: "I am twenty-four years old.",
          explanationEs: "¡Ojo, compa! En inglés la edad se expresa con el verbo «to be» (ser/estar), nunca con «have»: «I am 24 years old» o simplemente «I am 24»."
        },
        {
          id: "en_3_ex2",
          type: "DICTATION",
          competency: "LISTENING",
          instruction: "Escucha el audio y escribe exactamente la oración que oyes.",
          audioText: "My phone number is five five five, two four eight.",
          correctAnswer: "My phone number is five five five, two four eight.",
          acceptedAlternatives: [
            "My phone number is 555 248",
            "My phone number is five five five two four eight",
            "My phone number is five five five, two four eight"
          ],
          explanationEs: "En números telefónicos en inglés los dígitos suelen decirse uno por uno."
        },
        {
          id: "en_3_ex3",
          type: "FILL_BLANK",
          competency: "WRITING",
          instruction: "Completa cómo se lee un correo electrónico en inglés (`ana_20@mail.com`).",
          prompt: "En inglés, el símbolo '@' se dice ___ y el punto '.' se dice 'dot'.",
          options: ["at", "in", "on", "to"],
          correctAnswer: "at",
          explanationEs: "En direcciones de correo, '@' se pronuncia «at» y '.' se pronuncia «dot» (por ejemplo: ana at mail dot com)."
        },
        {
          id: "en_3_ex4",
          type: "FREE_WRITING",
          competency: "WRITING",
          instruction: "Escribe una frase corta en inglés diciendo tu nombre y de qué país o ciudad eres (ejemplo: My name is ... and I am from ...).",
          prompt: "Escribe tu presentación personal en inglés:",
          minWords: 4,
          requiredKeywords: ["from"],
          correctAnswer: "My name is Alex and I am from Santo Domingo.",
          explanationEs: "Excelente práctica de producción escrita usando «I am from...»."
        }
      ]
    },
    {
      id: "en_a1_4",
      order: 4,
      unitTitle: "Unidad 2: Familia, personas y entorno",
      title: "Familia y descripciones personales",
      objective: "Presentar a miembros de tu familia utilizando adjetivos posesivos (my, your, his, her) y describirlos.",
      durationMin: 7,
      xpReward: 50,
      coinReward: 30,
      exercises: [
        {
          id: "en_4_ex1",
          type: "MATCH_PAIRS",
          competency: "READING",
          instruction: "Relaciona cada miembro de la familia y posesivo con su significado.",
          pairs: [
            { left: "My sister", right: "Mi hermana" },
            { left: "His brother", right: "Su hermano (de él)" },
            { left: "Her mother", right: "Su madre (de ella)" },
            { left: "Our parents", right: "Nuestros padres" }
          ],
          correctAnswer: "My sister:Mi hermana|His brother:Su hermano (de él)|Her mother:Su madre (de ella)|Our parents:Nuestros padres",
          explanationEs: "En inglés «his» indica que algo pertenece a un hombre/niño y «her» que pertenece a una mujer/niña."
        },
        {
          id: "en_4_ex2",
          type: "FILL_BLANK",
          competency: "WRITING",
          instruction: "Elige el verbo correcto para la tercera persona singular (he/she).",
          prompt: "This is my sister Laura. She ___ two children and lives in Miami.",
          options: ["has", "have", "having", "is have"],
          correctAnswer: "has",
          explanationEs: "Con «he», «she» e «it», el verbo «have» cambia a «has» en presente afirmativo."
        },
        {
          id: "en_4_ex3",
          type: "ORDER_WORDS",
          competency: "WRITING",
          instruction: "Ordena las palabras recordando que en inglés el adjetivo va ANTES del sustantivo.",
          prompt: "Él es un médico muy amable.",
          words: ["He", "is", "a", "very", "kind", "doctor."],
          correctAnswer: "He is a very kind doctor.",
          explanationEs: "En inglés los adjetivos («kind») se colocan antes del sustantivo («doctor») y usamos el artículo «a/an» ante profesiones."
        },
        {
          id: "en_4_ex4",
          type: "ORAL_REPEAT",
          competency: "SPEAKING",
          instruction: "Pronuncia esta frase presentando a tu familia.",
          audioText: "My family lives in a big house near the beach.",
          translationEs: "Mi familia vive en una casa grande cerca de la playa.",
          phonetic: "/maɪ ˈfæməli lɪvz ɪn ə bɪɡ haʊs nɪr ðə biːtʃ/",
          correctAnswer: "My family lives in a big house near the beach.",
          explanationEs: "Fíjate en la diferencia entre la 'i' corta de «lives» /lɪvz/ y la 'i' larga de «beach» /biːtʃ/."
        }
      ]
    },
    {
      id: "en_a1_5",
      order: 5,
      unitTitle: "Unidad 2: Familia, personas y entorno",
      title: "Rutina diaria y decir la hora",
      objective: "Expresar a qué hora realizas tus actividades diarias utilizando el Present Simple y preposiciones de tiempo.",
      durationMin: 7,
      xpReward: 50,
      coinReward: 30,
      exercises: [
        {
          id: "en_5_ex1",
          type: "MULTIPLE_CHOICE",
          competency: "READING",
          instruction: "¿Qué preposición se utiliza en inglés para indicar una hora exacta del reloj?",
          prompt: "I usually wake up ___ 7:00 AM and start work ___ 8:30 AM.",
          options: ["at", "in", "on", "for"],
          correctAnswer: "at",
          explanationEs: "Usamos «at» para horas exactas (`at 7:00`), «on» para días (`on Monday`) e «in» para partes del día o meses (`in the morning`)."
        },
        {
          id: "en_5_ex2",
          type: "LISTEN_SELECT",
          competency: "LISTENING",
          instruction: "Escucha y selecciona qué hace David cada mañana.",
          audioText: "Every morning I drink a cup of coffee and read the news before work.",
          phonetic: "/ˈɛvri ˈmɔːrnɪŋ aɪ drɪŋk ə kʌp əv ˈkɔːfi/",
          options: [
            "Every morning I drink a cup of coffee and read the news before work.",
            "Every night I cook dinner and watch a movie after work.",
            "Every morning I go running in the park with my dog.",
            "Every afternoon I study English for twenty-five minutes."
          ],
          correctAnswer: "Every morning I drink a cup of coffee and read the news before work.",
          explanationEs: "«Before work» significa «antes del trabajo» y «a cup of coffee» es «una taza de café»."
        },
        {
          id: "en_5_ex3",
          type: "CONTEXTUAL_TRANSLATION",
          competency: "WRITING",
          instruction: "Traduce al inglés esta frase sobre tu hábito de estudio diario.",
          prompt: "Estudio inglés todos los días.",
          correctAnswer: "I study English every day.",
          acceptedAlternatives: [
            "I study English every day",
            "Every day I study English.",
            "Every day I study English"
          ],
          explanationEs: "«Every day» (dos palabras separadas) significa «todos los días / cada día»."
        },
        {
          id: "en_5_ex4",
          type: "SENTENCE_BUILDER",
          competency: "WRITING",
          instruction: "Construye la oración negativa para decir que ella no trabaja los domingos.",
          prompt: "Ella no trabaja los domingos.",
          words: ["She", "does", "not", "work", "on", "Sundays."],
          correctAnswer: "She does not work on Sundays.",
          explanationEs: "En tercera persona singular (he/she/it), la negación en presente usa «does not» (o «doesn't») + el verbo en forma base («work», sin -s)."
        }
      ]
    },
    {
      id: "en_a1_6",
      order: 6,
      unitTitle: "Unidad 3: Vida cotidiana y salidas",
      title: "Comida y pedir en un restaurante",
      objective: "Pedir comida y bebida educadamente usando 'I would like...' y 'Can I have...?' en una cafetería o restaurante.",
      durationMin: 7,
      xpReward: 55,
      coinReward: 35,
      exercises: [
        {
          id: "en_6_ex1",
          type: "MULTIPLE_CHOICE",
          competency: "READING",
          instruction: "Estás en un restaurante en Nueva York. ¿Cuál es la forma más cortés y natural de pedir el menú o un plato?",
          prompt: "Waiter: Good evening! Are you ready to order?\nYou: _______________________",
          options: [
            "Yes, I would like the grilled chicken with rice, please.",
            "Give me chicken now.",
            "I want eat chicken and water.",
            "For me is the chicken."
          ],
          correctAnswer: "Yes, I would like the grilled chicken with rice, please.",
          explanationEs: "«I would like...» (o «I'd like...») equivale a «Me gustaría / Quisiera...» y es mucho más cortés que «I want»."
        },
        {
          id: "en_6_ex2",
          type: "MATCH_PAIRS",
          competency: "READING",
          instruction: "Conecta cada frase útil de restaurante con su equivalente en español.",
          pairs: [
            { left: "Can I have the check, please?", right: "¿Me trae la cuenta, por favor?" },
            { left: "A table for two", right: "Una mesa para dos" },
            { left: "Still or sparkling water?", right: "¿Agua sin gas o con gas?" },
            { left: "I'm allergic to nuts", right: "Soy alérgico a los frutos secos" }
          ],
          correctAnswer: "Can I have the check, please?:¿Me trae la cuenta, por favor?|A table for two:Una mesa para dos|Still or sparkling water?:¿Agua sin gas o con gas?|I'm allergic to nuts:Soy alérgico a los frutos secos",
          explanationEs: "En EE. UU. se suele decir «the check» y en el Reino Unido «the bill» para pedir la cuenta."
        },
        {
          id: "en_6_ex3",
          type: "DICTATION",
          competency: "LISTENING",
          instruction: "Escucha al cliente y escribe exactamente lo que pide.",
          audioText: "Can I have a glass of water, please?",
          correctAnswer: "Can I have a glass of water, please?",
          acceptedAlternatives: [
            "Can I have a glass of water please?",
            "Can I have a glass of water please",
            "Can I have a glass of water, please"
          ],
          explanationEs: "«Can I have..., please?» es la estructura estándar para pedir cualquier cosa en tiendas o restaurantes."
        },
        {
          id: "en_6_ex4",
          type: "ORAL_REPEAT",
          competency: "SPEAKING",
          instruction: "Repite en voz alta esta frase para pedir la cuenta con pronunciación natural.",
          audioText: "Excuse me, could we have the check, please?",
          translationEs: "Disculpe, ¿nos podría traer la cuenta, por favor?",
          phonetic: "/ɪkˈskjuːz miː kʊd wi hæv ðə tʃɛk pliːz/",
          correctAnswer: "Excuse me, could we have the check, please?",
          explanationEs: "En «could» (/kʊd/) la letra 'l' es completamente muda."
        }
      ]
    },
    {
      id: "en_a1_7",
      order: 7,
      unitTitle: "Unidad 3: Vida cotidiana y salidas",
      title: "Direcciones, ciudad y transporte",
      objective: "Preguntar cómo llegar a un lugar en la ciudad y comprender indicaciones básicas (left, right, straight ahead).",
      durationMin: 7,
      xpReward: 55,
      coinReward: 35,
      exercises: [
        {
          id: "en_7_ex1",
          type: "FILL_BLANK",
          competency: "WRITING",
          instruction: "Completa la pregunta para saber si hay una estación de metro cerca.",
          prompt: "Excuse me, ___ there a subway station near here?",
          options: ["is", "are", "have", "does"],
          correctAnswer: "is",
          explanationEs: "En inglés «hay» en singular es «There is» y en pregunta se invierte a «Is there...?»."
        },
        {
          id: "en_7_ex2",
          type: "READING_COMPREHENSION",
          competency: "READING",
          instruction: "Lee las indicaciones y responde dónde está la farmacia (pharmacy).",
          passage: "Tourist: Excuse me, how can I get to the pharmacy?\nLocal: Go straight ahead for two blocks, then turn left on Main Street. The pharmacy is right next to the bank, across from the supermarket.",
          prompt: "¿Dónde se encuentra exactamente la farmacia?",
          options: [
            "Al lado del banco y frente al supermercado",
            "Detrás de la estación de tren",
            "A cinco cuadras a la derecha del hotel",
            "Dentro del centro comercial"
          ],
          correctAnswer: "Al lado del banco y frente al supermercado",
          explanationEs: "«Next to the bank» significa «al lado del banco» y «across from the supermarket» significa «frente a / al otro lado de la calle del supermercado»."
        },
        {
          id: "en_7_ex3",
          type: "ORDER_WORDS",
          competency: "WRITING",
          instruction: "Ordena las palabras para dar esta indicación: «Sigue recto y gira a la derecha en el semáforo.»",
          prompt: "Sigue recto y gira a la derecha en el semáforo.",
          words: ["Go", "straight", "ahead", "and", "turn", "right", "at", "the", "traffic", "light."],
          correctAnswer: "Go straight ahead and turn right at the traffic light.",
          explanationEs: "«Go straight ahead» = sigue recto; «turn right/left» = gira a la derecha/izquierda."
        },
        {
          id: "en_7_ex4",
          type: "LISTEN_SELECT",
          competency: "LISTENING",
          instruction: "Escucha el anuncio en el aeropuerto y selecciona la puerta de embarque correcta.",
          audioText: "Flight two zero four to Santo Domingo is now boarding at gate B twelve.",
          phonetic: "/flaɪt tuː ˈzɪroʊ fɔːr ... ɡeɪt biː twɛlv/",
          options: [
            "Flight 204 to Santo Domingo is boarding at gate B12.",
            "Flight 402 to Miami is delayed at gate A20.",
            "Flight 204 to Madrid is boarding at gate C2.",
            "Flight 214 to New York is cancelled."
          ],
          correctAnswer: "Flight 204 to Santo Domingo is boarding at gate B12.",
          explanationEs: "«Now boarding at gate B twelve» indica que el embarque está abierto en la puerta B12."
        }
      ]
    },
    {
      id: "en_a1_8",
      order: 8,
      unitTitle: "Unidad 4: Compras, gustos y planes",
      title: "Compras, ropa y preguntar precios",
      objective: "Preguntar cuánto cuesta un producto (How much is this / are these?), pedir tallas y pagar.",
      durationMin: 7,
      xpReward: 60,
      coinReward: 35,
      exercises: [
        {
          id: "en_8_ex1",
          type: "MULTIPLE_CHOICE",
          competency: "READING",
          instruction: "Quieres comprar unos zapatos (plural: these shoes). ¿Cómo preguntas el precio?",
          prompt: "Excuse me, _______________________",
          options: [
            "how much are these shoes?",
            "how many is this shoes?",
            "what price have the shoes?",
            "how much cost this?"
          ],
          correctAnswer: "how much are these shoes?",
          explanationEs: "Usamos «How much is this...?» para un objeto singular y «How much are these...?» para objetos en plural como «shoes», «jeans» o «glasses»."
        },
        {
          id: "en_8_ex2",
          type: "FILL_BLANK",
          competency: "WRITING",
          instruction: "Completa la pregunta para saber si puedes pagar con tarjeta de crédito.",
          prompt: "Can I pay ___ credit card, or is it cash only?",
          options: ["by", "with", "in", "for"],
          correctAnswer: "by",
          explanationEs: "En inglés se dice «pay by card / pay by credit card», pero «pay in cash» (pagar en efectivo)."
        },
        {
          id: "en_8_ex3",
          type: "CONTEXTUAL_TRANSLATION",
          competency: "WRITING",
          instruction: "Traduce al inglés esta pregunta en una tienda de ropa:",
          prompt: "¿Tienen esta camisa en talla mediana?",
          correctAnswer: "Do you have this shirt in medium?",
          acceptedAlternatives: [
            "Do you have this shirt in a medium?",
            "Do you have this shirt in medium size?",
            "Do you have this shirt in size medium?",
            "Do you have this shirt in medium"
          ],
          explanationEs: "«This shirt» = esta camisa; «in medium / in size medium» = en talla mediana."
        },
        {
          id: "en_8_ex4",
          type: "ORAL_REPEAT",
          competency: "SPEAKING",
          instruction: "Pronuncia esta frase útil cuando solo estás mirando en una tienda.",
          audioText: "I am just looking, thank you very much.",
          translationEs: "Solo estoy mirando, muchas gracias.",
          phonetic: "/aɪ æm dʒʌst ˈlʊkɪŋ θæŋk juː ˈvɛri mʌtʃ/",
          correctAnswer: "I am just looking, thank you very much.",
          explanationEs: "Cuando un vendedor pregunta «Can I help you?», «I'm just looking, thank you» es la respuesta natural y educada."
        }
      ]
    },
    {
      id: "en_a1_9",
      order: 9,
      unitTitle: "Unidad 4: Compras, gustos y planes",
      title: "Tiempo libre, gustos y planes de fin de semana",
      objective: "Expresar qué te gusta hacer en tu tiempo libre ('like + verbo -ing') y hacer planes.",
      durationMin: 7,
      xpReward: 60,
      coinReward: 40,
      exercises: [
        {
          id: "en_9_ex1",
          type: "FILL_BLANK",
          competency: "WRITING",
          instruction: "Completa la oración con la forma correcta tras el verbo 'enjoy' o 'like'.",
          prompt: "In my free time, I really like ___ to music and dancing.",
          options: ["listening", "listen", "to listening", "listens"],
          correctAnswer: "listening",
          explanationEs: "Después de verbos de preferencia como «like», «love» o «enjoy», usamos la forma con «-ing» («listening», «dancing») para hablar de pasatiempos."
        },
        {
          id: "en_9_ex2",
          type: "MATCH_PAIRS",
          competency: "READING",
          instruction: "Relaciona cada actividad de tiempo libre con su significado.",
          pairs: [
            { left: "Go for a walk", right: "Salir a caminar / dar un paseo" },
            { left: "Hang out with friends", right: "Pasar el rato con amigos" },
            { left: "Watch a series", right: "Ver una serie" },
            { left: "Play the guitar", right: "Tocar la guitarra" }
          ],
          correctAnswer: "Go for a walk:Salir a caminar / dar un paseo|Hang out with friends:Pasar el rato con amigos|Watch a series:Ver una serie|Play the guitar:Tocar la guitarra",
          explanationEs: "En inglés «play» sirve tanto para jugar deportes («play baseball») como para tocar instrumentos musicales («play the guitar»)."
        },
        {
          id: "en_9_ex3",
          type: "FREE_WRITING",
          competency: "WRITING",
          instruction: "Escribe una oración en inglés contando qué te gusta hacer los fines de semana (usa 'I like' o 'On weekends').",
          prompt: "What do you like doing on weekends?",
          minWords: 4,
          requiredKeywords: ["like"],
          correctAnswer: "On weekends I like going to the beach with my friends.",
          explanationEs: "¡Muy bien! Expresar tus propios gustos consolida la memoria a largo plazo."
        },
        {
          id: "en_9_ex4",
          type: "SENTENCE_BUILDER",
          competency: "WRITING",
          instruction: "Invita a un amigo a tomar un café mañana por la tarde.",
          prompt: "¿Quieres tomar un café mañana por la tarde?",
          words: ["Do", "you", "want", "to", "grab", "a", "coffee", "tomorrow", "afternoon?"],
          correctAnswer: "Do you want to grab a coffee tomorrow afternoon?",
          explanationEs: "«Grab a coffee» es una expresión coloquial muy natural en inglés para decir «ir a tomar un café rápido»."
        }
      ]
    },
    {
      id: "en_a1_10",
      order: 10,
      unitTitle: "Unidad 4: Compras, gustos y planes",
      title: "Evaluación Acumulativa e Hito A1",
      objective: "Demostrar dominio práctico de las 4 competencias (escucha, lectura, habla y escritura) en situaciones A1 integradas.",
      durationMin: 10,
      xpReward: 100,
      coinReward: 60,
      isMilestoneEvaluation: true,
      exercises: [
        {
          id: "en_10_ex1",
          type: "LISTEN_SELECT",
          competency: "LISTENING",
          instruction: "Evaluación Auditiva: Escucha el mensaje completo y selecciona la opción correcta.",
          audioText: "Hi! I am Sofia from Santo Domingo. I am twenty-six years old and I work at a hotel. I would like to reserve a table for two at eight o'clock.",
          phonetic: "/haɪ aɪ æm soʊˈfiːə frʌm ˈsæntoʊ dəˈmɪŋɡoʊ/",
          options: [
            "Sofía tiene 26 años, trabaja en un hotel y quiere reservar una mesa para dos a las 8:00.",
            "Sofía tiene 62 años, busca una farmacia y viaja mañana a las 8:00.",
            "Sofía es profesora de inglés y quiere comprar dos boletos de tren.",
            "Sofía llama para cancelar una habitación de hotel para cuatro personas."
          ],
          correctAnswer: "Sofía tiene 26 años, trabaja en un hotel y quiere reservar una mesa para dos a las 8:00.",
          explanationEs: "Has comprendido presentación, edad («twenty-six»), trabajo («work at a hotel») y una reserva en restaurante («table for two at eight o'clock»)."
        },
        {
          id: "en_10_ex2",
          type: "READING_COMPREHENSION",
          competency: "READING",
          instruction: "Evaluación Lectora: Lee el correo de bienvenida y responde la pregunta.",
          passage: "Dear Alejandro,\nWelcome to the International Language Exchange in Boston! Our first meeting is this Friday at 6:30 PM at the Blue Harbor Café (next to the central library). Please bring your student ID. If you have any questions, you can call Marco at 555-0192.",
          prompt: "¿Cuándo y dónde es la primera reunión del intercambio?",
          options: [
            "Este viernes a las 6:30 PM en el Blue Harbor Café, al lado de la biblioteca central.",
            "El sábado por la mañana dentro de la biblioteca central.",
            "El viernes a las 8:00 PM frente a la estación de autobuses.",
            "El lunes a las 6:30 AM en la oficina de Marco."
          ],
          correctAnswer: "Este viernes a las 6:30 PM en el Blue Harbor Café, al lado de la biblioteca central.",
          explanationEs: "El texto indica: «this Friday at 6:30 PM at the Blue Harbor Café (next to the central library)»."
        },
        {
          id: "en_10_ex3",
          type: "DICTATION",
          competency: "WRITING",
          instruction: "Evaluación de Escucha y Escritura: Escribe la oración que escuchas.",
          audioText: "Excuse me, how much is this jacket and can I pay by card?",
          correctAnswer: "Excuse me, how much is this jacket and can I pay by card?",
          acceptedAlternatives: [
            "Excuse me how much is this jacket and can I pay by card",
            "Excuse me, how much is this jacket and can I pay by card",
            "Excuse me how much is this jacket and can I pay by card?"
          ],
          explanationEs: "Integra vocabulario de compras («how much is this jacket») y medios de pago («pay by card»)."
        },
        {
          id: "en_10_ex4",
          type: "ORAL_REPEAT",
          competency: "SPEAKING",
          instruction: "Evaluación Oral: Pronuncia con claridad esta presentación completa de nivel A1.",
          audioText: "Hello! My name is Daniel, I am from the Dominican Republic, and I speak Spanish and English.",
          translationEs: "¡Hola! Me llamo Daniel, soy de la República Dominicana y hablo español e inglés.",
          phonetic: "/həˈloʊ maɪ neɪm ɪz ˈdænjəl .../",
          correctAnswer: "Hello! My name is Daniel, I am from the Dominican Republic, and I speak Spanish and English.",
          explanationEs: "¡Excelente trabajo completando la evaluación integradora de las 10 lecciones base de Inglés A1!"
        }
      ]
    }
  ],

  // Starter verified lessons for the other 9 languages so every language has real interactive exercises
  starterLessonsByLang: {
    fr: [
      {
        id: "fr_a1_1",
        order: 1,
        unitTitle: "Unidad 1: Salutations et Liaisons",
        title: "Saludarse y presentarse en francés",
        objective: "Saludar con 'Bonjour / Bonsoir', presentarse con 'Je m'appelle...' y usar fórmulas de cortesía.",
        durationMin: 7,
        xpReward: 45,
        coinReward: 25,
        exercises: [
          {
            id: "fr_1_ex1",
            type: "LISTEN_SELECT",
            competency: "LISTENING",
            instruction: "Escucha el audio en francés y selecciona la frase correcta.",
            audioText: "Bonjour ! Je m'appelle Camille. Enchantée !",
            phonetic: "/bɔ̃ʒuʁ ʒə mapɛl kamij ɑ̃ʃɑ̃te/",
            options: [
              "Bonjour ! Je m'appelle Camille. Enchantée !",
              "Bonsoir ! Où est la gare, s'il vous plaît ?",
              "Salut ! Je ne comprends pas.",
              "Au revoir et à demain !"
            ],
            correctAnswer: "Bonjour ! Je m'appelle Camille. Enchantée !",
            explanationEs: "«Bonjour» es el saludo diurno estándar, «Je m'appelle...» significa «Me llamo...» y «Enchanté(e)» es «Encantado(a)»."
          },
          {
            id: "fr_1_ex2",
            type: "MATCH_PAIRS",
            competency: "READING",
            instruction: "Conecta cada expresión francesa con su significado en español.",
            pairs: [
              { left: "S'il vous plaît", right: "Por favor (formal)" },
              { left: "Merci beaucoup", right: "Muchas gracias" },
              { left: "Comment allez-vous ?", right: "¿Cómo está usted?" },
              { left: "À bientôt", right: "Hasta pronto" }
            ],
            correctAnswer: "S'il vous plaît:Por favor (formal)|Merci beaucoup:Muchas gracias|Comment allez-vous ?:¿Cómo está usted?|À bientôt:Hasta pronto",
            explanationEs: "En «Comment allez-vous ?» se produce liaison: la 't' final de 'Comment' suena unida a 'allez' (/kɔmɑ̃talevu/)."
          },
          {
            id: "fr_1_ex3",
            type: "ORDER_WORDS",
            competency: "WRITING",
            instruction: "Ordena las palabras para decir: «Yo hablo español y aprendo francés.»",
            prompt: "Yo hablo español y aprendo francés.",
            words: ["Je", "parle", "espagnol", "et", "j'apprends", "le", "français."],
            correctAnswer: "Je parle espagnol et j'apprends le français.",
            explanationEs: "Ante un verbo que comienza por vocal («apprends»), «je» se apostrofa como «j'»."
          },
          {
            id: "fr_1_ex4",
            type: "ORAL_REPEAT",
            competency: "SPEAKING",
            instruction: "Pronuncia esta frase practicando los sonidos nasales /ɔ̃/ y /ɑ̃/.",
            audioText: "Bonjour, je voudrais un croissant et un café, s'il vous plaît.",
            translationEs: "Buenos días, quisiera un cruasán y un café, por favor.",
            phonetic: "/bɔ̃ʒuʁ ʒə vudʁɛ œ̃ kʁwasɑ̃ e œ̃ kafe sil vu plɛ/",
            correctAnswer: "Bonjour, je voudrais un croissant et un café, s'il vous plaît.",
            explanationEs: "«Je voudrais» es el condicional de cortesía («quisiera») imprescindible en Francia."
          }
        ]
      }
    ],
    de: [
      {
        id: "de_a1_1",
        order: 1,
        unitTitle: "Unidad 1: Begrüßung und Artikel",
        title: "Saludos, presentaciones y orden V2 en alemán",
        objective: "Saludar en alemán, presentarse con 'Ich heiße...' y respetar la posición 2 del verbo.",
        durationMin: 7,
        xpReward: 45,
        coinReward: 25,
        exercises: [
          {
            id: "de_1_ex1",
            type: "LISTEN_SELECT",
            competency: "LISTENING",
            instruction: "Escucha y selecciona la presentación en alemán.",
            audioText: "Guten Morgen! Ich heiße Lukas und ich komme aus Berlin.",
            phonetic: "/ˈɡuːtn̩ ˈmɔʁɡn̩ ɪç ˈhaɪ̯sə ˈluːkas/",
            options: [
              "Guten Morgen! Ich heiße Lukas und ich komme aus Berlin.",
              "Gute Nacht! Bis morgen in München.",
              "Entschuldigung, wo ist der Bahnhof?",
              "Ich trinke gern Wasser und Kaffee."
            ],
            correctAnswer: "Guten Morgen! Ich heiße Lukas und ich komme aus Berlin.",
            explanationEs: "«Ich heiße...» significa «Me llamo...» (con ß = doble s) y «Ich komme aus...» indica tu lugar de origen."
          },
          {
            id: "de_1_ex2",
            type: "MATCH_PAIRS",
            competency: "READING",
            instruction: "Relaciona cada sustantivo alemán (con su artículo obligatorio) con su traducción.",
            pairs: [
              { left: "der Kaffee", right: "el café (masculino)" },
              { left: "die Sprache", right: "el idioma (femenino)" },
              { left: "das Wasser", right: "el agua (neutro)" },
              { left: "Vielen Dank", right: "Muchas gracias" }
            ],
            correctAnswer: "der Kaffee:el café (masculino)|die Sprache:el idioma (femenino)|das Wasser:el agua (neutro)|Vielen Dank:Muchas gracias",
            explanationEs: "En alemán todos los sustantivos se escriben con mayúscula inicial (`Kaffee`, `Sprache`, `Wasser`)."
          },
          {
            id: "de_1_ex3",
            type: "ORDER_WORDS",
            competency: "WRITING",
            instruction: "Ordena la oración respetando que el verbo conjugado ('lerne') vaya en segunda posición.",
            prompt: "Hoy aprendo alemán.",
            words: ["Heute", "lerne", "ich", "Deutsch."],
            correctAnswer: "Heute lerne ich Deutsch.",
            explanationEs: "Cuando la oración empieza con un adverbio como «Heute» (Hoy), el verbo «lerne» se mantiene en 2º lugar y el sujeto «ich» pasa al 3º."
          }
        ]
      }
    ],
    it: [
      {
        id: "it_a1_1",
        order: 1,
        unitTitle: "Unidad 1: Primi Passi in Italiano",
        title: "Saludos, cortesía y presentaciones en italiano",
        objective: "Saludar formal e informalmente, presentarse con 'Mi chiamo...' y pedir un café en Italia.",
        durationMin: 7,
        xpReward: 45,
        coinReward: 25,
        exercises: [
          {
            id: "it_1_ex1",
            type: "MULTIPLE_CHOICE",
            competency: "READING",
            instruction: "¿Cómo se escribe y pronuncia «Me llamo Marco, mucho gusto» en italiano?",
            prompt: "Cuidado con el sonido /k/ en 'chiamo':",
            options: [
              "Mi chiamo Marco, piacere di conoscerti!",
              "Me llamo Marco, molto gusto!",
              "Io chiamo Marco, grazie mille!",
              "Il mio nome ha Marco, arrivederci!"
            ],
            correctAnswer: "Mi chiamo Marco, piacere di conoscerti!",
            explanationEs: "En italiano «ch» ante 'i' o 'e' suena /k/ («Mi chiamo» = /mi ˈkjamo/), y «Piacere di conoscerti» es «Mucho gusto en conocerte»."
          },
          {
            id: "it_1_ex2",
            type: "MATCH_PAIRS",
            competency: "READING",
            instruction: "Relaciona cada expresión italiana con su significado.",
            pairs: [
              { left: "Buongiorno", right: "Buenos días" },
              { left: "Per favore", right: "Por favor" },
              { left: "Vorrei un caffè", right: "Quisiera un café" },
              { left: "A presto", right: "Hasta pronto" }
            ],
            correctAnswer: "Buongiorno:Buenos días|Per favore:Por favor|Vorrei un caffè:Quisiera un café|A presto:Hasta pronto",
            explanationEs: "«Vorrei» (quisiera) es la forma cortés ideal para pedir en bares y restaurantes italianos."
          },
          {
            id: "it_1_ex3",
            type: "ORAL_REPEAT",
            competency: "SPEAKING",
            instruction: "Pronuncia esta frase cuidando la consonante doble en 'caffè' y 'cornetto'.",
            audioText: "Buongiorno, vorrei un caffè macchiato e un cornetto, per favore.",
            translationEs: "Buenos días, quisiera un café cortado y un cruasán, por favor.",
            phonetic: "/bwɔnˈdʒorno vorˈrɛi un kafˈfɛ makˈkjato/",
            correctAnswer: "Buongiorno, vorrei un caffè macchiato e un cornetto, per favore.",
            explanationEs: "En Italia el desayuno clásico de cafetería es «un caffè e un cornetto»."
          }
        ]
      }
    ],
    ru: [
      {
        id: "ru_a1_1",
        order: 1,
        unitTitle: "Unidad 1: Кириллица и Приветствие",
        title: "Alfabeto cirílico en acción y primeros saludos",
        objective: "Leer palabras básicas en cirílico, saludar con 'Привет / Здравствуйте' y decir cómo te llamas.",
        durationMin: 8,
        xpReward: 50,
        coinReward: 30,
        exercises: [
          {
            id: "ru_1_ex1",
            type: "MATCH_PAIRS",
            competency: "READING",
            instruction: "Relaciona cada palabra rusa en cirílico con su pronunciación y significado.",
            pairs: [
              { left: "Привет (Privét)", right: "Hola (informal)" },
              { left: "Спасибо (Spasíba)", right: "Gracias" },
              { left: "Да / Нет (Da / Niet)", right: "Sí / No" },
              { left: "Меня зовут... (Minyá zavút...)", right: "Me llamo..." }
            ],
            correctAnswer: "Привет (Privét):Hola (informal)|Спасибо (Spasíba):Gracias|Да / Нет (Da / Niet):Sí / No|Меня зовут... (Minyá zavút...):Me llamo...",
            explanationEs: "En «Спасибо» y «Меня зовут», las letras 'о' no acentuadas se pronuncian como 'a' suave (akanie)."
          },
          {
            id: "ru_1_ex2",
            type: "MULTIPLE_CHOICE",
            competency: "READING",
            instruction: "En ruso, el verbo «ser/estar» (быть) en tiempo presente normalmente se omite. ¿Cómo se dice «Yo soy estudiante»?",
            prompt: "Observa la estructura directa Sujeto + Sustantivo:",
            options: [
              "Я студент (Ya studént)",
              "Я есть студент",
              "Мой студент",
              "Ты студент"
            ],
            correctAnswer: "Я студент (Ya studént)",
            explanationEs: "«Я» significa «Yo» y «студент» es «estudiante». En presente no hace falta verbo copulativo entre ambos."
          },
          {
            id: "ru_1_ex3",
            type: "ORAL_REPEAT",
            competency: "SPEAKING",
            instruction: "Escucha y repite esta presentación en ruso.",
            audioText: "Привет! Меня зовут Алекс. Очень приятно!",
            translationEs: "¡Hola! Me llamo Alex. ¡Mucho gusto!",
            phonetic: "/prʲɪˈvʲet mʲɪˈnʲa zɐˈvut ˈalʲɪks ˈotɕɪnʲ prʲɪˈjatnə/",
            correctAnswer: "Привет! Меня зовут Алекс. Очень приятно!",
            explanationEs: "«Очень приятно» (Óchen priyátna) significa literalmente «Muy agradable / Mucho gusto»."
          }
        ]
      }
    ],
    zh: [
      {
        id: "zh_a1_1",
        order: 1,
        unitTitle: "Unidad 1: 拼音与日常问候 (Pinyin y Tonos)",
        title: "Los 4 tonos, saludos y preguntas con 吗 (ma)",
        objective: "Saludar con '你好 (Nǐ hǎo)', presentarse con '我叫 (Wǒ jiào)...' y formar preguntas añadiendo '吗'.",
        durationMin: 8,
        xpReward: 50,
        coinReward: 30,
        exercises: [
          {
            id: "zh_1_ex1",
            type: "MATCH_PAIRS",
            competency: "READING",
            instruction: "Relaciona cada expresión en caracteres chinos y pinyin con su significado.",
            pairs: [
              { left: "你好 (Nǐ hǎo)", right: "Hola" },
              { left: "谢谢 (Xièxie)", right: "Gracias" },
              { left: "我叫... (Wǒ jiào...)", right: "Me llamo..." },
              { left: "再见 (Zàijiàn)", right: "Adiós / Hasta luego" }
            ],
            correctAnswer: "你好 (Nǐ hǎo):Hola|谢谢 (Xièxie):Gracias|我叫... (Wǒ jiào...):Me llamo...|再见 (Zàijiàn):Adiós / Hasta luego",
            explanationEs: "Cuando dos terceros tonos van seguidos como en «Nǐ hǎo», el primero se pronuncia como segundo tono ascendente («Ní hǎo»)."
          },
          {
            id: "zh_1_ex2",
            type: "MULTIPLE_CHOICE",
            competency: "READING",
            instruction: "¿Cómo conviertes la afirmación «你是老师 (Nǐ shì lǎoshī - Tú eres profesor)» en la pregunta «¿Eres profesor?»?",
            prompt: "En chino mandarín no se invierte el orden de las palabras para preguntar:",
            options: [
              "Añadiendo la partícula 吗 (ma) al final: 你是老师吗？",
              "Cambiando el verbo al principio: 是你老师？",
              "Duplicando el pronombre: 你你老师？",
              "Quitando el verbo 是"
            ],
            correctAnswer: "Añadiendo la partícula 吗 (ma) al final: 你是老师吗？",
            explanationEs: "La partícula interrogativa «吗 (ma)» en tono neutro al final de cualquier oración afirmativa la transforma inmediatamente en una pregunta de sí/no."
          },
          {
            id: "zh_1_ex3",
            type: "ORAL_REPEAT",
            competency: "SPEAKING",
            instruction: "Escucha y repite cuidando los tonos de esta presentación en mandarín.",
            audioText: "你好，我叫卡洛斯，很高兴认识你。",
            translationEs: "Hola, me llamo Carlos, mucho gusto en conocerte.",
            phonetic: "Nǐ hǎo, wǒ jiào Kǎluòsī, hěn gāoxìng rènshi nǐ.",
            correctAnswer: "你好，我叫卡洛斯，很高兴认识你。",
            explanationEs: "«很高兴认识你 (Hěn gāoxìng rènshi nǐ)» significa «Muy feliz de conocerte»."
          }
        ]
      }
    ],
    ja: [
      {
        id: "ja_a1_1",
        order: 1,
        unitTitle: "Unidad 1: ひらがなと自己紹介 (Hiragana y Presentación)",
        title: "Saludos, Hiragana básico y la partícula は (wa)",
        objective: "Presentarse educadamente con 'Hajimemashite... desu' y comprender el uso de la partícula de tema は.",
        durationMin: 8,
        xpReward: 55,
        coinReward: 30,
        exercises: [
          {
            id: "ja_1_ex1",
            type: "MATCH_PAIRS",
            competency: "READING",
            instruction: "Relaciona cada saludo japonés en Hiragana/Kanji con su significado.",
            pairs: [
              { left: "おはようございます (Ohayō gozaimasu)", right: "Buenos días (cortés)" },
              { left: "こんにちは (Konnichiwa)", right: "Hola / Buenas tardes" },
              { left: "ありがとうございます (Arigatō gozaimasu)", right: "Muchas gracias (cortés)" },
              { left: "はじめまして (Hajimemashite)", right: "Mucho gusto (al conocerse)" }
            ],
            correctAnswer: "おはようございます (Ohayō gozaimasu):Buenos días (cortés)|こんにちは (Konnichiwa):Hola / Buenas tardes|ありがとうございます (Arigatō gozaimasu):Muchas gracias (cortés)|はじめまして (Hajimemashite):Mucho gusto (al conocerse)",
            explanationEs: "«Hajimemashite» se dice al principio de la primera presentación con alguien."
          },
          {
            id: "ja_1_ex2",
            type: "MULTIPLE_CHOICE",
            competency: "READING",
            instruction: "En la oración «わたしは マリアです (Watashi wa Maria desu - Yo soy María)», ¿cómo se pronuncia el carácter は cuando funciona como partícula de tema?",
            prompt: "Observa la regla ortográfica del Hiragana:",
            options: [
              "Se pronuncia «wa» (/wa/) aunque se escriba con el carácter «ha» (は).",
              "Se pronuncia «ha» aspirado.",
              "Es completamente mudo.",
              "Se pronuncia «o»."
            ],
            correctAnswer: "Se pronuncia «wa» (/wa/) aunque se escriba con el carácter «ha» (は).",
            explanationEs: "El hiragana は representa la sílaba 'ha' en palabras normales, pero cuando actúa como partícula gramatical de tema siempre se pronuncia 'wa'."
          },
          {
            id: "ja_1_ex3",
            type: "ORAL_REPEAT",
            competency: "SPEAKING",
            instruction: "Pronuncia tu primera presentación completa en japonés cortés.",
            audioText: "はじめまして。わたしはダニエルです。よろしくおねがいします。",
            translationEs: "Mucho gusto. Yo soy Daniel. Encantado de conocerle.",
            phonetic: "Hajimemashite. Watashi wa Danieru desu. Yoroshiku onegaishimasu.",
            correctAnswer: "はじめまして。わたしはダニエルです。よろしくおねがいします。",
            explanationEs: "«Yoroshiku onegaishimasu» cierra toda presentación japonesa deseando una buena relación mutua."
          }
        ]
      }
    ],
    ko: [
      {
        id: "ko_a1_1",
        order: 1,
        unitTitle: "Unidad 1: 한글과 인사 (Hangul y Saludos Corteses)",
        title: "Lectura de bloques Hangul y saludo en estilo -요",
        objective: "Reconocer bloques silábicos en Hangul, saludar con '안녕하세요' y presentarse con '저는 ... 입니다/이에요'.",
        durationMin: 8,
        xpReward: 50,
        coinReward: 30,
        exercises: [
          {
            id: "ko_1_ex1",
            type: "MATCH_PAIRS",
            competency: "READING",
            instruction: "Conecta cada expresión coreana en Hangul con su significado.",
            pairs: [
              { left: "안녕하세요 (Annyeonghaseyo)", right: "Hola (cortés estándar)" },
              { left: "감사합니다 (Kamsahamnida)", right: "Muchas gracias (formal)" },
              { left: "네 / 아니요 (Ne / Aniyo)", right: "Sí / No" },
              { left: "만나서 반가워요 (Mannaseo bangawoyo)", right: "Mucho gusto en conocerte" }
            ],
            correctAnswer: "안녕하세요 (Annyeonghaseyo):Hola (cortés estándar)|감사합니다 (Kamsahamnida):Muchas gracias (formal)|네 / 아니요 (Ne / Aniyo):Sí / No|만나서 반가워요 (Mannaseo bangawoyo):Mucho gusto en conocerte",
            explanationEs: "En «감사합니다», la 'ㅂ' (b/p) antes de 'ㄴ' (n) se nasaliza y suena como 'm' (/kam-sa-ham-ni-da/)."
          },
          {
            id: "ko_1_ex2",
            type: "MULTIPLE_CHOICE",
            competency: "READING",
            instruction: "¿Cuál es el orden de palabras estándar en una oración coreana como «Yo hablo coreano (저는 한국어를해요)»?",
            prompt: "Fíjate en la posición del verbo en coreano:",
            options: [
              "Sujeto + Objeto + Verbo al final (SOV)",
              "Verbo + Sujeto + Objeto (VSO)",
              "Sujeto + Verbo + Objeto (SVO)",
              "Objeto + Verbo + Sujeto"
            ],
            correctAnswer: "Sujeto + Objeto + Verbo al final (SOV)",
            explanationEs: "En coreano (igual que en japonés), el verbo o adjetivo conjugado siempre cierra la oración al final."
          },
          {
            id: "ko_1_ex3",
            type: "ORAL_REPEAT",
            competency: "SPEAKING",
            instruction: "Repite en voz alta este saludo y presentación en coreano.",
            audioText: "안녕하세요! 저는 알렉스예요. 만나서 반가워요.",
            translationEs: "¡Hola! Yo soy Alex. Mucho gusto en conocerte.",
            phonetic: "Annyeonghaseyo! Jeoneun Allekseu-yeyo. Mannaseo bangawoyo.",
            correctAnswer: "안녕하세요! 저는 알렉스예요. 만나서 반가워요.",
            explanationEs: "«저는 (Jeoneun)» es la forma humilde/cortés de decir «En cuanto a mí / Yo»."
          }
        ]
      }
    ],
    pt: [
      {
        id: "pt_a1_1",
        order: 1,
        unitTitle: "Unidad 1: Saudações e Sons Nasais",
        title: "Saludos, presentaciones y diferencias con el español",
        objective: "Saludar con 'Bom dia / Tudo bem?', agradecer con 'Obrigado/a' y evitar falsos amigos iniciales.",
        durationMin: 7,
        xpReward: 45,
        coinReward: 25,
        exercises: [
          {
            id: "pt_1_ex1",
            type: "MULTIPLE_CHOICE",
            competency: "READING",
            instruction: "En portugués, ¿quién dice «Obrigado» y quién dice «Obrigada» para dar las gracias?",
            prompt: "La palabra concuerda con la persona que habla:",
            options: [
              "Los hombres dicen «Obrigado» y las mujeres dicen «Obrigada».",
              "Se dice «Obrigado» por la mañana y «Obrigada» por la noche.",
              "Depende del género de la persona que escucha.",
              "Solo se usa «Obrigado» en Portugal."
            ],
            correctAnswer: "Los hombres dicen «Obrigado» y las mujeres dicen «Obrigada».",
            explanationEs: "«Obrigado/a» significa literalmente «obligado/agradecido», por lo que concuerda con el género de quien agradece."
          },
          {
            id: "pt_1_ex2",
            type: "MATCH_PAIRS",
            competency: "READING",
            instruction: "Conecta cada expresión portuguesa con su significado en español.",
            pairs: [
              { left: "Oi, tudo bem?", right: "Hola, ¿todo bien?" },
              { left: "Prazer em conhecê-lo", right: "Mucho gusto en conocerlo" },
              { left: "Eu falo espanhol", right: "Yo hablo español" },
              { left: "Com licença", right: "Con permiso / Disculpe" }
            ],
            correctAnswer: "Oi, tudo bem?:Hola, ¿todo bien?|Prazer em conhecê-lo:Mucho gusto en conocerlo|Eu falo espanhol:Yo hablo español|Com licença:Con permiso / Disculpe",
            explanationEs: "A la pregunta «Tudo bem?» es muy común responder con la misma frase: «Tudo bem! E você?»."
          },
          {
            id: "pt_1_ex3",
            type: "ORAL_REPEAT",
            competency: "SPEAKING",
            instruction: "Pronuncia esta frase practicando el sonido nasal 'ão' y la 'd' brasileña.",
            audioText: "Bom dia! Meu nome é Lucas e eu não falo muito português ainda.",
            translationEs: "¡Buenos días! Mi nombre es Lucas y todavía no hablo mucho portugués.",
            phonetic: "/bõ ˈdʒi.ɐ mew ˈno.mi ɛ ˈlu.kɐs i ew ˈnɐ̃w ˈfa.lu ˈmuj.tu poʁ.tuˈɡes aˈĩ.dɐ/",
            correctAnswer: "Bom dia! Meu nome é Lucas e eu não falo muito português ainda.",
            explanationEs: "«Ainda» significa «todavía / aún» y «muito» tiene sonido nasal en la primera sílaba (/mũjtu/)."
          }
        ]
      }
    ],
    ht: [
      {
        id: "ht_a1_1",
        order: 1,
        unitTitle: "Unidad 1: Bonjou! Premye Pa an Kreyòl",
        title: "Saludos, pronombres y conversación básica en Criollo Haitiano",
        objective: "Saludar con 'Bonjou / Bonswa', preguntar 'Kijan ou ye?' y usar los pronombres personales en Kreyòl ayisyen.",
        durationMin: 7,
        xpReward: 50,
        coinReward: 30,
        exercises: [
          {
            id: "ht_1_ex1",
            type: "MATCH_PAIRS",
            competency: "READING",
            instruction: "Relaciona cada expresión frecuente en Kreyòl ayisyen con su significado en español.",
            pairs: [
              { left: "Bonjou / Bonswa", right: "Buenos días / Buenas tardes-noches" },
              { left: "Kijan ou ye?", right: "¿Cómo estás?" },
              { left: "Mwen byen, mèsi", right: "Estoy bien, gracias" },
              { left: "Mwen rele...", right: "Me llamo..." }
            ],
            correctAnswer: "Bonjou / Bonswa:Buenos días / Buenas tardes-noches|Kijan ou ye?:¿Cómo estás?|Mwen byen, mèsi:Estoy bien, gracias|Mwen rele...:Me llamo...",
            explanationEs: "En Kreyòl ayisyen «Bonjou» se usa hasta el mediodía y «Bonswa» desde el mediodía en adelante."
          },
          {
            id: "ht_1_ex2",
            type: "MULTIPLE_CHOICE",
            competency: "READING",
            instruction: "¿Cómo se forma la negación y el presente progresivo en Kreyòl ayisyen?",
            prompt: "Observa los marcadores preverbales 'pa' (negación) y 'ap' (acción en progreso):",
            options: [
              "Mwen ap aprann kreyòl (Estoy aprendiendo criollo) / Mwen pa konprann (No entiendo)",
              "El verbo cambia su terminación como en francés",
              "Se coloca 'no' al final de la oración",
              "Se invierte el sujeto y el verbo"
            ],
            correctAnswer: "Mwen ap aprann kreyòl (Estoy aprendiendo criollo) / Mwen pa konprann (No entiendo)",
            explanationEs: "La gramática del Kreyòl es muy regular: «ap» antes del verbo marca el presente continuo y «pa» marca la negación."
          },
          {
            id: "ht_1_ex3",
            type: "ORDER_WORDS",
            competency: "WRITING",
            instruction: "Ordena las palabras para decir en Kreyòl: «Me llamo Carlos y vivo en Santo Domingo.»",
            prompt: "Me llamo Carlos y vivo en Santo Domingo.",
            words: ["Mwen", "rele", "Carlos", "epi", "mwen", "rete", "Sendomeng."],
            correctAnswer: "Mwen rele Carlos epi mwen rete Sendomeng.",
            explanationEs: "«Mwen rele...» = Me llamo...; «epi» = y; «mwen rete...» = vivo/resido en..."
          },
          {
            id: "ht_1_ex4",
            type: "ORAL_REPEAT",
            competency: "SPEAKING",
            instruction: "Pronuncia este diálogo cordial en Kreyòl ayisyen.",
            audioText: "Bonjou zanmi! Kijan ou ye jodi a? Mwen byen, mèsi anpil.",
            translationEs: "¡Buenos días, amigo! ¿Cómo estás hoy? Estoy bien, muchas gracias.",
            phonetic: "/bɔ̃ʒu zɑ̃mi kiʒɑ̃ u je ʒodi a mwɛ̃ bjɛ̃ mɛsi ɑ̃pil/",
            correctAnswer: "Bonjou zanmi! Kijan ou ye jodi a? Mwen byen, mèsi anpil.",
            explanationEs: "«Zanmi» significa «amigo/a», «jodi a» es «hoy» y «mèsi anpil» es «muchas gracias»."
          }
        ]
      }
    ]
  },

  dominicanCultureNotes: [
    {
      id: "dom_1",
      expression: "¿Qué lo qué? (KLK)",
      meaning: "¿Qué tal? / ¿Cómo estás? / ¿Qué hay de nuevo?",
      whenToUse: "Saludo cotidiano e informal entre amigos, compañeros de confianza o jóvenes en República Dominicana.",
      contextAppropriate: "Conversaciones informales, mensajes entre amigos, ambiente relajado. No debe usarse en entrevistas laborales formales ni cartas oficiales.",
      formalEquivalent: "«¿Cómo está usted?» / «¿Qué tal te va hoy?»",
      targetLangNote: "En inglés coloquial cumple una función parecida a «What's up?», pero en contextos formales usa siempre «How are you doing?»."
    },
    {
      id: "dom_2",
      expression: "Dímelo / Dímelo cantando",
      meaning: "Cuéntame / Hola, ¿cómo va todo?",
      whenToUse: "Al contestar a un amigo o iniciar una charla cercana con entusiasmo.",
      contextAppropriate: "Trato cercano entre amistades y colegas de confianza.",
      formalEquivalent: "«Hola, cuéntame cómo estás» / «Adelante, te escucho».",
      targetLangNote: "No lo traduzcas literalmente como 'Tell it to me singing'; la idea funcional en inglés es «Tell me, how's everything going?»."
    },
    {
      id: "dom_3",
      expression: "¡Vamo' arriba! / Vamos a darle",
      meaning: "¡Ánimo! / ¡Empecemos con energía! / ¡Sigamos adelante!",
      whenToUse: "Para motivar a alguien antes de empezar una tarea, un estudio o superar un reto.",
      contextAppropriate: "Excelente para animar en equipo, deporte, estudio y vida diaria.",
      formalEquivalent: "«¡Comencemos con entusiasmo!» / «¡Sigamos adelante!»",
      targetLangNote: "Equivale comunicativamente a «Let's do this!» o «Let's get started!» en inglés, o «Allons-y !» en francés."
    },
    {
      id: "dom_4",
      expression: "¡Ta' bien! / Tranquilo, no hay problema",
      meaning: "¡Está bien! / De acuerdo / Todo en orden, no te preocupes.",
      whenToUse: "Para confirmar un acuerdo o quitarle peso a un inconveniente menor.",
      contextAppropriate: "Comunicación oral diaria y familiar.",
      formalEquivalent: "«Está muy bien, estoy de acuerdo» / «No se preocupe, no hay inconveniente».",
      targetLangNote: "Representa la hospitalidad caribeña; en el idioma que estudias equivale a «All good / No problem at all»."
    },
    {
      id: "dom_5",
      expression: "Tú sabe (Tú sabes)",
      meaning: "Ya sabes cómo es / Por supuesto / Como comprendes.",
      whenToUse: "Muletilla de complicidad para enfatizar que el interlocutor comparte el contexto.",
      contextAppropriate: "Charla coloquial espontánea.",
      formalEquivalent: "«Como bien sabes» / «Evidentemente».",
      targetLangNote: "Cumple el rol discursivo de «You know» en inglés o «Tu vois / Tu sais» en francés."
    },
    {
      id: "dom_6",
      expression: "Un chin (Un chininín)",
      meaning: "Un poquito / Una pequeña cantidad o momento.",
      whenToUse: "Para pedir una cantidad pequeña de algo (ej. «Dame un chin de agua» o «Espera un chin»).",
      contextAppropriate: "Muy común en toda la República Dominicana en el trato diario.",
      formalEquivalent: "«Un poco» / «Un momento, por favor».",
      targetLangNote: "En inglés se expresa con «a little bit», en francés «un petit peu» y en criollo haitiano «yon ti kras / yon ti jan»."
    }
  ],

  conversationModes: [
    {
      id: "travel",
      title: "Viajes y Aeropuerto",
      icon: "✈️",
      scenarioEs: "Estás llegando al aeropuerto, pasando por control de pasaportes y registrándote en tu hotel.",
      starterByLang: {
        en: "Welcome to the airport! May I see your passport, and what is the purpose of your trip today?",
        fr: "Bienvenue à l'aéroport de Paris ! Puis-je voir votre passeport ? Quel est le but de votre voyage ?",
        de: "Willkommen am Flughafen! Darf ich Ihren Reisepass sehen? Was ist der Grund Ihrer Reise?",
        it: "Benvenuto in Italia! Posso vedere il passaporto? Qual è il motivo del tuo viaggio?",
        ru: "Добро пожаловать! Покажите, пожалуйста, ваш паспорт. Какова цель вашей поездки?",
        zh: "欢迎来到北京机场！请出示您的护照。您这次旅行的目的是什么？",
        ja: "ようこそ日本へ！パスポートを見せていただけますか？ご旅行の目的は何ですか？",
        ko: "한국에 오신 것을 환영합니다! 여권을 보여주시겠어요? 방문 목적이 무엇인가요?",
        pt: "Bem-vindo ao aeroporto! Posso ver o seu passaporte? Qual é o motivo da sua viagem?",
        ht: "Byenvini nan ayewopò a! Èske mwen ka wè paspò ou, tanpri? Poukisa ou vwayaje jodi a?"
      }
    },
    {
      id: "daily_life",
      title: "Vida Cotidiana y Cafetería",
      icon: "☕",
      scenarioEs: "Estás en una cafetería local pidiendo el desayuno y conversando sobre tu rutina del día.",
      starterByLang: {
        en: "Good morning! Welcome to Blue Harbor Café. What would you like to drink or eat today?",
        fr: "Bonjour ! Bienvenue au café. Qu'est-ce que vous souhaitez prendre ce matin ?",
        de: "Guten Morgen! Was möchten Sie heute trinken oder essen?",
        it: "Buongiorno! Cosa desideri prendere stamattina al bar?",
        ru: "Доброе утро! Что вы будете заказывать сегодня?",
        zh: "早上好！欢迎光临咖啡馆，您今天想喝点什么？",
        ja: "おはようございます！カフェへようこそ。今日は何をご注文なさいますか？",
        ko: "좋은 아침이에요! 오늘 어떤 음료나 음식을 주문하시겠어요?",
        pt: "Bom dia! O que você gostaria de pedir hoje no café?",
        ht: "Bonjou! Byenvini nan kafe a. Kisa ou ta renmen bwè oswa manje jodi a?"
      }
    },
    {
      id: "work",
      title: "Trabajo y Reuniones",
      icon: "💼",
      scenarioEs: "Te presentas ante un nuevo equipo internacional y explicas tus proyectos de la semana.",
      starterByLang: {
        en: "Hi! Great to have you in our international team meeting. Could you introduce yourself and tell us about your role?",
        fr: "Bonjour ! Ravi de vous accueillir dans l'équipe. Pouvez-vous vous présenter brièvement ?",
        de: "Hallo! Schön, dass Sie im Team sind. Können Sie sich kurz vorstellen?",
        it: "Ciao! Benvenuto nel nostro team. Puoi presentarti brevemente ai colleghi?",
        ru: "Здравствуйте! Расскажите немного о себе и вашей работе в команде.",
        zh: "你好！欢迎加入我们的国际团队，请简单介绍一下你自己和你的工作。",
        ja: "こんにちは！チームへようこそ。簡単に自己紹介とお仕事について教えていただけますか？",
        ko: "안녕하세요! 우리 팀에 오신 것을 환영합니다. 간단히 자기소개를 해주실 수 있나요?",
        pt: "Olá! Que bom ter você na nossa equipe. Pode se apresentar brevemente?",
        ht: "Bonjou! Nou kontan genyen ou nan ekip la. Èske ou ka prezante tèt ou?"
      }
    },
    {
      id: "interview",
      title: "Entrevista Profesional",
      icon: "🎯",
      scenarioEs: "Respondes preguntas sobre tu experiencia, fortalezas y por qué te interesa el puesto.",
      starterByLang: {
        en: "Thank you for joining this interview today. To begin, what are your main strengths and why are you interested in this position?",
        fr: "Merci d'être venu à cet entretien. Quels sont vos principaux points forts ?",
        de: "Vielen Dank für Ihr Kommen. Was sind Ihre größten Stärken für diese Stelle?",
        it: "Grazie per essere qui oggi. Quali sono i tuoi principali punti di forza?",
        ru: "Спасибо, что пришли на собеседование. Какие ваши главные сильные стороны?",
        zh: "感谢参加今天的面试。请问您的主要优势是什么？",
        ja: "本日は面接にお越しいただきありがとうございます。あなたの強みは何ですか？",
        ko: "오늘 면접에 참여해 주셔서 감사합니다. 본인의 가장 큰 장점은 무엇인가요?",
        pt: "Obrigado por participar da entrevista hoje. Quais são os seus principais pontos fortes?",
        ht: "Mèsi paske ou vini nan entèvyou sa a. Ki pi gwo kalite ak fòs ou genyen?"
      }
    },
    {
      id: "social",
      title: "Situaciones Sociales y Amigos",
      icon: "🎉",
      scenarioEs: "Conoces a nuevas personas en un evento cultural y hablas de música, comida y pasatiempos.",
      starterByLang: {
        en: "Hey there! Great music tonight, right? What do you usually like doing in your free time?",
        fr: "Salut ! Super ambiance ce soir. Qu'est-ce que tu aimes faire pendant ton temps libre ?",
        de: "Hi! Tolle Musik heute Abend, oder? Was machst du gern in deiner Freizeit?",
        it: "Ciao! Bella serata, vero? Cosa ti piace fare nel tempo libero?",
        ru: "Привет! Отличный вечер, правда? Чем ты любишь заниматься в свободное время?",
        zh: "嗨！今晚气氛真好。你平时空闲时间喜欢做什么？",
        ja: "こんにちは！素敵なイベントですね。休みの日はいつも何をしていますか？",
        ko: "안녕하세요! 오늘 분위기 정말 좋네요. 평소 여가 시간에 무엇을 하는 걸 좋아하세요?",
        pt: "Oi! Que festa legal, né? O que você gosta de fazer no seu tempo livre?",
        ht: "alo zanmi! Bèl fèt aswè a, pa vre? Kisa ou renmen fè lè ou gen tan lib?"
      }
    }
  ],

  pronunciationDrillsByLang: {
    en: [
      { id: "p_en_1", phrase: "Good morning! How is it going today?", translation: "¡Buenos días! ¿Cómo te va hoy?", phonetic: "/ɡʊd ˈmɔːrnɪŋ haʊ ɪz ɪt ˈɡoʊɪŋ təˈdeɪ/", focusTip: "Une 'How_is_it' con fluidez y pronuncia la 'd' de 'today' suave." },
      { id: "p_en_2", phrase: "I would like a table for two near the window, please.", translation: "Quisiera una mesa para dos cerca de la ventana, por favor.", phonetic: "/aɪ wʊd laɪk ə ˈteɪbəl fɔːr tuː nɪr ðə ˈwɪndoʊ pliːz/", focusTip: "En 'would' la 'l' es muda (/wʊd/). En 'the' coloca la lengua entre los dientes (/ðə/)." },
      { id: "p_en_3", phrase: "Three thousand thinkers thought about Thursday.", translation: "Tres mil pensadores pensaron en el jueves.", phonetic: "/θriː ˈθaʊzənd ˈθɪŋkərz θɔːt əˈbaʊt ˈθɜːrzdeɪ/", focusTip: "Reto de sonido /θ/ (th sorda): deja salir el aire entre la lengua y los dientes superiores sin usar sonido /t/ ni /s/." }
    ],
    fr: [
      { id: "p_fr_1", phrase: "Bonjour, je voudrais un croissant et un bon café.", translation: "Buenos días, quisiera un cruasán y un buen café.", phonetic: "/bɔ̃ʒuʁ ʒə vudʁɛ œ̃ kʁwasɑ̃ e œ̃ bɔ̃ kafe/", focusTip: "Cuida las tres vocales nasales en 'Bon', 'un' y 'croissant'." },
      { id: "p_fr_2", phrase: "Les amis arrivent à huit heures ce soir.", translation: "Los amigos llegan a las ocho esta noche.", phonetic: "/lezami aʁiv a ɥit œʁ sə swaʁ/", focusTip: "Haz la liaison entre 'Les' y 'amis' sonando como /lezami/." }
    ],
    de: [
      { id: "p_de_1", phrase: "Guten Morgen! Ich möchte bitte ein Glas Wasser.", translation: "¡Buenos días! Quisiera un vaso de agua, por favor.", phonetic: "/ˈɡuːtn̩ ˈmɔʁɡn̩ ɪç ˈmœçtə ˈbɪtə aɪ̯n ɡlaːs ˈvasɐ/", focusTip: "El sonido 'ch' en 'Ich' y 'möchte' es palatal suave (/ç/), no como la 'j' española." }
    ],
    it: [
      { id: "p_it_1", phrase: "Buongiorno, vorrei un caffè macchiato per favore.", translation: "Buenos días, quisiera un café cortado por favor.", phonetic: "/bwɔnˈdʒorno vorˈrɛi un kafˈfɛ makˈkjato per faˈvore/", focusTip: "Marca bien las consonantes dobles en 'caffè' y 'macchiato'." }
    ],
    ru: [
      { id: "p_ru_1", phrase: "Здравствуйте! Меня зовут Алекс, я изучаю русский язык.", translation: "¡Hola! Me llamo Alex, estudio el idioma ruso.", phonetic: "/ˈzdrastvʊjtʲe mʲɪˈnʲa zɐˈvut ˈalʲɪks/", focusTip: "En 'Здравствуйте' la primera 'в' no se pronuncia (/zdrástvuyte/)." }
    ],
    zh: [
      { id: "p_zh_1", phrase: "你好，我想喝一杯热茶，谢谢。", translation: "Hola, quisiera tomar una taza de té caliente, gracias.", phonetic: "Nǐ hǎo, wǒ xiǎng hē yì bēi rè chá, xièxie.", focusTip: "Diferencia el 3º tono en 'xiǎng' del 2º tono ascendente en 'chá'." }
    ],
    ja: [
      { id: "p_ja_1", phrase: "すみません、このバスは東京駅に行きますか。", translation: "Disculpe, ¿este autobús va a la estación de Tokio?", phonetic: "Sumimasen, kono basu wa Tōkyō-eki ni ikimasu ka?", focusTip: "Mantén un ritmo silábico uniforme y alarga la vocal de 'Tōkyō'." }
    ],
    ko: [
      { id: "p_ko_1", phrase: "안녕하세요, 따뜻한 아메리카노 한 잔 주세요.", translation: "Hola, deme una taza de americano caliente, por favor.", phonetic: "Annyeonghaseyo, ttatteuthan amerikano han jan juseyo.", focusTip: "Pronuncia con tensión glotal la doble 'ㄸ' en '따뜻한' (ttatteuthan)." }
    ],
    pt: [
      { id: "p_pt_1", phrase: "Bom dia! Você pode me ajudar com uma informação?", translation: "¡Buenos días! ¿Puede ayudarme con una información?", phonetic: "/bõ ˈdʒi.ɐ voˈse ˈpɔ.dʒi mi a.ʒuˈdaʁ kõ ˈu.mɐ ĩ.foʁ.maˈsɐ̃w/", focusTip: "Nasales claras en 'Bom' y 'informação'." }
    ],
    ht: [
      { id: "p_ht_1", phrase: "Bonjou zanmi! Kijan ou ye jodi a? Mwen kontan wè ou.", translation: "¡Buenos días, amigo! ¿Cómo estás hoy? Me alegra verte.", phonetic: "/bɔ̃ʒu zɑ̃mi kiʒɑ̃ u je ʒodi a mwɛ̃ kɔ̃tɑ̃ wɛ u/", focusTip: "Pronuncia 'ou' siempre como /u/ y nasaliza 'an/on' en 'zanmi' y 'kontan'." }
    ]
  },

  storeItems: [
    { id: "avatar_classic", category: "Avatares", title: "Avatar Cotorra Clásico", subtitle: "Haz que tu Cotorra luzca su gorra tricolor original", price: 0, icon: "🦜", ownedByDefault: true },
    { id: "avatar_piloto", category: "Avatares", title: "Cotorra Viajera Internacional", subtitle: "Con gafas de aviador y pasaporte de 10 idiomas", price: 500, icon: "🕶️", ownedByDefault: false },
    { id: "avatar_licenciado", category: "Avatares", title: "Cotorra Diplomática C1", subtitle: "Traje ejecutivo para entrevistas y negocios globales", price: 650, icon: "🎩", ownedByDefault: false },
    { id: "theme_playa", category: "Temas", title: "Tema Playa Bahía de las Águilas", subtitle: "Acentos turquesa caribeño y brisa tropical en tu app", price: 750, icon: "🏖️", ownedByDefault: false },
    { id: "theme_colonial", category: "Temas", title: "Tema Zona Colonial", subtitle: "Inspirado en la arquitectura histórica de Santo Domingo", price: 700, icon: "🏛️", ownedByDefault: false },
    { id: "extra_lives", category: "Vidas", title: "Recarga de 5 Vidas Extra", subtitle: "No te quedes sin practicar en tus lecciones intensivas", price: 300, icon: "❤️", ownedByDefault: false, consumable: true },
    { id: "pack_frases_rd", category: "Cultura", title: "Colección Especial: Dichos Quisqueyanos", subtitle: "Cápsulas culturales comparadas con modismos internacionales", price: 600, icon: "🇩🇴", ownedByDefault: false },
    { id: "celebration_merengue", category: "Accesorios", title: "Efecto de Celebración Güira y Tambora", subtitle: "Animación especial al completar tu sesión de 25 minutos", price: 400, icon: "🥁", ownedByDefault: false }
  ],

  badges: [
    { id: "badge_first_lesson", title: "Primera Lección", description: "Completaste tu primera lección interactiva en Cotorra.", icon: "🌱", requirementText: "Completar ≥ 1 lección" },
    { id: "badge_first_chat", title: "Primera Conversación", description: "Practicaste tu primer diálogo con el Tutor Conversacional IA.", icon: "💬", requirementText: "Enviar ≥ 1 mensaje al Tutor IA" },
    { id: "badge_streak_7", title: "Siete Días de Práctica", description: "Mantuviste una racha verificada de 7 o más días estudiando.", icon: "🔥", requirementText: "Racha ≥ 7 días" },
    { id: "badge_words_100", title: "Cien Palabras Aprendidas", description: "Incorporaste más de 100 palabras activas a tu vocabulario.", icon: "📚", requirementText: "≥ 100 palabras aprendidas" },
    { id: "badge_pronunciation", title: "Maestro de la Pronunciación", description: "Completaste al menos 3 prácticas de voz en el entrenador oral.", icon: "🎙️", requirementText: "≥ 3 prácticas de pronunciación" },
    { id: "badge_culture", title: "Explorador Cultural", description: "Estudiaste la sección de Esencia Dominicana y registros formales.", icon: "🇩🇴", requirementText: "Explorar módulo cultural" },
    { id: "badge_weekly_challenge", title: "Desafío Semanal 25 Min", description: "Completaste los 5 bloques de una sesión diaria de 25 minutos.", icon: "🏆", requirementText: "Completar sesión diaria" }
  ],

  placementQuestions: [
    {
      id: "pq_1",
      levelTag: "A1",
      question: "1. ¿Cuál es la respuesta correcta a: «Hi! Where are you from?»",
      options: ["I am from Santo Domingo.", "I have twenty-five years.", "Yes, I am tomorrow.", "She is my brother."],
      correct: "I am from Santo Domingo."
    },
    {
      id: "pq_2",
      levelTag: "A2",
      question: "2. Completa la oración en pasado: «Yesterday I ___ to the supermarket and bought fresh fruit.»",
      options: ["went", "go", "goed", "going"],
      correct: "went"
    },
    {
      id: "pq_3",
      levelTag: "B1",
      question: "3. Elige la opción correcta: «I have lived in this city ___ five years.»",
      options: ["for", "since", "during", "from"],
      correct: "for"
    },
    {
      id: "pq_4",
      levelTag: "B2",
      question: "4. Condicional: «If I had known you were in town, I ___ you for coffee.»",
      options: ["would have called", "will call", "called", "would call"],
      correct: "would have called"
    },
    {
      id: "pq_5",
      levelTag: "C1",
      question: "5. Inversión formal: «Never before ___ such an impressive cultural performance.»",
      options: ["had we seen", "we had seen", "we saw", "did we saw"],
      correct: "had we seen"
    }
  ]
};
