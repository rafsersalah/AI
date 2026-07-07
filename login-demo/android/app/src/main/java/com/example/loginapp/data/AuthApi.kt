package com.example.loginapp.data

import retrofit2.http.Body
import retrofit2.http.POST

// AuthApi.kt
// Role: the Retrofit interface. Each function = one HTTP endpoint.
// Retrofit generates the implementation for us at runtime.
interface AuthApi {

    // POST http://<server>/api/auth/login  with a JSON body
    @POST("api/auth/login")
    suspend fun login(@Body request: LoginRequest): LoginResponse
}
