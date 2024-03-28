package com.example.soundbetter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.jdbc.core.JdbcTemplate;



public class postgreApp implements CommandLineRunner {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public static void main(String[] args) {
        SpringApplication.run(postgreApp.class, args);
    }


    @Override
    public void run(String...args) throws Exception {
        String sql = "INSERT INTRO users (email, password) VALUES ('toto@gmail.com', 'toto')";

        int rows = jdbcTemplate.update(sql);
        if(rows > 0) {
            System.out.println("new row inserted !");
        }


    }
    
}
