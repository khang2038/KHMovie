package com.app.KHMovie.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.KHMovie.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
}
