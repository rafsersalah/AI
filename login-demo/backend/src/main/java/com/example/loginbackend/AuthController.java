package com.example.loginbackend;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

// AuthController.java
// Role: the HTTP layer. Receives POST /api/auth/login, hands the work to
// AuthService, and returns the LoginResponse as JSON.
//
// Note for beginners: we always return HTTP 200 and put success/failure inside
// the JSON ("success": true/false). That keeps the Android Retrofit code simple.
// Many production APIs return HTTP 401 for a failed login instead.
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest request) {
        return authService.login(request.getEmail(), request.getPassword());
    }
}
