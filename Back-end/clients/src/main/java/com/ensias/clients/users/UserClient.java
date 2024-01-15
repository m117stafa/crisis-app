package com.ensias.clients.users;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(
        value = "USER",
        path = "user"
)
public interface UserClient {
    @GetMapping("{userId}")
    ResponseEntity<UserResponse> getUserById(@PathVariable("userId") Long id);
}
