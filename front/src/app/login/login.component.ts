import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Login } from './login';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit {
  userForm!: FormGroup;
  login!: Login;

  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder
  ) { }

    ngOnInit(): void {
      this.userForm = this.formBuilder.group({
        email: new FormControl("", [
          Validators.required,
          Validators.minLength(4),
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
        ])

      })
    }

    get email() {
      return this.userForm.get('email');
    }

  onSubmit() {
    console.log(this.email);
  }


  showConfig() {
    this.loginService.getUser()
    .subscribe(data => this.login = {
      email: data.email,
      password: data.password
    });
  }


}
