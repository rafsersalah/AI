package com.example.loginbackend;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

// User.java
// Role: JPA entity mapped to the "users" table in PostgreSQL.
// One User object = one row in the table.
@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Postgres auto-increments the id
    private Long id;

    @Column(nullable = false, unique = true)
    private String email;

    // WARNING: plain-text password, for this beginner demo ONLY.
    // A real app must store a BCrypt HASH here, never the raw password.
    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String name;

    // JPA needs an empty constructor.
    public User() {
    }

    public User(String email, String password, String name) {
        this.email = email;
        this.password = password;
        this.name = name;
    }

    // Getters and setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
}
