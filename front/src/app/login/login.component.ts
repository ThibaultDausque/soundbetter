import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Login } from './login';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login!: Login;
  constructor(private loginService: LoginService) { }


  showConfig() {
    this.loginService.getUser()
    .subscribe(data => this.login = {
      email: data.email,
      password: data.password
    });
  }

}
