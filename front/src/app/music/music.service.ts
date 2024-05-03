import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class MusicService {
    constructor(private http: HttpClient) { }
    
    getMusic(): Observable<any> {
        return this.http.get(`http://localhost:3000/musics`, { headers: { Accept: 'application/json' } });
    }

}
