import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class Autos {
  constructor(private http: HttpClient) { }

  getMarcas(): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'car-api2.p.rapidapi.com',
        'X-RapidAPI-Key': '82a2b7179emsh55ba0042c14db75p102e85jsn3fe5df07b5c2'

      })
    };
    return this.http.get('https://car-api2.p.rapidapi.com/api/makes?direction=asc&sort=id', httpOptions);
  }

  getModelos(marcaId: number): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'car-api2.p.rapidapi.com',
        'X-RapidAPI-Key': '82a2b7179emsh55ba0042c14db75p102e85jsn3fe5df07b5c2'

      })
    };
    return this.http.get(`https://car-api2.p.rapidapi.com/api/models?make_id=${marcaId}&year=2020&direction=asc&sort=id`, httpOptions);
  }
}
