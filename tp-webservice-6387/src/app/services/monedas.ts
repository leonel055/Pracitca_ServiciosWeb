import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class Monedas {
  constructor(private http: HttpClient) { }

  getMonedas(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com',
        'X-RapidAPI-Key': '82a2b7179emsh55ba0042c14db75p102e85jsn3fe5df07b5c2'
      })
    };
    return this.http.get('https://currency-conversion-and-exchange-rates.p.rapidapi.com/symbols', httpOptions);
  }

  getConversion(from: string, to: string, amount: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com',
        'X-RapidAPI-Key': '82a2b7179emsh55ba0042c14db75p102e85jsn3fe5df07b5c2'
      })
    };
    return this.http.get(`https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert?from=${from}&to=${to}&amount=${amount}`, httpOptions);
  }
}
