package com.app.KHMovie.controller;

import com.app.KHMovie.entity.User;
import com.app.KHMovie.repository.UserRepository;
import com.app.KHMovie.services.UserServices;
import com.zaxxer.hikari.HikariDataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UsersController {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	HikariDataSource dataSource;

	@GetMapping("/{id}")
	public User getUserById (@PathVariable Long id) {
		return userRepository.findById(id).get();
	}

	@PostMapping
	public User createUser(@RequestBody User user) {
		return userRepository.save(user);
	}

	@DeleteMapping("/{id}")
	public void deletePhone(@PathVariable Long id) {
		userRepository.deleteById(id);
	}
}
