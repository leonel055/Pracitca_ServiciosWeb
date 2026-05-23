import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class Peliculas {

  constructor(private http: HttpClient) { }

  getPeliculas(): Observable<any> {
    
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com',
        'X-RapidAPI-Key': '82a2b7179emsh55ba0042c14db75p102e85jsn3fe5df07b5c2'

      })
    };
    return this.http.get('https://imdb-top-100-movies.p.rapidapi.com/', httpOptions);
  }

}
