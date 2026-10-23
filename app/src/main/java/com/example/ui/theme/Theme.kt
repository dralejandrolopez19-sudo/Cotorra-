package com.example.ui.theme

import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.darkColorScheme
import androidx.compose.material3.lightColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color

private val DarkColorScheme = darkColorScheme(
    primary = CotorraBlueLight,
    onPrimary = Color.White,
    secondary = CotorraGreen,
    onSecondary = Color.White,
    tertiary = CotorraRed,
    background = CotorraBackgroundDark,
    surface = CotorraSurfaceDark,
    onBackground = Color.White,
    onSurface = Color.White
)

private val LightColorScheme = lightColorScheme(
    primary = CotorraBlue,
    onPrimary = Color.White,
    secondary = CotorraGreen,
    onSecondary = Color.White,
    tertiary = CotorraRed,
    background = CotorraBackgroundLight,
    surface = CotorraSurfaceLight,
    onBackground = Color(0xFF0F172A),
    onSurface = Color(0xFF0F172A)
)

@Composable
fun MyApplicationTheme(
    darkTheme: Boolean = isSystemInDarkTheme(),
    content: @Composable () -> Unit
) {
    val colorScheme = if (darkTheme) DarkColorScheme else LightColorScheme

    MaterialTheme(
        colorScheme = colorScheme,
        typography = Typography,
        content = content
    )
}
