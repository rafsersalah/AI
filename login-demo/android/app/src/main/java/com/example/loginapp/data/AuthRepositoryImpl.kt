package com.example.loginapp.data

import com.example.loginapp.domain.AuthRepository
import com.example.loginapp.domain.LoginResult
import com.example.loginapp.domain.User
import java.io.IOException

// AuthRepositoryImpl.kt
// Role: the REAL implementation of the domain's AuthRepository interface.
// It calls Retrofit, translates the network DTO (LoginResponse) into domain
// objects (User / LoginResult), and turns exceptions into friendly error messages.
class AuthRepositoryImpl(
    private val authApi: AuthApi
) : AuthRepository {

    override suspend fun login(email: String, password: String): LoginResult {
        return try {
            val response = authApi.login(LoginRequest(email, password))

            if (response.success && response.userId != null) {
                LoginResult.Success(
                    User(
                        id = response.userId,
                        email = response.email ?: email,
                        name = response.name ?: ""
                    )
                )
            } else {
                // Backend answered, but login failed (wrong email/password).
                LoginResult.Error(response.message)
            }
        } catch (e: IOException) {
            // No internet, server down, wrong IP, etc.
            LoginResult.Error("Cannot reach server. Is the backend running?")
        } catch (e: Exception) {
            LoginResult.Error("Unexpected error: ${e.message}")
        }
    }
}
