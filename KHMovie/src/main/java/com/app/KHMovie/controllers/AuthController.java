package com.app.KHMovie.controllers;

import com.app.KHMovie.entity.RefreshToken;
import com.app.KHMovie.payload.dtos.auths.LoginRequest;
import com.app.KHMovie.payload.dtos.auths.RefreshTokenRequest;
import com.app.KHMovie.payload.dtos.auths.SignupRequest;
import com.app.KHMovie.payload.response.JwtResponse;
import com.app.KHMovie.payload.response.MessageResponse;
import com.app.KHMovie.payload.response.TokenRefreshResponse;
import com.app.KHMovie.services.AuthService;
import com.app.KHMovie.shared.exceptions.ServiceException;
import com.app.KHMovie.shared.exceptions.TokenRefreshException;
import com.app.KHMovie.utils.JwtUtils;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@Tag(name = "Auth", description = "Auth Api")
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    AuthService authService;

    @Autowired
    JwtUtils jwtUtils;

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

        JwtResponse response = authService.login(loginRequest);

        return ResponseEntity.ok(response);
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
        try {
            authService.register(signUpRequest);
            return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
        } catch (ServiceException e) {
            return ResponseEntity
                    .badRequest()
                    .body(e.getMessage());
        }
    }

    @PostMapping("/refresh-token")
    public ResponseEntity<?> refreshToken(@Valid @RequestBody RefreshTokenRequest request) {
        String requestRefreshToken = request.getRefreshToken();

        return authService.findByToken(requestRefreshToken)
                .map(authService::verifyExpiration)
                .map(RefreshToken::getUser)
                .map(user -> {
                    String token = jwtUtils.generateTokenFromUsername(user.getUsername());
                    return ResponseEntity.ok(new TokenRefreshResponse(token, requestRefreshToken));
                })
                .orElseThrow(() -> new TokenRefreshException(requestRefreshToken,
                        "Refresh token is not in database!"));
    }
}
