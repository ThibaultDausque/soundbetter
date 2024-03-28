package com.example.soundbetter.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.stereotype.Repository;

import com.example.soundbetter.entities.Users;

@NoRepositoryBean
@Repository
public interface UserRepository extends JpaRepository<Users, Long> {

    @SuppressWarnings("unchecked")
    Users save(Users user);

    Optional<Users> findById(Long id);

    long count();
}
