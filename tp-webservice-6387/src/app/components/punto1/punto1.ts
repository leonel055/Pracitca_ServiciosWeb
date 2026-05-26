import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Peliculas } from '../../services/peliculas';

@Component({
  selector: 'app-punto1',
  imports: [CommonModule],
  templateUrl: './punto1.html',
  styleUrl: './punto1.css',
})
export class Punto1 {
  peliculas: any[] = [];

  constructor(private peliculasService: Peliculas) { }


  ngOnInit() {
    this.obtenerPeliculas();
  }

  obtenerPeliculas() {
    this.peliculasService.getPeliculas().subscribe(
      (result: any) => {
        this.peliculas = result.slice(0, 10);
      },
      (error: any) => {
        console.log(error);
      }
    )
  }
}
