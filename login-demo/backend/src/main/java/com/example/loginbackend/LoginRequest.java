package com.example.loginbackend;

// LoginRequest.java
// Role: DTO for the JSON body the Android app sends:
// {"email":"test@example.com","password":"123456"}
public class LoginRequest {

    private String email;
    private String password;

    public LoginRequest() {
    }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
}
