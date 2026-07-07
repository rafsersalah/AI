package com.example.loginbackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

// LoginBackendApplication.java
// Role: the entry point of the Spring Boot server. Running this main() starts
// an embedded web server on port 8080.
@SpringBootApplication
public class LoginBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(LoginBackendApplication.class, args);
    }
}
