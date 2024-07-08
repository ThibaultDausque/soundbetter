import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { LoginService } from "../../login/login.service";
import { Observable, catchError, tap, throwError } from "rxjs";
import { Injectable } from "@angular/core";
import { newPlaylist } from "../../new-playlist/playlist";

@Injectable({
    providedIn: 'root'
})
export class UpdateService {
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

    updatePlaylist(oldPlaylistTitle: string, newPlaylistTitle: string): Observable<newPlaylist> {
        const headers = new HttpHeaders({
            'content-type': 'application/json',
        }).set('Authorization', `Bearer ${this.loginService.getToken()}`);

        const encodedTitle = encodeURIComponent(oldPlaylistTitle);
        const url = 'http://localhost:3000/updatePlaylist/' + encodedTitle;
        console.log(url);
        return this.http.put<newPlaylist>(url, { newPlaylistTitle }, { headers })
            .pipe(
                tap(() => console.log(`Sent request to update playlist: ${oldPlaylistTitle}`)),
                catchError(this.handleError)
            );
    }
}