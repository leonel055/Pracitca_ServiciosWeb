import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Convertidor } from '../../services/convertidor';

@Component({
  selector: 'app-punto4',
  imports: [CommonModule, FormsModule],
  templateUrl: './punto4.html',
  styleUrl: './punto4.css',
})
export class Punto4 {
  texto = 'Hola Mundo';
  audioUrl = '';

  constructor(private convertidor: Convertidor) {}

  generarAudio() {
    this.convertidor.convertirTexto(this.texto).subscribe((audio) => {
      if (this.audioUrl) {
        URL.revokeObjectURL(this.audioUrl);
      }
      this.audioUrl = URL.createObjectURL(audio);
    });
  }
}
