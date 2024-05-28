import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginService } from "../../login/login.service";
import { newPlaylist } from "../../new-playlist/playlist";
import { Observable, catchError, tap, throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class DeleteService {
    constructor(private http: HttpClient, private loginService: LoginService) {}

    baseURL: string = "http://localhost:3000/";

    private handleError(error: HttpErrorResponse) {
        if(error.status === 0) {
            console.error('An error occured:', error.error);
        } else {
            console.error(`Backend returned code ${error.status}, body was: `, error.error);
        }
  
        return throwError(() => new Error('Something bad happened; please try again later.'));
    }


    deletePlaylist(playlistTitle: string): Observable<newPlaylist> {
        const headers = new HttpHeaders({
            'content-type': 'application/json',
        }).set('Authorization', `Bearer ${this.loginService.getToken()}`);
        const encodedTitle = encodeURIComponent(playlistTitle);
        const url = 'http://localhost:3000/deletePlaylist/' + encodedTitle;
        console.log(url); 
        return this.http.delete<newPlaylist>(this.baseURL + `deletePlaylist/${encodedTitle}`, { headers })
            .pipe(
                tap(() => console.log(`Sent request to delete playlist: ${playlistTitle}`)),
                catchError(this.handleError)
            );
    }
}