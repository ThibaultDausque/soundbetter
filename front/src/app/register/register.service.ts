import { HttpClient, HttpErrorResponse, HttpHeaderResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Register } from "./register";
import { response } from "express";
import { Observable, map, throwError } from "rxjs";
import { catchError } from 'rxjs/operators';
import { urlToHttpOptions } from "url";
import { error } from "console";
import { register } from "module";
import { Token } from "@angular/compiler";


@Injectable({
    providedIn: 'root'
})
export class RegisterService {

    constructor(private http: HttpClient) { }

    baseURL: string = "http://localhost:3000/";

    private handleError(error: HttpErrorResponse) {
        if(error.status === 0) {
            console.error('An error occured:', error.error);
        } else {
            console.error(`Backend returned code ${error.status}, body was: `, error.error);
        }

        return throwError(() => new Error('Something bad happened; please try again later.'));
    }


    addRegister(register: Register): Observable<Register> {
        const headers = new HttpHeaders ({ 
            'content-type': 'application/json',
            'Accept': 'application/json',
        });
        
        const body = JSON.stringify(register);
        console.log(body);
        return this.http.post<Register>(this.baseURL + 'register', body, {'headers': headers})
            .pipe(
                catchError(this.handleError)
            );
    }

}