import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor(private http: HttpClient, private loginService: LoginService) { }

  getPlaylist(): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.loginService.getToken()}`);
    return this.http.get(`http://localhost:3000/playlists`, { headers });
  }
}
