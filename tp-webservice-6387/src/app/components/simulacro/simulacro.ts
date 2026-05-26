import { Component } from '@angular/core';
import { Carreras } from '../../services/carreras';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-simulacro',
  imports: [CommonModule, FormsModule],
  templateUrl: './simulacro.html',
  styleUrl: './simulacro.css',
})
export class Simulacro {
  year: number = 0;
  yearC: number = 0;
  constructor(private carrerasService: Carreras) {}
  carreras: any[] = [];
  conductores: any[] = [];
  constructores: any[] = [];

  obtenerCarreras(year: number) {
    this.carrerasService.getCarreras(year).subscribe(
      (result: any) => {
        this.carreras = result.results;
        console.log(this.carreras);
      },
      (error: any) => {
        console.log(error);
      }
    )
  }

  obtenerSesiones(id: number) {
    this.carrerasService.getSessions(id).subscribe(
      (result: any) => {
        this.conductores = result.results.drivers;
        console.log(this.conductores);
      },
      (error: any) => {
        console.log(error);
      }
    )
  }

  obtenerConstructor(yearC: number) {
    this.carrerasService.getConstructor(yearC).subscribe(
      (result: any) => {
        this.constructores = result.results;
        console.log(this.constructores);
      },
      (error: any) => {
        console.log(error);
      }
    )
  }
}