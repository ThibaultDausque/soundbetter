import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Login } from './login';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


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
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
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
    console.log(this.email);
    const formValue = this.userForm.value

    this.loginService.postLogin(formValue.email, formValue.password).subscribe(response => ({
      next: (response: any) => {
        alert('Login successful');
        this.router.navigate(['/home']);
      }

    }));
  }


}
