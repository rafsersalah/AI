package com.example.loginapp

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.lifecycle.viewmodel.compose.viewModel
import com.example.loginapp.di.AppModule
import com.example.loginapp.ui.LoginScreen
import com.example.loginapp.viewmodel.LoginViewModel

// MainActivity.kt
// Role: the app entry point. It asks Android for a LoginViewModel (using our
// factory + the use case from AppModule) and shows the LoginScreen.
class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            MaterialTheme {
                Surface {
                    // viewModel(...) keeps the same ViewModel instance alive
                    // across screen rotations.
                    val loginViewModel: LoginViewModel = viewModel(
                        factory = LoginViewModel.Factory(AppModule.loginUseCase)
                    )
                    LoginScreen(viewModel = loginViewModel)
                }
            }
        }
    }
}
