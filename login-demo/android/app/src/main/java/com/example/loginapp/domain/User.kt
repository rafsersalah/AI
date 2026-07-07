package com.example.loginapp.domain

// User.kt
// Role: the clean domain model. This is what the rest of the app works with —
// it knows nothing about JSON, Retrofit, or the backend.
data class User(
    val id: Long,
    val email: String,
    val name: String
)
