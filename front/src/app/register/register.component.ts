import { Component, OnInit } from '@angular/core';
import { Register } from './register';
import { RegisterService } from './register.service';
import { register } from 'node:module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})


export class RegisterComponent {
  email = '';
  pseudo = '';
  password = '';
  confirmPassword = '';


  register: Register[] = [];
  constructor(private registerService: RegisterService) { }

  onSubmit() {
    console.log(this.email, this.pseudo, this.password);
    this.registerService
        .addRegister({
          email: this.email,
          pseudo: this.pseudo,
          password: this.password,
          confirmPassword: this.confirmPassword
        })
        .subscribe(reg => this.register.push(reg))
  }

}
