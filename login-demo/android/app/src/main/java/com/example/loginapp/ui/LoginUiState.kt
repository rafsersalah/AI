package com.example.loginapp.ui

// LoginUiState.kt
// Role: ONE data class that describes everything the login screen can show.
// The ViewModel owns a StateFlow<LoginUiState>; the screen just draws whatever is inside it.
data class LoginUiState(
    val email: String = "",
    val password: String = "",
    val isLoading: Boolean = false,       // true while the network call is running
    val errorMessage: String? = null,     // non-null -> show a red error text
    val loginSuccess: Boolean = false,    // true -> login worked
    val loggedInUserName: String? = null  // name of the user returned by the backend
)
