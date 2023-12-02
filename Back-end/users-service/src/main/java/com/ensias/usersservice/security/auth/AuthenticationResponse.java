package com.ensias.usersservice.security.auth;

import com.ensias.usersservice.users.model.enums.Role;

public record AuthenticationResponse(String username, Long id, String accessToken, Role role) {
}
