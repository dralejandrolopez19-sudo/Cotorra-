window.COTORRA_CURRICULUM = {
  languages: [
    { id: "en", name: "Inglés", nativeName: "English", flag: "🇺🇸", ttsLang: "en", group: "standard" },
    { id: "fr", name: "Francés", nativeName: "Français", flag: "🇫🇷", ttsLang: "fr", group: "standard" },
    { id: "de", name: "Alemán", nativeName: "Deutsch", flag: "🇩🇪", ttsLang: "de", group: "standard" },
    { id: "it", name: "Italiano", nativeName: "Italiano", flag: "🇮🇹", ttsLang: "it", group: "standard" },
    { id: "ru", name: "Ruso", nativeName: "Русский", flag: "🇷🇺", ttsLang: "ru", group: "standard" },
    { id: "zh", name: "Chino mandarín", nativeName: "中文 (普通话)", flag: "🇨🇳", ttsLang: "zh", group: "cjk_medium" },
    { id: "ja", name: "Japonés", nativeName: "日本語", flag: "🇯🇵", ttsLang: "ja", group: "japanese" },
    { id: "ko", name: "Coreano", nativeName: "한국어", flag: "🇰🇷", ttsLang: "ko", group: "cjk_medium" },
    { id: "pt", name: "Portugués", nativeName: "Português", flag: "🇧🇷", ttsLang: "pt", group: "standard" },
    { id: "ht", name: "Criollo haitiano", nativeName: "Kreyòl ayisyen", flag: "🇭🇹", ttsLang: "ht", group: "standard" }
  ],

  cefrLevels: [
    { code: "A1", name: "Acceso", description: "Hablar de ti, presentarte, pedir lo básico.", unlockedByDefault: true },
    { code: "A2", name: "Plataforma", description: "Hablar de rutina, familia, trabajo y experiencias sencillas.", unlockedByDefault: false },
    { code: "B1", name: "Umbral", description: "Narrar, explicar, expresar opiniones y planificar.", unlockedByDefault: false },
    { code: "B2", name: "Avanzado", description: "Debate, matices, argumentación y estilo natural.", unlockedByDefault: false },
    { code: "C1", name: "Dominio operativo", description: "Comunicación sofisticada, formal y abstracta.", unlockedByDefault: false }
  ],

  englishA1Lessons: [
    {
      id: "en_a1_1",
      order: 1,
      unitTitle: "Unidad 1: Primeros pasos",
      title: "Saludos y presentaciones",
      objective: "Presentarte y saludar con naturalidad.",
      durationMin: 8,
      xpReward: 40,
      coinReward: 25,
      exercises: [
        {
          id: "en_a1_1_ex1",
          type: "MULTIPLE_CHOICE",
          competency: "READING",
          instruction: "Elige la respuesta más natural para presentarte.",
          prompt: "Hi! My name is Ana. What is your name?",
          options: ["I am Daniel.", "I am in the office.", "She is my sister.", "Goodbye!"],
          correctAnswer: "I am Daniel.",
          explanationEs: "Para presentarte, lo natural es responder con «I am…» o «My name is…»."
        },
        {
          id: "en_a1_1_ex2",
          type: "ORDER_WORDS",
          competency: "WRITING",
          instruction: "Ordena la oración.",
          prompt: "Hola, me llamo Elías y estoy muy bien.",
          words: ["Hello", "my", "name", "is", "Elías", "and", "I", "am", "doing", "great"],
          correctAnswer: "Hello, my name is Elías and I am doing great.",
          explanationEs: "En inglés la estructura es «My name is…» y luego el verbo «am»."
        }
      ]
    },
    {
      id: "en_a1_2",
      order: 2,
      unitTitle: "Unidad 2: Vida cotidiana",
      title: "Rutin diaria y tiempo",
      objective: "Hablar de tu rutina y decir la hora.",
      durationMin: 10,
      xpReward: 50,
      coinReward: 30,
      exercises: [
        {
          id: "en_a1_2_ex1",
          type: "MULTIPLE_CHOICE",
          competency: "READING",
          instruction: "¿Qué preposición se usa para una hora exacta?",
          prompt: "I wake up ___ 7:00 a.m.",
          options: ["at", "in", "on", "for"],
          correctAnswer: "at",
          explanationEs: "Usamos «at» con horas exactas: at 7:00, at noon."
        },
        {
          id: "en_a1_2_ex2",
          type: "CONTEXTUAL_TRANSLATION",
          competency: "WRITING",
          instruction: "Traduce la frase al inglés.",
          prompt: "Estudio inglés todos los días.",
          correctAnswer: "I study English every day.",
          acceptedAlternatives: ["Every day I study English.", "I study English every day"],
          explanationEs: "«Every day» es la forma natural y común para expresar la rutina diaria."
        }
      ]
    }
  ],

  starterLessonsByLang: {}
};

const CEFR_LEVELS = ["A1", "A2", "B1", "B2", "C1"];
const LEVEL_MODULES = {
  A1: ["Saludos y presentaciones", "Rutina diaria y entorno", "Compras y viajes básicos"],
  A2: ["Familia, hobbies y salud", "Trabajo, estudios y planes", "Opiniones y experiencias"],
  B1: ["Narración y descripción", "Problemas y soluciones", "Argumentación y objetivos"],
  B2: ["Debate y matices culturales", "Medios, noticias y análisis", "Persuasión y estilo avanzado"],
  C1: ["Discusión crítica y matices", "Comunicación profesional y formal", "Expresión abstracta y liderazgo"]
};

function buildLanguageLessonSet(langId, langName) {
  const lessons = [];

  CEFR_LEVELS.forEach((levelCode, levelIndex) => {
    LEVEL_MODULES[levelCode].forEach((moduleTitle, moduleIndex) => {
      const lessonId = `${langId}_${levelCode.toLowerCase()}_${moduleIndex + 1}`;
      const order = lessons.length + 1;
      const exercises = [
        {
          id: `${lessonId}_ex1`,
          type: "MULTIPLE_CHOICE",
          competency: "READING",
          instruction: `Selecciona la opción más natural en ${langName} para ${moduleTitle.toLowerCase()}.`,
          prompt: `Contexto: ${moduleTitle}. ¿Cuál es la respuesta más apropiada?`,
          options: [
            `Respuesta clara y útil en ${langName}`,
            `Frase poco natural para la situación`,
            `Opción gramaticalmente incoherente`,
            `Texto irrelevante para la tarea`
          ],
          correctAnswer: `Respuesta clara y útil en ${langName}`,
          explanationEs: `Esta opción encaja mejor con el nivel ${levelCode} y con el objetivo comunicativo del módulo.`
        },
        {
          id: `${lessonId}_ex2`,
          type: "ORDER_WORDS",
          competency: "WRITING",
          instruction: `Ordena la frase para producir un enunciado natural en ${langName}.`,
          prompt: `Ordena esta idea sobre ${moduleTitle.toLowerCase()}.`,
          words: ["I", "would", "like", "to", "practice", "more", "today"],
          correctAnswer: "I would like to practice more today.",
          explanationEs: `Esta estructura demuestra claridad, progresión y uso apropiado del nivel ${levelCode}.`
        },
        {
          id: `${lessonId}_ex3`,
          type: "CONTEXTUAL_TRANSLATION",
          competency: "WRITING",
          instruction: `Traduce la idea al ${langName} con nivel ${levelCode}.`,
          prompt: "Quiero hablar con más seguridad y responder de forma natural en la conversación.",
          correctAnswer: "I want to speak with more confidence and respond naturally in conversation.",
          acceptedAlternatives: [
            "I want to speak more confidently and answer naturally in conversation.",
            "I want to communicate more confidently and respond naturally in conversation."
          ],
          explanationEs: `Con esta frase reforzamos la expresión espontánea, la claridad y la fluidez necesaria para ${levelCode}.`
        }
      ];

      lessons.push({
        id: lessonId,
        order,
        unitTitle: `Nivel ${levelCode}: ${moduleTitle}`,
        title: moduleTitle,
        objective: `Desarrollar ${moduleTitle.toLowerCase()} con criterios de ${levelCode}.`,
        durationMin: 8 + levelIndex * 4 + moduleIndex,
        xpReward: 45 + levelIndex * 35 + moduleIndex * 10,
        coinReward: 25 + levelIndex * 18 + moduleIndex * 7,
        exercises
      });
    });
  });

  return lessons;
}

const curriculum = window.COTORRA_CURRICULUM;
for (const language of curriculum.languages) {
  curriculum.starterLessonsByLang[language.id] = buildLanguageLessonSet(language.id, language.name);
}

if (!curriculum.starterLessonsByLang.en) {
  curriculum.starterLessonsByLang.en = curriculum.englishA1Lessons;
}
