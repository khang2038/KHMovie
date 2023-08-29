package com.app.KHMovie.entity;

import com.app.KHMovie.shared.entities.BaseEntity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "users")
public class User extends BaseEntity {
	@Column(name = "name")
	private String name;

	@Column(name = "email")
	private String email;

	@Column(name = "password")
	private String password;

	@Column(name = "avatar")
	private String avatar;

	@Override
	public String toString() {
		return "User{" +
				"name='" + name + '\'' +
				", email='" + email + '\'' +
				'}';
	}
}
