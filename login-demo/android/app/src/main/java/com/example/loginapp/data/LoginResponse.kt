package com.example.loginapp.data

// LoginResponse.kt
// Role: the JSON body Android RECEIVES from the backend.
// Success example: {"success":true,"message":"Login successful","userId":1,"email":"test@example.com","name":"Test User"}
// Failure example: {"success":false,"message":"Invalid email or password","userId":null,"email":null,"name":null}
data class LoginResponse(
    val success: Boolean,
    val message: String,
    val userId: Long?,
    val email: String?,
    val name: String?
)
