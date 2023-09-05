package com.app.KHMovie.controllers;

import com.app.KHMovie.entity.User;
import com.app.KHMovie.repositories.UserRepository;
import com.zaxxer.hikari.HikariDataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UsersController {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	HikariDataSource dataSource;

	@GetMapping("/{id}")
	@PreAuthorize("hasRole('ROLE_USER')")
	public User getUserById (@PathVariable Long id) {
		return userRepository.findById(id).get();
	}

	@DeleteMapping("/{id}")
	public void deletePhone(@PathVariable Long id) {
		userRepository.deleteById(id);
	}
}
