package com.app.KHMovie.services;

import com.app.KHMovie.dtos.users.CreateUserDto;
import com.app.KHMovie.entity.User;
import com.app.KHMovie.shared.exceptions.ServiceException;

import java.util.Optional;

public interface UserServices {
    Optional<User> createUser(CreateUserDto dto) throws ServiceException;
}
