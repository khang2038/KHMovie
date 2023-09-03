package com.app.KHMovie.payload.dtos.auths;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Getter
@Setter
public class LoginRequest {
    @NotBlank()
    @Size(max = 20)
    private String username;

    @NotBlank
    @Size(max = 120)
    private String password;
}
