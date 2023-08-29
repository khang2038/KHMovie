package com.app.KHMovie.services.impl;

import com.app.KHMovie.dtos.users.CreateUserDto;
import com.app.KHMovie.entity.User;
import com.app.KHMovie.repository.UserRepository;
import com.app.KHMovie.services.UserServices;
import com.app.KHMovie.shared.exceptions.ServiceException;

import java.util.Optional;

import static com.app.KHMovie.converter.UserEntityConverter.toUserEntity;

public class UsersServiceImpl implements UserServices {
    private final UserRepository userRepository;

    public UsersServiceImpl(
            UserRepository userRepository

            ) {
        this.userRepository = userRepository;

    }
    @Override
    public Optional<User> createUser(CreateUserDto dto) throws ServiceException {
        User user = toUserEntity(dto);
        user = userRepository.save(user);
        return Optional.of(user);
    }
}
