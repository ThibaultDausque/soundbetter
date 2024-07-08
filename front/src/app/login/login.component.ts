import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Login } from './login';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { error } from 'console';


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
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      email: new FormControl("", [
        Validators.required,
        Validators.minLength(4),
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
      ]),
      password: new FormControl(""),
    })
  }

  get email() {
    return this.userForm.get('email');
  }

  get password() {
    return this.userForm.get('password');

  }

  onSubmit() {
    const formValue = this.userForm.value

    this.loginService.postLogin(formValue.email, formValue.password).subscribe({
      next: () => {
        this.router.navigate(['/home']);
      },
      error: () => {
        alert('login problem');
      }

    });
  }


}
