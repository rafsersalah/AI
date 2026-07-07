package com.example.loginapp.domain

// AuthRepository.kt
// Role: an INTERFACE in the domain layer. The domain says "someone must be able
// to log in" but does not care how (Retrofit, fake data, anything).
// The data layer provides the real implementation (AuthRepositoryImpl).
interface AuthRepository {
    suspend fun login(email: String, password: String): LoginResult
}
