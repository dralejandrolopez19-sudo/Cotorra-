# Cotorra Security Specification (Payload-First Security TDD)

## 1. Data Invariants
1. **Strict Multi-Tenant Ownership**: Every `/users/{userId}` document and its subcollections (`/progress/{progressId}`, `/vocabulary/{vocabId}`) can only be read, created, updated, or deleted when `request.auth != null && request.auth.uid == userId`.
2. **Identity Integrity**: On creation and update, `request.resource.data.userId == request.auth.uid && request.resource.data.userId == userId`. On update, `userId` and `createdAt` are strictly immutable (`incoming().userId == existing().userId && incoming().createdAt == existing().createdAt`).
3. **Strict Schema & Bounds Validation**: Every `create` and `update` invokes `isValidUserProfile`, `isValidLanguageProgress`, or `isValidVocabularyCard` alongside `hasOnly` allowlists to block ghost fields, value poisoning, and oversized payloads.
4. **Temporal Integrity**: `createdAt` and `updatedAt` must be Firestore `timestamp` objects `<= request.time`.

## 2. The "Dirty Dozen" Adversarial Payloads
1. **Unauthenticated Profile Read**: `GET /users/alice_123` with `auth = null` -> REJECTED.
2. **Cross-User Profile Read (PII Leak Attempt)**: `GET /users/bob_456` as `alice_123` -> REJECTED.
3. **Identity Spoofing on Create**: `CREATE /users/alice_123` with `{"userId": "bob_456", ...}` -> REJECTED.
4. **Shadow Update (Ghost Field Injection)**: `UPDATE /users/alice_123` adding `"isAdmin": true` -> REJECTED by `hasOnly`.
5. **Immutable Field Mutation**: `UPDATE /users/alice_123` mutating `createdAt` or `userId` -> REJECTED.
6. **Value Poisoning (Negative Coins/Lives)**: `UPDATE /users/alice_123` setting `coins: -500` or `lives: 999` -> REJECTED by bounds check.
7. **Invalid CEFR Level Enum**: `CREATE /users/alice_123/progress/en` with `currentLevel: "Z9"` -> REJECTED.
8. **Oversized String DoS**: `CREATE /users/alice_123` with 200KB `displayName` -> REJECTED by `.size() <= 100`.
9. **ID Poisoning**: Document ID with invalid characters or > 128 chars -> REJECTED by `isValidId()`.
10. **Cross-User Subcollection List**: `LIST /users/bob_456/progress` as `alice_123` -> REJECTED.
11. **Competency Score Out-of-Range**: `CREATE /users/alice_123/progress/en` with `listeningScore: 150` -> REJECTED (`0 <= score <= 100`).
12. **Client-Side Epoch Timestamp Injection**: Passing integer `1700000000000` instead of `FieldValue.serverTimestamp()` for `createdAt` -> REJECTED (`is timestamp`).
