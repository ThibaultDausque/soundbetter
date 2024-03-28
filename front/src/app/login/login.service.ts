import { Injectable } from '@angular/core';
import { User } from './login';
import { Observable } from 'rxjs';
import { HttpClient, HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';



@Injectable({
  providedIn: 'root'

})
export class LoginService {

  constructor(private http: HttpClient) { }
  url = "http://localhost:8080/user";
  getUser() {
    return this.http.get<User>(this.url);
  }
}





