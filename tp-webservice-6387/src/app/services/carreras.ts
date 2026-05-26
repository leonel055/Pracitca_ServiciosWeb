import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class Carreras {
  constructor(private http: HttpClient) {}

  getCarreras(year: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'f1-live-motorsport-data.p.rapidapi.com',
        'X-RapidAPI-Key': '82a2b7179emsh55ba0042c14db75p102e85jsn3fe5df07b5c2'
      })
    };
    return this.http.get('https://f1-live-motorsport-data.p.rapidapi.com/races/' + year, httpOptions);
  }


  getSessions(id: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'f1-live-motorsport-data.p.rapidapi.com',
        'X-RapidAPI-Key': '82a2b7179emsh55ba0042c14db75p102e85jsn3fe5df07b5c2'
      })
    };
    return this.http.get('https://f1-live-motorsport-data.p.rapidapi.com/session/' + id, httpOptions);
  }


  getConstructor(yearC: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'f1-live-motorsport-data.p.rapidapi.com',
        'X-RapidAPI-Key': '82a2b7179emsh55ba0042c14db75p102e85jsn3fe5df07b5c2'
      })
    };
    return this.http.get('https://f1-live-motorsport-data.p.rapidapi.com/constructors/standings/' + yearC, httpOptions);
  }
}

