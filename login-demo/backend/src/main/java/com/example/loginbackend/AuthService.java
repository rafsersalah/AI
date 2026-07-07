package com.example.loginbackend;

import java.util.Optional;
import org.springframework.stereotype.Service;

// AuthService.java
// Role: the business logic. Looks the user up in PostgreSQL (via UserRepository)
// and checks the password.
@Service
public class AuthService {

    private final UserRepository userRepository;

    // Spring injects the repository automatically (constructor injection).
    public AuthService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public LoginResponse login(String email, String password) {
        if (email == null || password == null || email.isBlank() || password.isBlank()) {
            return LoginResponse.fail("Email and password are required");
        }

        Optional<User> userInDb = userRepository.findByEmail(email.toLowerCase().trim());

        if (userInDb.isEmpty()) {
            // Same message for "no such user" and "wrong password" on purpose:
            // never tell an attacker which one was wrong.
            return LoginResponse.fail("Invalid email or password");
        }

        User user = userInDb.get();

        // WARNING: plain-text comparison, for this beginner demo ONLY.
        // A real app stores a hash and checks it like:
        //   passwordEncoder.matches(password, user.getPassword())   // BCrypt
        if (!user.getPassword().equals(password)) {
            return LoginResponse.fail("Invalid email or password");
        }

        return LoginResponse.ok(user);
    }
}
