import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Monedas } from '../../services/monedas';

@Component({
  selector: 'app-punto3',
  imports: [CommonModule, FormsModule],
  templateUrl: './punto3.html',
  styleUrl: './punto3.css',
})
export class Punto3 {
  monedas: any[] = [];
  from = 'USD';
  to = 'ARS';
  monto = 1;
  resultado: number | null = null;

  constructor(private monedasService: Monedas) {}

  ngOnInit() {
    this.obtenerMonedas();
  }

  obtenerMonedas() {
    this.monedasService.getMonedas().subscribe((result: any) => {
      this.monedas = Object.entries(result.symbols).map(([codigo, nombre]) => ({
        codigo,
        nombre,
      }));
    });
  }

  convertir() {
    this.monedasService.getConversion(this.from, this.to, this.monto).subscribe((result: any) => {
      this.resultado = result.result;
    });
  }
}
