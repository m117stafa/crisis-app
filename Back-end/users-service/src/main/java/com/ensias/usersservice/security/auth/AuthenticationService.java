package com.ensias.usersservice.security.auth;

import com.ensias.usersservice.security.jwt.JwtService;
import com.ensias.usersservice.users.model.User;
import com.ensias.usersservice.users.model.enums.Role;
import com.ensias.usersservice.users.repository.UserRepository;
import jakarta.validation.constraints.NotNull;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final AuthenticationManager authenticationManager;
    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
    private final JwtService jwtService;

    public AuthenticationResponse register(RegisterRequest request){
        var authUser = User.builder()
                .username(request.username())
                .password(passwordEncoder.encode(request.password()))
                .age(request.age())
                .email(request.email())
                .phone(request.phone())
                .role(Role.USER)
                .build();
        var savedUser = userRepository.save(authUser);
        var accessToken = jwtService.generateToken(savedUser);
        return new AuthenticationResponse(savedUser.getUsername(), savedUser.getId(), accessToken,savedUser.getRole());
    }

    public AuthenticationResponse login(@NotNull AuthenticationRequest request){
        try{
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.username(),request.password()));
        }
        catch(BadCredentialsException e){
            throw new BadCredentialsException("Invalid username or password");
        }
        var user = userRepository.findByUsername(request.username()).orElse(new User());
        var accessToken = jwtService.generateToken(user);
        return new AuthenticationResponse(user.getUsername(),user.getId(),accessToken,user.getRole());
    }
}
