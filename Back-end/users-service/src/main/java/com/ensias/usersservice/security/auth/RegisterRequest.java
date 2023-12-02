package com.ensias.usersservice.security.auth;

import jakarta.persistence.Column;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import com.ensias.usersservice.users.model.enums.Role;

public record RegisterRequest(@NotBlank(message = "Email must not be empty")
                              @Email(regexp = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$", message = "Email must be valid")
                              String email,
                              @NotBlank(message = "Username must not be empty")
                              String username,
                              @NotBlank(message = "Password must not be empty")
                              @Column(nullable = false)
                              String password,
                              Role role,
                              String imageUrl,
                              Integer age,
                              String phone) {
}
