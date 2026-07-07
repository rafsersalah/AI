package com.example.loginapp.ui

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.material3.Button
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.text.input.PasswordVisualTransformation
import androidx.compose.ui.unit.dp
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import com.example.loginapp.viewmodel.LoginViewModel

// LoginScreen.kt
// Role: the Compose UI. It is "dumb": it only
//   1. draws whatever is inside LoginUiState, and
//   2. forwards user actions (typing, button click) to the ViewModel.
@Composable
fun LoginScreen(viewModel: LoginViewModel) {

    // Collect the StateFlow. Every time the ViewModel emits a new LoginUiState,
    // Compose automatically redraws the parts of the screen that changed.
    val uiState by viewModel.uiState.collectAsStateWithLifecycle()

    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(24.dp),
        verticalArrangement = Arrangement.Center,
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Text(text = "Login", style = MaterialTheme.typography.headlineMedium)

        Spacer(modifier = Modifier.height(24.dp))

        // Email field
        OutlinedTextField(
            value = uiState.email,
            onValueChange = { viewModel.onEmailChange(it) },
            label = { Text("Email") },
            singleLine = true,
            enabled = !uiState.isLoading,
            keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Email),
            modifier = Modifier.fillMaxWidth()
        )

        Spacer(modifier = Modifier.height(12.dp))

        // Password field (dots instead of characters)
        OutlinedTextField(
            value = uiState.password,
            onValueChange = { viewModel.onPasswordChange(it) },
            label = { Text("Password") },
            singleLine = true,
            enabled = !uiState.isLoading,
            visualTransformation = PasswordVisualTransformation(),
            keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Password),
            modifier = Modifier.fillMaxWidth()
        )

        Spacer(modifier = Modifier.height(24.dp))

        // Login button — disabled while loading so the user cannot double-submit
        Button(
            onClick = { viewModel.onLoginClick() },
            enabled = !uiState.isLoading,
            modifier = Modifier.fillMaxWidth()
        ) {
            Text("Login")
        }

        Spacer(modifier = Modifier.height(16.dp))

        // Loading indicator, shown only while the request is running
        if (uiState.isLoading) {
            CircularProgressIndicator(modifier = Modifier.size(32.dp))
        }

        // Error message (red), shown only when something went wrong
        uiState.errorMessage?.let { message ->
            Text(text = message, color = MaterialTheme.colorScheme.error)
        }

        // Success message
        if (uiState.loginSuccess) {
            Text(
                text = "Welcome, ${uiState.loggedInUserName ?: "user"}!",
                color = MaterialTheme.colorScheme.primary
            )
        }
    }
}
