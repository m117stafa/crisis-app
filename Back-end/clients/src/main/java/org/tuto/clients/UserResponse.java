package org.tuto.clients;

public record UserResponse(Long id, String username, String email, String firstName, String lastName) {
}
