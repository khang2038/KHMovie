package com.app.KHMovie.repositories;

import com.app.KHMovie.entity.Role;
import com.app.KHMovie.shared.interfaces.ERole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}