import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CodigoQR {
  constructor(private http: HttpClient) {}

  generarQR(texto: string): Observable<string> {
    const url =
      'https://api.qrserver.com/v1/create-qr-code/?' +
      `data=${encodeURIComponent(texto)}&size=250x250&format=png&charset-source=UTF-8`;

    return this.http.get(url, { responseType: 'blob' }).pipe(
      switchMap((blob) => from(this.blobABase64(blob)))
    );
  }

  private blobABase64(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(blob);
    });
  }
}
