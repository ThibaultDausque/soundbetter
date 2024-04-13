import { Component, OnInit } from '@angular/core';
import { Register } from './register';
import { RegisterService } from './register.service';
import { register } from 'node:module';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { Validator } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent implements OnInit {
  form!: FormGroup;

  creationDate = new Date();
  success = false;
  errMessage = '';

  register: Register[] = [];
  constructor(
    private registerService: RegisterService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: new FormControl("", [
        Validators.required,
        Validators.minLength(4),
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
      ]),
      username: "",
      password: "",
      confirmPassword: "",
      Date: new Date()
    })
  }

  get email() {
    return this.form.get('email');
  }

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }

  onSubmit() {
    if(this.form.valid) {

      this.registerService.addRegister(this.form.value).subscribe(response => {
        console.log(response);
      })

    } else {
      alert("Invalid form")
    }
  }

}
