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
  username = '';
  password = '';
  confirmPassword = '';
  creationDate = new Date();



  register: Register[] = [];
  constructor(private registerService: RegisterService) { }



  onSubmit() {

    if(this.password != this.confirmPassword) {

      alert("don't match with your password !")

    } else {
      console.log(this.email, this.username, this.password, this.creationDate);
      this.registerService
          .addRegister({
            email: this.email,
            username: this.username,
            password: this.password,
            creationDate: this.creationDate,
          })
          .subscribe(reg => this.register.push(reg))
    }
  }

}
