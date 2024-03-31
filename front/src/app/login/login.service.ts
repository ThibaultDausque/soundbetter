import { Injectable } from '@angular/core';
import { Login } from './login';
import { Observable } from 'rxjs';
import { HttpClient, HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';



@Injectable({
  providedIn: 'root'

})
export class LoginService {

  constructor(private http: HttpClient) { }
  url = "http://localhost:3000/login";
  getUser() {
    return this.http.get<Login>(this.url);
  }
}





