package com.example.soundbetter.services;

import java.util.List;

import org.apache.coyote.BadRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.soundbetter.entities.Users;
import com.example.soundbetter.repositories.UserRepository;

import jakarta.validation.Valid;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    
    public long createUser(@Valid Users inputs) throws BadRequestException {
        Users user = new Users();
        user.setEmail(user.getEmail());
        user.setPassword(user.getPassword());

        userRepository.save(user);
        System.out.println("User sent !");
        return 0;
    }


    public List<Users> getAllUsers() {
        return userRepository.findAll();
    }

    public boolean getUserCount() {
        if(userRepository.count() > 0) {
            return false;
        }
        return true;
    }

    public Users saveUser(Users user) {
        Users savedUser = userRepository.save(user);
        System.out.println("user saved !");
        return savedUser;
    }
}
