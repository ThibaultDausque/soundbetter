import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { User } from './login';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user!: User;
  constructor(private loginService: LoginService) { }


  showConfig() {
    this.loginService.getUser()
    .subscribe(data => this.user = {
      email: data.email,
      password: data.password
    });
  }

}
