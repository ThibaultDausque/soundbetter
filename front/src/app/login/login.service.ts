import { Injectable } from '@angular/core';
import { Login } from './login';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { HttpClient, HttpContext, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'

})
export class LoginService {
  url = "http://localhost:3000/auth/login";

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }


  private handleError(error: HttpErrorResponse) {
    if(error.status === 0) {
        console.error('An error occured:', error.error);
    } else {
        console.error(`Backend returned code ${error.status}, body was: `, error.error);
    }

    return throwError(() => new Error('Something bad happened; please try again later.'));
  }


  postLogin(email: string, password: string) {
    const headers = new HttpHeaders ({ 
      'content-type': 'application/json',
    });
    const response = this.http.post<Login>(this.url, JSON.stringify({ email, password }), {'headers': headers, withCredentials: true}).pipe(
      catchError(this.handleError),
      tap(response => {
        if (response && response.token) {
          localStorage.setItem('token', response.token)
        }
      })
    );
    console.log(response);
    return response;
  }

  logout() {
    localStorage?.removeItem('token');
  }

  getToken(): string | null {
    return localStorage?.getItem('token');
  }

  public isLoggedIn(): boolean {
    let token = localStorage?.getItem('token');
    return token != null && token.length > 0;
  }
}





