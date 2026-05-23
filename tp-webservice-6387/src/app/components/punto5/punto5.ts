import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CodigoQR } from '../../services/codigo-qr';

@Component({
  selector: 'app-punto5',
  imports: [CommonModule, FormsModule],
  templateUrl: './punto5.html',
  styleUrl: './punto5.css',
})
export class Punto5 {
  texto = '';
  qrBase64 = '';

  constructor(private codigoQR: CodigoQR) {}

  generarQR() {
    this.codigoQR.generarQR(this.texto).subscribe((base64) => {
      this.qrBase64 = base64;
    });
  }
}
