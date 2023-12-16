package org.tuto.clients;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(
        value ="USER",
        path = "user"
)
public interface UserClient {
    @GetMapping("/{id}")
    ResponseEntity<UserResponse> getUserById(@PathVariable Long id);
}
