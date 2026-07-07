package com.example.loginapp.domain

// LoginUseCase.kt
// Role: one business action = one use case. Right now it just forwards to the
// repository, but this is the place where business rules would live
// (e.g. "lowercase the email before sending").
class LoginUseCase(
    private val authRepository: AuthRepository
) {
    // `operator fun invoke` lets us call the use case like a function:
    //   loginUseCase(email, password)
    suspend operator fun invoke(email: String, password: String): LoginResult {
        return authRepository.login(email.lowercase(), password)
    }
}
