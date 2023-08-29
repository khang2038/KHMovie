package com.app.KHMovie.converter;

import com.app.KHMovie.dtos.users.CreateUserDto;
import com.app.KHMovie.entity.User;

public class UserEntityConverter {
    public static User toUserEntity(CreateUserDto dto) {
        User user = new User();
        user.setEmail(dto.getEmail());

        return user;
    }
}
