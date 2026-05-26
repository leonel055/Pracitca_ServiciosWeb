import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Convertidor {
  constructor(private http: HttpClient) {}

  convertirTexto(texto: string): Observable<Blob> {
    const headers = new HttpHeaders({
      'X-RapidAPI-Host': 'open-ai-text-to-speech1.p.rapidapi.com',
      'X-RapidAPI-Key': '82a2b7179emsh55ba0042c14db75p102e85jsn3fe5df07b5c2',
    });

    return this.http.post(
      'https://open-ai-text-to-speech1.p.rapidapi.com/',
      {
        input: texto,
        language: 'es',
        model: 'tts-1',
        voice: 'alloy',
      },
      { headers, responseType: 'blob' }
    );
  }
}
