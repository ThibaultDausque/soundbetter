import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "../login/login.service";

@Injectable({
    providedIn: 'root'
})
export class MusicService {
    constructor(private http: HttpClient, private loginService: LoginService) { }
    
    getMusic(): Observable<any> {
        const headers = new HttpHeaders().set('Authorization', `Bearer ${this.loginService.getToken()}`);
        return this.http.get(`http://localhost:3000/musics`, { headers });
    }

}
