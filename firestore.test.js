const {
  initializeTestEnvironment,
  assertFails,
  assertSucceeds,
} = require("@firebase/rules-unit-testing");
const { test, before, after, beforeEach } = require("node:test");
const fs = require("node:fs");

let testEnv;
const PROJECT_ID = process.env.GCP_PROJECT || "demo-no-project";
const ALICE_UID = "alice_123";
const BOB_UID = "bob_456";

const [emulatorHost, emulatorPortStr] = (
  process.env.FIRESTORE_EMULATOR_HOST || "127.0.0.1:8085"
).split(":");
const emulatorPort = parseInt(emulatorPortStr, 10);

before(async () => {
  const rules = fs.readFileSync("./firestore.rules", "utf8");
  testEnv = await initializeTestEnvironment({
    projectId: PROJECT_ID,
    firestore: {
      rules,
      host: emulatorHost,
      port: emulatorPort,
    },
  });
});

after(async () => {
  if (testEnv) {
    await testEnv.cleanup();
  }
});

beforeEach(async () => {
  if (testEnv) {
    await testEnv.clearFirestore();
  }
});

test("Unauthenticated user cannot read or write user profiles", async () => {
  const unauthDb = testEnv.unauthenticatedContext().firestore();
  await assertFails(unauthDb.collection("users").doc(ALICE_UID).get());
});

test("Authenticated user can create and read their own valid Cotorra profile", async () => {
  const aliceDb = testEnv.authenticatedContext(ALICE_UID).firestore();
  const now = new Date();
  await assertSucceeds(
    aliceDb.collection("users").doc(ALICE_UID).set({
      userId: ALICE_UID,
      displayName: "Compa Dominicano",
      email: "alice@cotorra.do",
      avatarId: "classic",
      activeLanguageId: "en",
      activeLevel: "A1",
      dailyGoalMinutes: 25,
      learningGoal: "travel",
      coins: 1250,
      lives: 5,
      currentStreak: 12,
      bestStreak: 12,
      totalStudyMinutes: 392,
      completedLessonsCount: 18,
      wordsLearnedCount: 248,
      isDarkTheme: false,
      createdAt: now,
      updatedAt: now,
    })
  );
  await assertSucceeds(aliceDb.collection("users").doc(ALICE_UID).get());
});

test("Authenticated user cannot read another user's profile (PII isolation)", async () => {
  const now = new Date();
  await testEnv.withSecurityRulesDisabled(async (context) => {
    await context.firestore().collection("users").doc(BOB_UID).set({
      userId: BOB_UID,
      displayName: "Bob",
      activeLanguageId: "fr",
      activeLevel: "A1",
      dailyGoalMinutes: 25,
      coins: 100,
      lives: 5,
      currentStreak: 1,
      createdAt: now,
      updatedAt: now,
    });
  });

  const aliceDb = testEnv.authenticatedContext(ALICE_UID).firestore();
  await assertFails(aliceDb.collection("users").doc(BOB_UID).get());
});

test("Shadow update with ghost field is rejected", async () => {
  const now = new Date();
  const aliceDb = testEnv.authenticatedContext(ALICE_UID).firestore();
  await assertSucceeds(
    aliceDb.collection("users").doc(ALICE_UID).set({
      userId: ALICE_UID,
      displayName: "Alice",
      activeLanguageId: "en",
      activeLevel: "A1",
      dailyGoalMinutes: 25,
      coins: 100,
      lives: 5,
      currentStreak: 1,
      createdAt: now,
      updatedAt: now,
    })
  );

  await assertFails(
    aliceDb.collection("users").doc(ALICE_UID).update({
      coins: 200,
      isAdmin: true,
      updatedAt: new Date(),
    })
  );
});

test("Language progress subcollection enforces valid CEFR levels and ownership", async () => {
  const now = new Date();
  const aliceDb = testEnv.authenticatedContext(ALICE_UID).firestore();
  await assertSucceeds(
    aliceDb
      .collection("users")
      .doc(ALICE_UID)
      .collection("progress")
      .doc("en")
      .set({
        userId: ALICE_UID,
        languageId: "en",
        currentLevel: "A1",
        completedLessonsCount: 3,
        studyMinutes: 75,
        listeningScore: 68,
        readingScore: 74,
        speakingScore: 62,
        writingScore: 70,
        createdAt: now,
        updatedAt: now,
      })
  );

  // Invalid CEFR level Z9 must fail
  await assertFails(
    aliceDb
      .collection("users")
      .doc(ALICE_UID)
      .collection("progress")
      .doc("fr")
      .set({
        userId: ALICE_UID,
        languageId: "fr",
        currentLevel: "Z9",
        completedLessonsCount: 0,
        studyMinutes: 0,
        listeningScore: 0,
        readingScore: 0,
        speakingScore: 0,
        writingScore: 0,
        createdAt: now,
        updatedAt: now,
      })
  );
});
