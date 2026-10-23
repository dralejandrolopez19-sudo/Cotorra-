# Cotorra — Aplicación Android para Aprender Idiomas (A1–C1)

**Cotorra** («Aprende idiomas, habla con el mundo. ¡Tú puedes, compa!») es una plataforma educativa móvil para Android diseñada para que hispanohablantes aprendan diez idiomas desde el nivel A1 hasta C1 siguiendo el Marco Común Europeo de Referencia (MCER), mediante sesiones diarias estructuradas de 25 minutos, repetición espaciada, entrenamiento de pronunciación, un tutor conversacional con inteligencia artificial (Gemini) y una identidad cultural dominicana cálida, moderna y auténtica.

---

## User Review & Critical Decisions

> [!IMPORTANT]
> **Decisiones confirmadas por el usuario en la Fase de Clarificación:**
> - **Enfoque Arquitectónico Confirmado**: **Arquitectura Híbrida / WebView dentro de Android con Puente Nativo (Native Bridge)**. La interfaz interactiva tipo PWA/híbrida se integra con la capa nativa de Android (Kotlin/Compose + `JavascriptInterface` y servicios nativos) para aprovechar tanto la agilidad modular de interfaz como el acceso real a **Google Sign-In (`CredentialManager`)**, **Cloud Firestore**, **Firebase AI Logic (`gemini-3.8-flash` con App Check)**, **reconocimiento de voz (`SpeechRecognizer` / micrófono)** y **síntesis de voz nativa (`TextToSpeech`)** para los 10 idiomas.
> - **Estrategia de Persistencia, Autenticación e IA Confirmada**: **Configurar Firebase Auth, Cloud Firestore y Gemini desde el inicio**, complementado con persistencia local en el dispositivo para garantizar que el estudiante pueda cerrar y abrir la aplicación sin perder su progreso ni sus respuestas en curso.
> - **Alcance de la Primera Iteración Confirmado**: **Aplicación completa y funcional** que incluye bienvenida, onboarding con prueba de nivel opcional, inicio con planificador de sesión de 25 minutos, ruta de aprendizaje adaptada a los 10 idiomas, motor interactivo con 10 lecciones completas y verificadas de Inglés A1 (con los 11 tipos de ejercicios), módulo de cultura dominicana, entrenamiento de pronunciación, progreso por competencias, tienda, insignias y tutor conversacional con IA.

> [!NOTE]
> **Nota sobre Proveedores de Autenticación en este Entorno (Firebase Auth)**:
> El aprovisionamiento automático de Firebase en este entorno habilita **Firebase Authentication con Google Sign-In (`CredentialManager`)** y **Cloud Firestore Enterprise** con reglas de seguridad Zero-Trust, además de **Firebase AI Logic (Gemini)** protegido por App Check. Para correo/contraseña tradicional, se incluye la interfaz estructurada e informativa indicando cómo habilitar el proveedor Email/Password manualmente en la consola de Firebase, mientras que el inicio de sesión con Google funciona de forma 100% real y verificada desde el primer momento.

---

## 1. Overview & Core Concept

- **Qué Hace**: Permite aprender **10 idiomas** (**Inglés, Francés, Alemán, Italiano, Ruso, Chino mandarín, Japonés, Coreano, Portugués y Criollo haitiano / Kreyòl ayisyen**) desde **A1 hasta C1** mediante rutas independientes por idioma, sesiones diarias adaptativas de **25 minutos**, práctica de las **4 competencias lingüísticas** (comprensión auditiva, comprensión lectora, expresión oral y expresión escrita), tutor conversacional con IA y cápsulas culturales dominicanas.
- **Público Objetivo**: Estudiantes hispanohablantes que buscan una experiencia de aprendizaje rigurosa (basada en recuperación activa, repetición espaciada y aprendizaje contextual según el MCER) pero cercana, motivadora y con identidad dominicana («¿Qué lo qué?», «Dímelo», «Vamo' arriba», «¡Ta' bien!»), diferenciando claramente el español dominicano de la lengua meta.
- **Valor Diferencial**:
  - **Rigor Pedagógico MCER sin Falsas Promesas**: Distingue claramente entre experiencia/racha acumulada y dominio estimado por competencia, sin declarar niveles oficiales solo por acumular puntos.
  - **Sesiones Diarias de 25 Minutos Configurables**: 5 min de repaso espaciado (SRS), 7 min de contenido nuevo, 5 min de escucha y pronunciación, 5 min de conversación interactiva con IA y 3 min de escritura y evaluación (con Modo Rápido de 10 min para días ocupados).
  - **Adaptación Lingüística Real**: Módulos específicos para sistemas de escritura no latinos (Hiragana/Katakana/Kanji en japonés, Pinyin/Tonos/Caracteres en chino, Hangul en coreano, Cirílico en ruso) y particularidades fonéticas/gramaticales en cada uno de los 10 idiomas.

---

## 2. User Experience & Visual Design

### Referencia Visual de Diseño
El diseño sigue fielmente la dirección visual proporcionada:

![Referencia Visual de Cotorra](/public/assets/aistudio/file_0000000089b481f5b670154aef81fa07_7aae92ac.png)

### Flujos de Usuario Principales (12 Pantallas Funcionales)

1. **A. Bienvenida**:
   - Ilustración hero de **Cotorra** (mascota carismática con plumaje verde, amarillo y azul, gorra con detalles inspirados en la bandera dominicana y fondo colonial caribeño).
   - Logotipo de Cotorra, eslogan «Aprende idiomas, habla con el mundo. ¡Tú puedes, compa!», botones **«Comenzar»** e **«Iniciar sesión»**, y selector de idioma de interfaz (Español activo, preparado para expansión futura).
2. **B. Registro e Inicio de Sesión**:
   - Inicio de sesión real con **Google Sign-In (`CredentialManager`)** conectado a Firebase Auth.
   - Formulario validado de correo electrónico, contraseña y recuperación con estado transparente sobre la configuración del proveedor en consola, protección de sesión y modo local sincronizable.
3. **C. Configuración Inicial (Onboarding) y Prueba de Nivel**:
   - Selección del idioma a aprender entre los 10 disponibles.
   - Nivel estimado inicial (A1 a C1), meta diaria de tiempo (10 min rápido, 25 min estándar recomendado, 40 min intensivo) y objetivo principal (viajar, trabajar, estudiar, conversar o desarrollo personal).
   - **Prueba de nivel diagnóstica opcional** (5 preguntas adaptativas de vocabulario, gramática y comprensión) antes de comenzar la ruta.
4. **D. Inicio (Dashboard Principal)**:
   - Saludo dinámico de la Cotorra («¡Buenas, compa! Hoy es un gran día para aprender»), selector rápido de idioma activo y nivel MCER actual.
   - Tarjeta de **Sesión Diaria de 25 Minutos** (con desglose visual de los 5 bloques: 5m SRS + 7m Nuevo + 5m Audio/Voz + 5m Tutor IA + 3m Escritura) y botón para alternar a **Modo Rápido**.
   - Contadores superiores de **Racha de días**, **Monedas virtuales** y **Vidas/Intentos disponibles**.
   - Botón destacado **«Continuar aprendiendo»**, tarjeta de **Repasos pendientes (SRS)**, acceso a **Cultura Dominicana** y **Recomendación de siguiente actividad**.
5. **E. Ruta de Aprendizaje (Mapa Vertical MCER A1–C1)**:
   - Mapa vertical interactivo por unidades temáticas y niveles (A1, A2, B1, B2, C1) con planificación estructurada:
     - *Grupo 1 (Inglés, Francés, Alemán, Italiano, Ruso, Portugués, Criollo haitiano)*: A1 (120), A2 (160), B1 (200), B2 (240), C1 (280 lecciones planificadas).
     - *Grupo 2 (Chino mandarín, Coreano)*: A1 (180), A2 (260), B1 (360), B2 (450), C1 (550 lecciones planificadas).
     - *Grupo 3 (Japonés)*: A1 (200), A2 (300), B1 (400), B2 (500), C1 (600 lecciones planificadas).
   - Distinción visual clara entre **Lecciones completadas**, **Lección disponible actual**, **Lecciones bloqueadas**, **Evaluaciones periódicas**, **Prueba de salida de nivel** y **Módulos de Alfabeto/Fonética** específicos del idioma (Hiragana/Katakana/Kanji, Pinyin/Tonos, Hangul, Cirílico, Liaison/Nasales, Kreyòl).
6. **F. Pantalla de Lección (Motor Reutilizable de 11 Tipos de Ejercicios)**:
   - Barra de progreso superior, protección contra salida accidental (confirmación antes de abandonar), vidas restantes y objetivo pedagógico medible de la lección.
   - Soporta **11 tipos de ejercicios interactivos**:
     1. Selección múltiple contextual.
     2. Traducción contextual.
     3. Completar espacios en blanco (*fill-in-the-blank*).
     4. Ordenar palabras (*word bank*).
     5. Relacionar pares de palabras con significados (*matching pairs*).
     6. Escuchar audio nativo (TTS) y seleccionar.
     7. Dictado (escuchar y escribir exactamente).
     8. Escritura libre guiada por contexto.
     9. Lectura de diálogo corto y comprensión.
     10. Repetición oral con micrófono y verificación de voz.
     11. Construcción de oraciones a partir de situación comunicativa.
   - Retroalimentación inmediata (banner verde de acierto o rojo de corrección con explicación gramatical/contextual breve en español) y pantalla de resumen final con XP, monedas, precisión, palabras aprendidas y errores agendados automáticamente en el sistema de repetición espaciada (SRS).
7. **G. Tutor Conversacional con IA (Gemini vía Firebase AI Logic)**:
   - Chat interactivo por voz y texto con Cotorra adaptando el vocabulario al nivel MCER (A1–C1) y al idioma activo.
   - **5 Modos de Conversación**: Viajes, Trabajo, Vida cotidiana, Entrevistas y Situaciones sociales.
   - Respuesta estructurada que incluye: réplica conversacional en el idioma meta, corrección amable en español si hubo un error, versión natural recomendada de la frase y registro automático de errores recurrentes.
   - Si el servicio de IA no está disponible o falla la red, informa con transparencia el estado real y ofrece diálogos guiados locales sin simular respuestas de IA.
8. **H. Entrenamiento de Pronunciación**:
   - Reproducción de audio en el idioma meta (con velocidad normal y lenta 0.7x) mediante el motor de voz nativo de Android (`TextToSpeech`).
   - Grabación con consentimiento explícito del permiso `RECORD_AUDIO` en tiempo de ejecución y análisis mediante `SpeechRecognizer` / comparación fonética palabra por palabra.
   - Retroalimentación honesta sobre palabras detectadas, sonidos clave del idioma (ej. *th* en inglés, tonos en mandarín, *u/ou* en francés, *r/rr* y nasales en criollo haitiano) e historial de práctica.
9. **I. Progreso y Estadísticas**:
   - Pestañas de **Resumen**, **Vocabulario (SRS)** y **Gramática / Competencias**.
   - Tiempo total de estudio (frente a la meta de 25 min), lecciones completadas, palabras dominadas vs. palabras por repasar, racha actual y mejor racha.
   - Barras de **Dominio Estimado por Competencia** (Comprensión auditiva, Comprensión lectora, Expresión oral, Expresión escrita) y evolución semanal/mensual, dejando claro que el dominio real requiere práctica integral y superación de pruebas de salida MCER.
10. **J. Tienda y Recompensas + K. Insignias y Desafíos**:
    - Economía virtual equilibrada con monedas ganadas estudiando (sin micropagos reales).
    - Canje por: **Avatares de Cotorra**, **Temas visuales** (ej. *Playa Dominica*, *Zona Colonial*), **Accesorios de la mascota**, **Vidas extra** y **Cápsulas culturales desbloqueables**.
    - Insignias verificables (*Primera lección*, *Primera conversación IA*, *7 días de racha*, *100 palabras aprendidas*, *Maestro de la pronunciación*, *Explorador cultural*) y desafío semanal.
11. **L. Lección de Cultura Dominicana y Perfil / Ajustes**:
    - **Módulo de Esencia Dominicana**: Explica expresiones como «¿Qué lo qué?», «Dímelo», «Vamo' arriba», «¡Ta' bien!», «Tú sabe» y «Bueeeno» con su significado, cuándo son apropiadas y cómo expresar la misma idea en un registro formal internacional, sin confundirlas con traducciones literales del idioma estudiado.
    - **Perfil y Ajustes**: Gestión de idiomas activos, redistribución personalizada de los 25 minutos diarios, recordatorios, sonido/vibración, tema claro/oscuro, exportación de progreso en JSON y eliminación de datos locales/nube.

### Identidad Visual y Sistema de Diseño

- **Paleta de Colores Semántica**:
  - `--primary` (Azul Cotorra / Bandera): `#0038A8` (Modo Claro) / `#4C8DFF` (Modo Oscuro)
  - `--background` (Fondo Dominante): `#F5F8FF` y tarjetas `#FFFFFF` (Modo Claro) / `#0B132B` y tarjetas `#1C2541` (Modo Oscuro)
  - `--accent` (Rojo Coral Dominicano): `#D91E36`
  - `--success` (Verde Cotorra / Respuesta Correcta): `#16A34A`
  - `--warning` (Amarillo Caribeño / Monedas y Racha): `#F59E0B`
- **Tipografía y Legibilidad**:
  - Tipografía geométrica moderna instalada localmente (`Plus Jakarta Sans` / `Nunito` vía `font-util`) para encabezados expresivos y alta legibilidad en lectura de ejercicios y alfabetos internacionales (cirílico, kanji, hangul, mandarín).
- **Componentes y Micro-interacciones**:
  - Tarjetas con bordes redondeados (`20dp`), sombras suaves y botones táctiles de mínimo `48dp` de alto con respuesta háptica/visual.
  - Expresiones dinámicas de la mascota **Cotorra** (Saludando, Celebrando acierto, Animando tras un error, Pensando en el tutor IA).

---

## 3. Key Product Decisions & Trade-Offs

- **Decisión 1: Arquitectura Híbrida (WebView + Puente Nativo Kotlin/Compose) en APK Android**
  - *Enfoque Elegido*: Combinar una capa de presentación híbrida/web embebida y sincronizada con un contenedor nativo Android en Kotlin/Jetpack Compose mediante un puente tipado (`CotorraNativeBridge`).
  - *Por Qué*: Cumple tu elección de mantener el enfoque híbrido/WebView dentro de Android y la estructura modular tipo PWA descrita en el documento funcional, al mismo tiempo que permite ejecutar de forma 100% real las capacidades nativas del dispositivo Android que una web aislada no podría resolver sin fricción: **Google Sign-In con Jetpack Credential Manager**, **Cloud Firestore con reglas de seguridad**, **Firebase AI Logic con App Check**, **TextToSpeech multi-idioma offline/online** y **Reconocimiento de Voz con micrófono**.
  - *Alternativas Consideradas*: Una PWA pura sin puente nativo no permitiría autenticar con `CredentialManager` ni usar `Firebase.ai` con App Check nativo en el emulador de Android.

- **Decisión 2: Persistencia Dual (Local Offline-First + Cloud Firestore Sincronizado)**
  - *Enfoque Elegido*: Guardar cada intento de ejercicio, tarjeta de vocabulario SRS, configuración de sesión de 25 minutos, monedas e insignias de forma inmediata en almacenamiento local persistente y sincronizar automáticamente con **Cloud Firestore** bajo la ruta aislada por usuario (`/users/{userId}/...`).
  - *Por Qué*: Garantiza que el estudiante nunca pierda su progreso si cierra la app a mitad de una sesión o pierde conexión a internet, mientras mantiene su cuenta respaldada en la nube al iniciar sesión con Google.

- **Decisión 3: Integración Segura de Gemini mediante Firebase AI Logic**
  - *Enfoque Elegido*: Conectar el Tutor Conversacional al modelo **`gemini-3.8-flash`** a través del SDK oficial `Firebase.ai` con atestación **Firebase App Check** (`configureAppCheck` en `MainActivity.onCreate`), sin exponer ninguna clave de API en el código fuente del cliente.
  - *Por Qué*: Cumple estrictamente las mejores prácticas de seguridad en producción y ofrece baja latencia con salida estructurada JSON para separar la respuesta en el idioma meta de la explicación gramatical en español.

---

## 4. Technical Architecture & Data Strategy *(Technical Reference)*

### Diagrama de Arquitectura del Sistema y Jerarquía de Componentes

```
┌───────────────────────────────────────────────────────────────────────────────┐
│                   COTORRA ANDROID APPLICATION (MainActivity)                  │
│          Edge-to-Edge WindowInsets + Firebase App Check Initialization        │
└───────────────────────────────────────┬───────────────────────────────────────┘
                                        │
        ┌───────────────────────────────┴───────────────────────────────┐
        ▼                                                               ▼
┌───────────────────────────────────────┐       ┌───────────────────────────────┐
│   HYBRID UI & INTERACTIVE ENGINE      │       │  NATIVE ANDROID & CLOUD LAYER │
│  (WebView PWA Engine + Compose Host)  │◄─────►│    (CotorraNativeBridge)      │
├───────────────────────────────────────┤ JSON  ├───────────────────────────────┤
│ • Bienvenida & Onboarding (+Test A1)  │Bridge │ • AuthManager                 │
│ • Inicio (Sesión 25m + Modo Rápido)   │       │   (Google CredentialManager)  │
│ • Ruta Vertical MCER (10 Idiomas)     │       │ • FirestoreSyncRepository     │
│ • Motor de Lecciones (11 Ejercicios)  │       │   (/users/{uid}/progress...)  │
│   └─ 10 Lecciones Completas Inglés A1 │       │ • GeminiTutorService          │
│   └─ Módulos Específicos 10 Idiomas   │       │   (Firebase.ai gemini-3.8)    │
│ • Tutor IA Conversacional (5 Modos)   │       │ • Speech & Audio Engine       │
│ • Entrenador de Pronunciación         │       │   (Android TTS + Micrófono)   │
│ • Cultura Dominicana («¿Qué lo qué?») │       │ • LocalPersistenceStore       │
│ • Progreso, Tienda, Insignias, Perfil │       │   (Offline-First Cache)       │
└───────────────────────────────────────┘       └───────────────────────────────┘
```

### Modelo de Datos Inicial (15 Entidades Principales)

1. **`UserProfile`**: `userId`, `displayName`, `email`, `avatarId`, `activeLanguageId`, `dailyGoalMinutes` (10 | 25 | 40), `sessionDistribution` (repaso: 5, nuevo: 7, audio: 5, ia: 5, escritura: 3), `learningGoal`, `coins`, `lives`, `currentStreak`, `bestStreak`, `isDarkTheme`, `updatedAt`.
2. **`LanguageCatalog`**: Definición de los **10 idiomas** (`en`, `fr`, `de`, `it`, `ru`, `zh`, `ja`, `ko`, `pt`, `ht`) con su bandera, nombre en español, nombre nativo, locale TTS, particularidades lingüísticas, módulos de escritura especial y tabla de lecciones objetivo por nivel MCER (120 a 600 lecciones según la matriz de dificultad).
3. **`CefrLevel` (`A1`, `A2`, `B1`, `B2`, `C1`)**: Objetivos comunicativos MCER, criterios de desbloqueo (80% precisión mínima + prueba de salida aprobada) y total de lecciones planificadas.
4. **`CurriculumUnit`**: Unidades temáticas por idioma y nivel (incluyendo unidades de alfabeto/fonética para japonés, chino, coreano y ruso, y las unidades completas de Inglés A1 con 10 lecciones exhaustivas).
5. **`Lesson`**: `lessonId`, `languageId`, `level`, `unitId`, `order`, `title`, `communicativeObjective`, `culturalTip`, `estimatedMinutes`, `xpReward`, `coinReward`, `exercises: List<Exercise>`.
6. **`Exercise` (11 Tipos)**: `exerciseId`, `type` (`MULTIPLE_CHOICE`, `CONTEXTUAL_TRANSLATION`, `FILL_BLANK`, `ORDER_WORDS`, `MATCH_PAIRS`, `LISTEN_SELECT`, `DICTATION`, `FREE_WRITING`, `READING_COMPREHENSION`, `ORAL_REPEAT`, `SENTENCE_BUILDER`), `prompt`, `targetText`, `audioText`, `phoneticHint`, `options`, `correctAnswer`, `acceptedAlternatives`, `explanationEs`, `grammarNote`.
7. **`ExerciseAttempt` & `EvaluationResult`**: Registro de cada intento (`isCorrect`, `userResponse`, `timeSpentMs`, `competency`: `LISTENING` | `READING` | `SPEAKING` | `WRITING`) y calificaciones de pruebas de nivel/salida.
8. **`LanguageProgress`**: Por idioma (`languageId`, `currentLevel`, `completedLessonIds`, `studyMinutesTotal`, `competencyScores` para las 4 habilidades, `weeklyMinutes`).
9. **`VocabularyItem` & `SpacedRepetitionCard` (SRS)**: Palabra/expresión aprendida, traducción, ejemplo en contexto, factor de facilidad (`easeFactor`), intervalo en días (`intervalDays`), `nextReviewTimestamp` y contador de fallos recurrentes.
10. **`AiConversationSession` & `AiMessage`**: Historial por modo (`travel`, `work`, `daily_life`, `interview`, `social`), nivel MCER, mensajes del usuario y respuestas estructuradas de Gemini (`replyTargetLang`, `correctionEs`, `naturalAlternative`, `detectedErrorType`).
11. **`PronunciationAttempt`**: Frase objetivo, transcripción capturada por voz, puntuación de similitud fonética, palabras a reforzar y marca de tiempo.
12. **`StoreItem`, `Badge` & `DominicanCulturalNote`**: Catálogo de tienda (avatares, temas, vidas, cápsulas), insignias verificables con progreso desbloqueado y diccionario cultural dominicano (expresión, significado, contexto apropiado y equivalente formal).

### Mapeo Interactivo de Componentes y Estados

- **Inicio de Sesión y Sincronización**:
  - Al pulsar «Iniciar sesión con Google», `CotorraNativeBridge` invoca `CredentialManager` con `GetSignInWithGoogleOption`. Al autenticarse, sincroniza el estado local con `/users/{userId}` en Cloud Firestore y actualiza la cabecera y el perfil en tiempo real.
- **Motor de 10 Lecciones Completas de Inglés A1 + Módulos de los 10 Idiomas**:
  - Incluye **10 lecciones completas y verificadas para Inglés A1** (*1. Saludos y presentaciones*, *2. Origen y nacionalidades*, *3. Números, edad y contacto*, *4. Familia y descripciones*, *5. Rutina diaria y horas*, *6. Comida y pedir en un restaurante*, *7. Direcciones y transporte*, *8. Compras y precios*, *9. Tiempo libre y gustos*, *10. Evaluación integradora A1*) con los 11 tipos de ejercicios, además de lecciones iniciales y módulos específicos para Francés, Alemán, Italiano, Ruso (Cirílico), Chino mandarín (Pinyin y tonos), Japonés (Hiragana, Katakana y Kanji básico), Coreano (Hangul), Portugués y Criollo haitiano (Kreyòl ayisyen).
- **Sesión Diaria de 25 Minutos**:
  - El temporizador inteligente guía al estudiante por los 5 bloques configurados (5m SRS → 7m Lección nueva → 5m Escucha/Pronunciación → 5m Conversación IA → 3m Escritura/Evaluación), permitiendo ajustar los minutos de cada bloque en Ajustes o activar el Modo Rápido.
- **Tutor IA con Gemini (`gemini-3.8-flash`)**:
  - Envía el mensaje del estudiante junto con el contexto del idioma, nivel MCER y modo elegido a `Firebase.ai.generativeModel("gemini-3.8-flash")` con `responseSchema` JSON para mostrar en tarjetas separadas la respuesta conversacional, la corrección explicada en español y la sugerencia natural.

### Riesgos Técnicos, Requisitos para Android y Plan por Fases

- **Permisos y Dispositivo**:
  - `INTERNET` y `ACCESS_NETWORK_STATE` (instalación) para Firebase Auth, Firestore y Gemini.
  - `RECORD_AUDIO` (en tiempo de ejecución con solicitud explícita mediante `ActivityResultContracts.RequestPermission()`) para el entrenamiento de pronunciación y entrada de voz en el tutor IA, ofreciendo siempre alternativa escrita si el usuario rechaza el permiso o está en un entorno ruidoso.
- **Secuencia de Construcción**:
  1. **Aprovisionamiento Firebase & Seguridad**: Configuración de Firebase Auth (Google Sign-In), Cloud Firestore (`firebase-blueprint.json` + `firestore.rules` validadas en emulador) y Firebase AI Logic (`AppCheck`).
  2. **Sistema Visual, Bienvenida, Onboarding y Prueba de Nivel**: Identidad dominicana, mascota Cotorra, selección de los 10 idiomas y configuración de meta de 25 minutos.
  3. **Motor de Lecciones (11 Tipos de Ejercicios) y 10 Lecciones de Inglés A1 + Módulos de 10 Idiomas**: Mapa vertical MCER, repetición espaciada (SRS) y persistencia dual (Local + Firestore).
  4. **Tutor Conversacional IA (Gemini), Entrenamiento de Pronunciación, Cultura Dominicana, Tienda e Insignias**: Integración completa de voz (`TextToSpeech` + `SpeechRecognizer`), chat con correcciones en español y verificación de compilación APK.
