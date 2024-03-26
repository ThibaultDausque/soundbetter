package com.example.soundbetter.Dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class CreateUser {
    @NotBlank
    @Size(max = 50)
    private String mail;

    @NotBlank
    @Size(max =50)
    private String password;



    public CreateUser() { 
    }

    public String getUserMail() {
        return mail;
    }

    public void setUserMail(String user) {
        this.mail = mail;
    }

    public String getUserPassword() {
        return password;
    }

    public void setUserPassword(String password) {
        this.password = password;
    }

}
