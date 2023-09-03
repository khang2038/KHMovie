package com.app.KHMovie.services;

import com.app.KHMovie.entity.RefreshToken;
import com.app.KHMovie.payload.dtos.auths.LoginRequest;
import com.app.KHMovie.payload.dtos.auths.SignupRequest;
import com.app.KHMovie.payload.response.JwtResponse;
import com.app.KHMovie.shared.exceptions.ServiceException;

import java.util.Optional;

public interface AuthService {
    JwtResponse login(LoginRequest loginRequest);
    void register(SignupRequest signupRequest) throws ServiceException;
    Optional<RefreshToken> findByToken(String token);

    RefreshToken createRefreshToken(Long userId);

    RefreshToken verifyExpiration(RefreshToken token);
    int deleteByUserId(Long userId);

}
