const CURRICULUM = window.COTORRA_CURRICULUM;

const CEFR_LEVELS = ["A1", "A2", "B1", "B2", "C1"];
const LEVEL_MODULES = {
  A1: [
    "Saludos y presentaciones",
    "Rutin diaria y entorno",
    "Compras y viajes básicos"
  ],
  A2: [
    "Familia, hobbies y salud",
    "Trabajo, estudios y planes",
    "Opiniones y experiencias"
  ],
  B1: [
    "Narración y descripción",
    "Problemas, soluciones y decisiones",
    "Argumentación y objetivos"
  ],
  B2: [
    "Debate y matices culturales",
    "Medios, noticias y análisis",
    "Persuasión y estilo avanzado"
  ],
  C1: [
    "Discusión crítica y matices",
    "Comunicación profesional y formal",
    "Expresión abstracta y liderazgo"
  ]
};

function buildLanguageLevelCatalog(langId, langName) {
  const levelCatalog = [];
  CEFR_LEVELS.forEach((levelCode, levelIndex) => {
    LEVEL_MODULES[levelCode].forEach((moduleTitle, moduleIndex) => {
      const lessonId = `${langId}_${levelCode.toLowerCase()}_${moduleIndex + 1}`;
      const duration = 8 + levelIndex * 4 + moduleIndex;
      const xpReward = 45 + levelIndex * 35 + moduleIndex * 10;
      const coinReward = 25 + levelIndex * 18 + moduleIndex * 7;

      const exercises = [
        {
          id: `${lessonId}_ex1`,
          type: "MULTIPLE_CHOICE",
          competency: "READING",
          instruction: `Selecciona la respuesta más natural en ${langName} para un contexto de ${moduleTitle.toLowerCase()}.`,
          prompt: `Contexto: ${moduleTitle}. ¿Cuál opción es la más apropiada?`,
          options: [
            `Respuesta clara y útil en ${langName}`,
            `Frase muy poco natural para la situación`,
            `Opción gramaticalmente incoherente`,
            `Texto irrelevante para la tarea"
          ],
          correctAnswer: `Respuesta clara y útil en ${langName}`,
          explanationEs: `Esta opción encaja mejor con el objetivo comunicativo del módulo y con la progresión de ${levelCode}.`
        },
        {
          id: `${lessonId}_ex2`,
          type: "ORDER_WORDS",
          competency: "WRITING",
          instruction: `Ordena la frase para producir una estructura correcta en ${langName}.`,
          prompt: `Ordena esta idea coherente sobre ${moduleTitle.toLowerCase()}.`,
          words: [
            "I",
            "would",
            "like",
            "to",
            "practice",
            "more",
            "today"
          ],
          correctAnswer: "I would like to practice more today.",
          explanationEs: `La estructura sigue un patrón lógico de ${levelCode}: claridad, orden y uso natural del idioma.`
        },
        {
          id: `${lessonId}_ex3`,
          type: "CONTEXTUAL_TRANSLATION",
          competency: "WRITING",
          instruction: `Traduce la idea al ${langName} con un nivel coherente para ${levelCode}.`,
          prompt: "Quiero hablar con más seguridad y responder de forma natural en la conversación.",
          correctAnswer: `I want to speak with more confidence and respond naturally in conversation.`,
          acceptedAlternatives: [
            "I want to speak more confidently and answer naturally in conversation.",
            "I want to communicate more confidently and respond naturally in conversation."
          ],
          explanationEs: `La expresión enfatiza fluidez, precisión y apropiación del registro de ${levelCode}.`
        },
        {
          id: `${lessonId}_ex4`,
          type: "ORAL_REPEAT",
          competency: "SPEAKING",
          instruction: `Pronuncia con claridad la frase modelo relacionada con ${moduleTitle.toLowerCase()}.`,
          audioText: `This is a useful phrase for ${moduleTitle.toLowerCase()} in ${langName}.`,
          translationEs: `Esta es una frase útil para ${moduleTitle.toLowerCase()} en ${langName}.`,
          phonetic: "/this is a useful phrase for learning and speaking clearly/",
          correctAnswer: `This is a useful phrase for ${moduleTitle.toLowerCase()} in ${langName}.`,
          explanationEs: `La práctica oral ayuda a consolidar ritmo, entonación y uso contextual del idioma.`
        }
      ];

      levelCatalog.push({
        id: lessonId,
        order: levelCatalog.length + 1,
        unitTitle: `Nivel ${levelCode}: ${moduleTitle}`,
        title: moduleTitle,
        objective: `Desarrollar ${moduleTitle.toLowerCase()} con criterio de ${levelCode} y aplicación práctica en conversación y escritura.`,
        durationMin: duration,
        xpReward: xpReward,
        coinReward: coinReward,
        exercises
      });
    });
  });

  return levelCatalog;
}

const GENERATED_LANGUAGE_CATALOG = Object.fromEntries(
  CURRICULUM.languages.map((language) => [
    language.id,
    buildLanguageLevelCatalog(language.id, language.name)
  ])
);

CURRICULUM.starterLessonsByLang = {
  ...CURRICULUM.starterLessonsByLang,
  ...GENERATED_LANGUAGE_CATALOG
};

// Default application state
