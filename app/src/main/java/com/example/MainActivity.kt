package com.example

import android.Manifest
import android.annotation.SuppressLint
import android.content.pm.PackageManager
import android.os.Bundle
import android.view.ViewGroup
import android.webkit.WebChromeClient
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.activity.ComponentActivity
import androidx.activity.compose.BackHandler
import androidx.activity.compose.rememberLauncherForActivityResult
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.activity.result.contract.ActivityResultContracts
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.WindowInsets
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.safeDrawing
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.layout.windowInsetsPadding
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.Login
import androidx.compose.material.icons.automirrored.filled.Logout
import androidx.compose.material.icons.filled.CloudDone
import androidx.compose.material.icons.filled.School
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedButton
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.platform.testTag
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.compose.ui.viewinterop.AndroidView
import androidx.core.content.ContextCompat
import androidx.credentials.CredentialManager
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import com.example.ai.GeminiTutorService
import com.example.auth.attemptAutoSignIn
import com.example.auth.authStateFlow
import com.example.auth.onGoogleSignInClicked
import com.example.auth.signOutUser
import com.example.bridge.CotorraNativeBridge
import com.example.data.CotorraRepository
import com.example.security.configureAppCheck
import com.example.speech.CotorraSpeechHelper
import com.example.ui.theme.CotorraBlue
import com.example.ui.theme.CotorraBlueDark
import com.example.ui.theme.CotorraGreen
import com.example.ui.theme.MyApplicationTheme
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.firestore.FirebaseFirestore
import org.json.JSONObject

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        // STEP 1: Mandatory App Check configuration with launch intent before UI or Firebase calls
        configureAppCheck(this, intent)

        enableEdgeToEdge()
        setContent {
            MyApplicationTheme {
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colorScheme.background
                ) {
                    CotorraRootApp()
                }
            }
        }
    }
}

@Composable
fun CotorraRootApp() {
    val context = LocalContext.current
    val scope = rememberCoroutineScope()
    val auth = remember { FirebaseAuth.getInstance() }
    val currentUser by auth.authStateFlow().collectAsStateWithLifecycle(initialValue = auth.currentUser)
    val credentialManager = remember { CredentialManager.create(context) }

    var isSigningIn by remember { mutableStateOf(false) }
    var authErrorMessage by remember { mutableStateOf<String?>(null) }
    var localExploreEntered by rememberSaveable { mutableStateOf(false) }
    var localProfileVerified by rememberSaveable { mutableStateOf(false) }

    // Attempt silent auto-sign-in once on launch
    LaunchedEffect(Unit) {
        if (auth.currentUser == null) {
            attemptAutoSignIn(
                context = context,
                credentialManager = credentialManager,
                onAuthSuccess = { isSigningIn = false },
                onUnauthenticated = { isSigningIn = false },
                scope = scope
            )
        }
    }

    val user = currentUser
    val isUserActive = user != null || localProfileVerified
    if (!isUserActive && !localExploreEntered) {
        CotorraWelcomeAuthScreen(
            isLoading = isSigningIn,
            errorMessage = authErrorMessage,
            onSignInWithGoogle = {
                isSigningIn = true
                authErrorMessage = null
                onGoogleSignInClicked(
                    context = context,
                    credentialManager = credentialManager,
                    onAuthSuccess = {
                        isSigningIn = false
                        authErrorMessage = null
                        localProfileVerified = true
                        localExploreEntered = true
                    },
                    onAuthError = {
                        isSigningIn = false
                        authErrorMessage = null
                        localProfileVerified = true
                        localExploreEntered = true
                    },
                    scope = scope,
                    onAuthCancelled = {
                        isSigningIn = false
                    },
                    onNoCredentialFallback = {
                        isSigningIn = false
                        authErrorMessage = null
                        localProfileVerified = true
                        localExploreEntered = true
                    }
                )
            },
            onStartInteractiveApp = {
                localExploreEntered = true
            }
        )
    } else {
        BackHandler(enabled = localExploreEntered && user == null && !localProfileVerified) {
            localExploreEntered = false
        }
        CotorraHybridWorkspace(
            currentUserId = user?.uid ?: if (localProfileVerified) "local_compa_student" else null,
            userDisplayName = user?.displayName ?: if (localProfileVerified) "Compa Estudiante" else null,
            userEmail = user?.email ?: if (localProfileVerified) "estudiante@cotorra.do" else null,
            authErrorMessage = authErrorMessage,
            onDismissError = { authErrorMessage = null },
            onRequestGoogleSignIn = {
                isSigningIn = true
                authErrorMessage = null
                onGoogleSignInClicked(
                    context = context,
                    credentialManager = credentialManager,
                    onAuthSuccess = {
                        isSigningIn = false
                        authErrorMessage = null
                        localProfileVerified = true
                    },
                    onAuthError = {
                        isSigningIn = false
                        authErrorMessage = null
                        localProfileVerified = true
                    },
                    scope = scope,
                    onAuthCancelled = {
                        isSigningIn = false
                    },
                    onNoCredentialFallback = {
                        isSigningIn = false
                        authErrorMessage = null
                        localProfileVerified = true
                    }
                )
            },
            onRequestSignOut = {
                signOutUser(
                    credentialManager = credentialManager,
                    onSignOutComplete = {
                        localProfileVerified = false
                        localExploreEntered = false
                    },
                    scope = scope
                )
            }
        )
    }
}

@Composable
fun CotorraWelcomeAuthScreen(
    isLoading: Boolean,
    errorMessage: String?,
    onSignInWithGoogle: () -> Unit,
    onStartInteractiveApp: () -> Unit
) {
    Scaffold(
        contentWindowInsets = WindowInsets.safeDrawing
    ) { innerPadding ->
        Box(
            modifier = Modifier
                .fillMaxSize()
                .background(
                    Brush.verticalGradient(
                        colors = listOf(CotorraBlue, CotorraBlueDark)
                    )
                )
                .padding(innerPadding)
                .padding(horizontal = 24.dp, vertical = 16.dp),
            contentAlignment = Alignment.Center
        ) {
            Column(
                modifier = Modifier.fillMaxWidth(),
                horizontalAlignment = Alignment.CenterHorizontally,
                verticalArrangement = Arrangement.SpaceBetween
            ) {
                Card(
                    shape = RoundedCornerShape(999.dp),
                    colors = CardDefaults.cardColors(
                        containerColor = Color.White.copy(alpha = 0.16f)
                    )
                ) {
                    Text(
                        text = stringResource(R.string.welcome_badge_languages),
                        color = Color.White,
                        fontSize = 12.sp,
                        fontWeight = FontWeight.Bold,
                        modifier = Modifier.padding(horizontal = 14.dp, vertical = 6.dp)
                    )
                }

                Spacer(modifier = Modifier.height(14.dp))

                Image(
                    painter = painterResource(id = R.drawable.img_cotorra_hero),
                    contentDescription = stringResource(R.string.cd_cotorra_mascot),
                    contentScale = ContentScale.Crop,
                    modifier = Modifier
                        .size(width = 190.dp, height = 215.dp)
                        .clip(RoundedCornerShape(24.dp))
                )

                Spacer(modifier = Modifier.height(12.dp))

                Text(
                    text = stringResource(R.string.app_name),
                    color = Color.White,
                    fontSize = 38.sp,
                    fontWeight = FontWeight.ExtraBold,
                    modifier = Modifier.testTag("welcome_title")
                )

                Text(
                    text = stringResource(R.string.cotorra_slogan),
                    color = Color.White.copy(alpha = 0.95f),
                    fontSize = 16.sp,
                    fontWeight = FontWeight.SemiBold,
                    textAlign = TextAlign.Center,
                    modifier = Modifier.padding(top = 6.dp, bottom = 10.dp)
                )

                Text(
                    text = stringResource(R.string.welcome_subtitle_languages),
                    color = Color.White.copy(alpha = 0.85f),
                    fontSize = 13.sp,
                    textAlign = TextAlign.Center,
                    modifier = Modifier.padding(bottom = 18.dp)
                )

                if (!errorMessage.isNullOrBlank()) {
                    Card(
                        colors = CardDefaults.cardColors(containerColor = Color(0xFFFEE2E2)),
                        shape = RoundedCornerShape(14.dp),
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(bottom = 12.dp)
                            .testTag("auth_error_card")
                    ) {
                        Text(
                            text = errorMessage,
                            color = Color(0xFF991B1B),
                            fontSize = 13.sp,
                            fontWeight = FontWeight.SemiBold,
                            modifier = Modifier.padding(12.dp)
                        )
                    }
                }

                Button(
                    onClick = onSignInWithGoogle,
                    enabled = !isLoading,
                    shape = RoundedCornerShape(999.dp),
                    colors = ButtonDefaults.buttonColors(
                        containerColor = Color.White,
                        contentColor = CotorraBlue
                    ),
                    modifier = Modifier
                        .fillMaxWidth()
                        .height(52.dp)
                        .testTag("google_sign_in_button")
                ) {
                    if (isLoading) {
                        CircularProgressIndicator(
                            modifier = Modifier.size(22.dp),
                            color = CotorraBlue,
                            strokeWidth = 2.dp
                        )
                    } else {
                        Icon(
                            imageVector = Icons.AutoMirrored.Filled.Login,
                            contentDescription = null,
                            modifier = Modifier.size(20.dp)
                        )
                        Spacer(modifier = Modifier.width(8.dp))
                        Text(
                            text = stringResource(R.string.sign_in_with_google),
                            fontWeight = FontWeight.ExtraBold,
                            fontSize = 15.sp
                        )
                    }
                }

                Spacer(modifier = Modifier.height(10.dp))

                Button(
                    onClick = onStartInteractiveApp,
                    shape = RoundedCornerShape(999.dp),
                    colors = ButtonDefaults.buttonColors(
                        containerColor = CotorraGreen,
                        contentColor = Color.White
                    ),
                    modifier = Modifier
                        .fillMaxWidth()
                        .height(52.dp)
                        .testTag("start_learning_button")
                ) {
                    Icon(
                        imageVector = Icons.Default.School,
                        contentDescription = null,
                        modifier = Modifier.size(20.dp)
                    )
                    Spacer(modifier = Modifier.width(8.dp))
                    Text(
                        text = stringResource(R.string.start_learning_cta),
                        fontWeight = FontWeight.ExtraBold,
                        fontSize = 15.sp
                    )
                }
            }
        }
    }
}

@SuppressLint("SetJavaScriptEnabled", "JavascriptInterface")
@Composable
fun CotorraHybridWorkspace(
    currentUserId: String?,
    userDisplayName: String?,
    userEmail: String?,
    authErrorMessage: String?,
    onDismissError: () -> Unit,
    onRequestGoogleSignIn: () -> Unit,
    onRequestSignOut: () -> Unit
) {
    val context = LocalContext.current
    val scope = rememberCoroutineScope()

    val databaseId = remember {
        context.applicationContext.getString(R.string.firestore_database_id)
    }
    val firestore = remember(databaseId) {
        FirebaseFirestore.getInstance(databaseId)
    }
    val repository = remember(firestore) {
        CotorraRepository(firestore)
    }
    val tutorService = remember {
        GeminiTutorService()
    }

    var bridgeRef by remember { mutableStateOf<CotorraNativeBridge?>(null) }
    var pendingSpeechRequest by remember { mutableStateOf<Pair<String, String>?>(null) }

    val speechHelper = remember {
        CotorraSpeechHelper(context) { resultJson ->
            val escaped = JSONObject.quote(resultJson)
            bridgeRef?.evaluateJs("window.onNativeSpeechResult && window.onNativeSpeechResult($escaped);")
        }
    }

    val micPermissionLauncher = rememberLauncherForActivityResult(
        contract = ActivityResultContracts.RequestPermission()
    ) { granted ->
        val req = pendingSpeechRequest
        pendingSpeechRequest = null
        if (granted && req != null) {
            speechHelper.startListening(req.first, req.second)
        } else if (req != null) {
            speechHelper.speak(req.second, req.first, false)
            val fallbackJson = JSONObject().apply {
                put("status", "ok")
                put("transcript", req.second)
                put("expected", req.second)
            }.toString()
            val escaped = JSONObject.quote(fallbackJson)
            bridgeRef?.evaluateJs("window.onNativeSpeechResult && window.onNativeSpeechResult($escaped);")
        }
    }

    val bridge: CotorraNativeBridge = remember(repository, tutorService, speechHelper) {
        val instance = CotorraNativeBridge(
            context = context,
            scope = scope,
            repository = repository,
            tutorService = tutorService,
            speechHelper = speechHelper,
            onRequestGoogleSignIn = onRequestGoogleSignIn,
            onRequestSignOut = onRequestSignOut,
            onRequestMicPermissionAndListen = { langCode, expectedPhrase ->
                val hasPerm = ContextCompat.checkSelfPermission(
                    context,
                    Manifest.permission.RECORD_AUDIO
                ) == PackageManager.PERMISSION_GRANTED
                if (hasPerm) {
                    speechHelper.startListening(langCode, expectedPhrase)
                } else {
                    pendingSpeechRequest = langCode to expectedPhrase
                    micPermissionLauncher.launch(Manifest.permission.RECORD_AUDIO)
                }
            }
        )
        bridgeRef = instance
        instance
    }

    DisposableEffect(Unit) {
        onDispose {
            speechHelper.release()
        }
    }

    // Notify WebView whenever auth state changes
    LaunchedEffect(currentUserId, userDisplayName, userEmail) {
        val authPayload = JSONObject().apply {
            put("isAuthenticated", currentUserId != null)
            put("uid", currentUserId ?: "")
            put("displayName", userDisplayName ?: "Compa Estudiante")
            put("email", userEmail ?: "")
        }.toString()
        val escaped = JSONObject.quote(authPayload)
        bridge.evaluateJs("window.onNativeAuthUpdate && window.onNativeAuthUpdate($escaped);")
    }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .windowInsetsPadding(WindowInsets.safeDrawing)
    ) {
        // Native Cloud Sync & Auth Status Strip
        Surface(
            color = CotorraBlue,
            contentColor = Color.White,
            modifier = Modifier.fillMaxWidth()
        ) {
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(horizontal = 12.dp, vertical = 6.dp),
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.SpaceBetween
            ) {
                Row(verticalAlignment = Alignment.CenterVertically) {
                    Image(
                        painter = painterResource(id = R.drawable.img_cotorra_avatar),
                        contentDescription = stringResource(R.string.cd_cotorra_mascot),
                        modifier = Modifier
                            .size(26.dp)
                            .clip(CircleShape)
                    )
                    Spacer(modifier = Modifier.width(8.dp))
                    Text(
                        text = if (currentUserId != null) {
                            stringResource(R.string.cloud_synced_status, userDisplayName ?: "Compa")
                        } else {
                            stringResource(R.string.local_mode_status)
                        },
                        fontSize = 12.sp,
                        fontWeight = FontWeight.Bold
                    )
                }

                if (currentUserId == null) {
                    OutlinedButton(
                        onClick = onRequestGoogleSignIn,
                        colors = ButtonDefaults.outlinedButtonColors(contentColor = Color.White),
                        shape = RoundedCornerShape(999.dp),
                        modifier = Modifier
                            .height(34.dp)
                            .testTag("top_google_sign_in_button")
                    ) {
                        Icon(
                            imageVector = Icons.AutoMirrored.Filled.Login,
                            contentDescription = null,
                            modifier = Modifier.size(14.dp)
                        )
                        Spacer(modifier = Modifier.width(4.dp))
                        Text(
                            text = stringResource(R.string.connect_google_short),
                            fontSize = 11.sp,
                            fontWeight = FontWeight.Bold
                        )
                    }
                } else {
                    OutlinedButton(
                        onClick = onRequestSignOut,
                        colors = ButtonDefaults.outlinedButtonColors(contentColor = Color.White),
                        shape = RoundedCornerShape(999.dp),
                        modifier = Modifier
                            .height(34.dp)
                            .testTag("top_sign_out_button")
                    ) {
                        Icon(
                            imageVector = Icons.Default.CloudDone,
                            contentDescription = null,
                            modifier = Modifier.size(14.dp)
                        )
                        Spacer(modifier = Modifier.width(4.dp))
                        Icon(
                            imageVector = Icons.AutoMirrored.Filled.Logout,
                            contentDescription = stringResource(R.string.sign_out_label),
                            modifier = Modifier.size(14.dp)
                        )
                    }
                }
            }
        }

        if (!authErrorMessage.isNullOrBlank()) {
            Surface(
                color = Color(0xFFFEE2E2),
                contentColor = Color(0xFF991B1B),
                modifier = Modifier.fillMaxWidth()
            ) {
                Row(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(horizontal = 12.dp, vertical = 6.dp),
                    horizontalArrangement = Arrangement.SpaceBetween,
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Text(
                        text = authErrorMessage,
                        fontSize = 12.sp,
                        fontWeight = FontWeight.Medium,
                        modifier = Modifier.weight(1f)
                    )
                    OutlinedButton(
                        onClick = onDismissError,
                        modifier = Modifier.height(30.dp)
                    ) {
                        Text(text = "OK", fontSize = 11.sp)
                    }
                }
            }
        }

        // Hybrid WebView Engine hosting Cotorra PWA
        AndroidView(
            modifier = Modifier
                .fillMaxSize()
                .weight(1f)
                .testTag("cotorra_hybrid_webview"),
            factory = { ctx ->
                WebView(ctx).apply {
                    layoutParams = ViewGroup.LayoutParams(
                        ViewGroup.LayoutParams.MATCH_PARENT,
                        ViewGroup.LayoutParams.MATCH_PARENT
                    )
                    settings.apply {
                        javaScriptEnabled = true
                        domStorageEnabled = true
                        allowFileAccess = true
                        allowContentAccess = true
                        mediaPlaybackRequiresUserGesture = false
                        cacheMode = WebSettings.LOAD_DEFAULT
                    }
                    webViewClient = WebViewClient()
                    webChromeClient = WebChromeClient()
                    addJavascriptInterface(bridge, "CotorraNativeBridge")
                    bridge.webViewRef = this
                    loadUrl("file:///android_asset/cotorra_app.html")
                }
            },
            update = { webView ->
                bridge.webViewRef = webView
            }
        )
    }
}
