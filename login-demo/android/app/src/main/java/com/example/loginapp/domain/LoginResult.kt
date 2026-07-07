package com.example.loginapp.domain

// LoginResult.kt
// Role: the only two things a login can produce, expressed as a sealed class.
// The ViewModel does a simple `when` over this — no exceptions leak into the UI layer.
sealed class LoginResult {
    data class Success(val user: User) : LoginResult()
    data class Error(val message: String) : LoginResult()
}
