package com.example.loginbackend;

// LoginResponse.java
// Role: DTO for the JSON body the backend sends back.
// Success: {"success":true,"message":"Login successful","userId":1,"email":"test@example.com","name":"Test User"}
// Failure: {"success":false,"message":"Invalid email or password","userId":null,"email":null,"name":null}
public class LoginResponse {

    private boolean success;
    private String message;
    private Long userId;
    private String email;
    private String name;

    public LoginResponse(boolean success, String message, Long userId, String email, String name) {
        this.success = success;
        this.message = message;
        this.userId = userId;
        this.email = email;
        this.name = name;
    }

    // Convenience factory methods keep the service code readable.
    public static LoginResponse ok(User user) {
        return new LoginResponse(true, "Login successful", user.getId(), user.getEmail(), user.getName());
    }

    public static LoginResponse fail(String message) {
        return new LoginResponse(false, message, null, null, null);
    }

    public boolean isSuccess() { return success; }
    public String getMessage() { return message; }
    public Long getUserId() { return userId; }
    public String getEmail() { return email; }
    public String getName() { return name; }
}
