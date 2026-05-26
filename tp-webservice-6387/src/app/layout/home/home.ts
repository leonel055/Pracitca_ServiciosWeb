import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  cards = [
    {
      title: 'Punto 1',
      description: 'Películas del top 100 de IMDb con póster, rating y género.',
      link: '/punto1',
      icon: '🎬',
      color: '#e74c3c',
    },
    {
      title: 'Punto 2',
      description: 'Marcas de autos y sus modelos en un modal interactivo.',
      link: '/punto2',
      icon: '🚗',
      color: '#3498db',
    },
    {
      title: 'Punto 3',
      description: 'Conversor de monedas en tiempo real entre divisas.',
      link: '/punto3',
      icon: '💱',
      color: '#2ecc71',
    },
    {
      title: 'Punto 4',
      description: 'Convierte texto a audio con text-to-speech.',
      link: '/punto4',
      icon: '🔊',
      color: '#9b59b6',
    },
    {
      title: 'Punto 5',
      description: 'Genera códigos QR a partir de cualquier texto o URL.',
      link: '/punto5',
      icon: '📱',
      color: '#f39c12',
    },
  ];
}
