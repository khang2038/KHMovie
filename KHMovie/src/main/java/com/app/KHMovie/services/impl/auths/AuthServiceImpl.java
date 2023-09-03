package com.app.KHMovie.services.impl.auths;

import com.app.KHMovie.entity.RefreshToken;
import com.app.KHMovie.entity.Role;
import com.app.KHMovie.entity.User;
import com.app.KHMovie.payload.dtos.auths.LoginRequest;
import com.app.KHMovie.payload.dtos.auths.SignupRequest;
import com.app.KHMovie.payload.response.JwtResponse;
import com.app.KHMovie.payload.response.MessageResponse;
import com.app.KHMovie.repositories.RefreshTokenRepository;
import com.app.KHMovie.repositories.RoleRepository;
import com.app.KHMovie.repositories.UserRepository;
import com.app.KHMovie.services.AuthService;
import com.app.KHMovie.services.impl.users.UserDetailsImpl;
import com.app.KHMovie.shared.common.EMessage;
import com.app.KHMovie.shared.exceptions.ServiceException;
import com.app.KHMovie.shared.exceptions.TokenRefreshException;
import com.app.KHMovie.shared.interfaces.ERole;
import com.app.KHMovie.utils.JwtUtils;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class AuthServiceImpl implements AuthService {

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserRepository userRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    JwtUtils jwtUtils;

    @Value("")
    private Long refreshTokenDurationMs;

    @Autowired
    private RefreshTokenRepository refreshTokenRepository;

    @Override
    public JwtResponse login(LoginRequest loginRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities().stream()
                .map(item -> item.getAuthority())
                .collect(Collectors.toList());
        RefreshToken refreshToken = createRefreshToken(userDetails.getId());

        return new JwtResponse(jwt,refreshToken.getToken(),
                userDetails.getId(),
                userDetails.getUsername(),
                userDetails.getEmail(),
                roles);
    }

    @Override
    public void register(SignupRequest signupRequest) throws ServiceException {
        if (userRepository.existsByUsername(signupRequest.getUsername())) {
            throw new ServiceException(EMessage.USERNAME_INVALID.toString());
        }

        if (userRepository.existsByEmail(signupRequest.getEmail())) {
            throw new ServiceException(EMessage.USERNAME_INVALID.toString());
        }

        User user = new User(signupRequest.getUsername(),
                signupRequest.getEmail(),
                encoder.encode(signupRequest.getPassword()));
        Set<Role> roles = new HashSet<>();

        Role userRole = roleRepository.findByName(ERole.ROLE_USER)
                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
        roles.add(userRole);

        user.setRoles(roles);
        userRepository.save(user);
    }

    @Override
    public Optional<RefreshToken> findByToken(String token) {
        return refreshTokenRepository.findByToken(token);
    }

    @Override
    public RefreshToken createRefreshToken(Long userId) {
        RefreshToken refreshToken = new RefreshToken();

        refreshToken.setUser(userRepository.findById(userId).get());
        refreshToken.setExpiryDate(Instant.now().plusMillis(refreshTokenDurationMs));
        refreshToken.setToken(UUID.randomUUID().toString());

        refreshToken = refreshTokenRepository.save(refreshToken);
        return refreshToken;
    }

    @Override
    public RefreshToken verifyExpiration(RefreshToken token) {
        if (token.getExpiryDate().compareTo(Instant.now()) < 0) {
            refreshTokenRepository.delete(token);
            throw new TokenRefreshException(token.getToken(), "Refresh token was expired. Please make a new signin request");
        }

        return token;
    }

    @Transactional
    public int deleteByUserId(Long userId) {
        return refreshTokenRepository.deleteByUser(userRepository.findById(userId).get());
    }
}
