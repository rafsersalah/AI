package com.example.loginapp.data

// LoginRequest.kt
// Role: the JSON body Android SENDS to the backend.
// Gson turns this object into: {"email":"test@example.com","password":"123456"}
data class LoginRequest(
    val email: String,
    val password: String
)
