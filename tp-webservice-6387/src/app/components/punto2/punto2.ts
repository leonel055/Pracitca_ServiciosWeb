import { Component } from '@angular/core';
import { Autos } from '../../services/autos';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-punto2',
  imports: [CommonModule],
  templateUrl: './punto2.html',
  styleUrl: './punto2.css',
})
export class Punto2 {

  marcas: any[] = [];
  modelos: any[] = [];
  constructor(private autosService: Autos) {
  }

  ngOnInit() {
    this.obtenerMarcas();
  }

  obtenerMarcas() {
    this.autosService.getMarcas().subscribe(
      (result: any) => {
        console.log(result);
        this.marcas = result.data;
      },
      (error: any) => {
        console.log(error);
      }
    )
  }

  obtenerModelos(marcaId: number) {
    this.autosService.getModelos(marcaId).subscribe(
      (result: any) => {
        this.modelos = result.data;
        console.log(this.modelos);

      },
      (error: any) => {
        console.log(error);
      }
    )
  }

}
