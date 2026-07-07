package com.example.loginbackend;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

// UserRepository.java
// Role: database access. Spring Data JPA writes the SQL for us:
// findByEmail(...) becomes  SELECT * FROM users WHERE email = ?
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);
}
