package com.example.loginapp.data

import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory

// RetrofitClient.kt
// Role: builds ONE Retrofit instance for the whole app and exposes the AuthApi.
object RetrofitClient {

    // 10.0.2.2 is a special alias: from inside the Android EMULATOR it points to
    // "localhost" of the computer running the Spring Boot server.
    // On a REAL phone, replace it with your computer's LAN IP, e.g. "http://192.168.1.20:8080/".
    private const val BASE_URL = "http://10.0.2.2:8080/"

    // `by lazy` = created only the first time it is used, then reused forever.
    val authApi: AuthApi by lazy {
        Retrofit.Builder()
            .baseUrl(BASE_URL)
            .addConverterFactory(GsonConverterFactory.create()) // JSON <-> Kotlin objects
            .build()
            .create(AuthApi::class.java)
    }
}
