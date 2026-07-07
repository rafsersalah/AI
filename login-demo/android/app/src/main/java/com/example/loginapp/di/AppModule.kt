package com.example.loginapp.di

import com.example.loginapp.data.AuthRepositoryImpl
import com.example.loginapp.data.RetrofitClient
import com.example.loginapp.domain.AuthRepository
import com.example.loginapp.domain.LoginUseCase

// AppModule.kt
// Role: MANUAL dependency injection (no Hilt). This is the ONE place where the
// real objects are created and wired together:
//
//   RetrofitClient.authApi  ->  AuthRepositoryImpl  ->  LoginUseCase  ->  LoginViewModel
//
// Because it is an `object` (singleton), every object here is created exactly once.
object AppModule {

    // Data layer: repository implementation, built on top of the Retrofit API.
    private val authRepository: AuthRepository = AuthRepositoryImpl(RetrofitClient.authApi)

    // Domain layer: use case, built on top of the repository INTERFACE.
    val loginUseCase: LoginUseCase = LoginUseCase(authRepository)
}
