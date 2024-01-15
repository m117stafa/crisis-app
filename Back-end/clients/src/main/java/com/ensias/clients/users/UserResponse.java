package com.ensias.clients.users;

public record UserResponse(Long id, String username, String firstName, String lastName, String email, String phone, String role, Integer age) {
}
