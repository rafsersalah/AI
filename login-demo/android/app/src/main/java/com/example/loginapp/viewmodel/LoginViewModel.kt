package com.example.loginapp.viewmodel

import androidx.lifecycle.ViewModel
import androidx.lifecycle.ViewModelProvider
import androidx.lifecycle.viewModelScope
import com.example.loginapp.domain.LoginResult
import com.example.loginapp.domain.LoginUseCase
import com.example.loginapp.ui.LoginUiState
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch

// LoginViewModel.kt
// Role: holds the screen state (StateFlow<LoginUiState>) and reacts to UI events.
// It never talks to Retrofit directly — it only knows the LoginUseCase.
class LoginViewModel(
    private val loginUseCase: LoginUseCase
) : ViewModel() {

    // Private mutable state — only the ViewModel can change it.
    private val _uiState = MutableStateFlow(LoginUiState())

    // Public read-only state — the UI collects this.
    val uiState: StateFlow<LoginUiState> = _uiState.asStateFlow()

    // Called every time the user types in the email field.
    fun onEmailChange(newEmail: String) {
        _uiState.update { it.copy(email = newEmail, errorMessage = null) }
    }

    // Called every time the user types in the password field.
    fun onPasswordChange(newPassword: String) {
        _uiState.update { it.copy(password = newPassword, errorMessage = null) }
    }

    // Called when the Login button is clicked.
    fun onLoginClick() {
        val email = _uiState.value.email.trim()
        val password = _uiState.value.password

        // Simple client-side validation before we hit the network.
        if (email.isBlank() || password.isBlank()) {
            _uiState.update { it.copy(errorMessage = "Email and password must not be empty") }
            return
        }

        // viewModelScope: the coroutine is cancelled automatically
        // if the ViewModel is destroyed (e.g. screen closed).
        viewModelScope.launch {
            // 1. Show the loading spinner, clear old errors.
            _uiState.update { it.copy(isLoading = true, errorMessage = null, loginSuccess = false) }

            // 2. Run the use case (this suspends while the network call runs).
            val result = loginUseCase(email, password)

            // 3. Turn the domain result into new UI state.
            when (result) {
                is LoginResult.Success -> _uiState.update {
                    it.copy(
                        isLoading = false,
                        loginSuccess = true,
                        loggedInUserName = result.user.name
                    )
                }
                is LoginResult.Error -> _uiState.update {
                    it.copy(isLoading = false, errorMessage = result.message)
                }
            }
        }
    }

    // Factory: tells Android HOW to build this ViewModel, because it has a
    // constructor parameter (loginUseCase). This is part of our manual DI.
    class Factory(private val loginUseCase: LoginUseCase) : ViewModelProvider.Factory {
        @Suppress("UNCHECKED_CAST")
        override fun <T : ViewModel> create(modelClass: Class<T>): T {
            return LoginViewModel(loginUseCase) as T
        }
    }
}
