import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { newPlaylist } from './playlist';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor(private http: HttpClient, private loginService: LoginService) { }

  baseURL: string = "http://localhost:3000/";

  private handleError(error: HttpErrorResponse) {
      if(error.status === 0) {
          console.error('An error occured:', error.error);
      } else {
          console.error(`Backend returned code ${error.status}, body was: `, error.error);
      }

      return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  postPlaylist(playlistTitle: newPlaylist): Observable<newPlaylist> {
    const headers = new HttpHeaders ({
      'content-type': 'application/json',
      'Accept': 'application/json'
    }).set('Authorization', `Bearer ${this.loginService.getToken()}`);

    const body = JSON.stringify(playlistTitle);
    return this.http.post<newPlaylist>(this.baseURL + 'newPlaylist', body, {headers})
      .pipe(
        catchError(this.handleError)
      );


  }
}
