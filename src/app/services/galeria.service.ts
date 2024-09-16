import { Injectable } from '@angular/core';
import { Imagen } from '../models/imagen.model';

@Injectable({
  providedIn: 'root'
})
export class GaleriaService {
  private imagenes: Imagen[] = [
    {
      id: 1,
      titulo: 'Paisaje montañoso',
      descripcion: 'Hermosa vista de montañas nevadas',
      descripcionLarga: 'Un impresionante paisaje de montañas cubiertas de nieve, con un cielo azul claro de fondo.',
      url: 'assets/img/montana.jpg',
      categoria: 'Naturaleza',
      fecha: new Date('2023-01-15'),
      esFavorito: false
    },
    {
      id: 2,
      titulo: 'Playa tropical',
      descripcion: 'Paraíso de arena blanca y aguas cristalinas',
      descripcionLarga: 'Una playa de ensueño con arena blanca, aguas turquesas y palmeras mecidas por la brisa.',
      url: 'assets/img/playa.jpg',
      categoria: 'Playa',
      fecha: new Date('2023-02-20'),
      esFavorito: false
    },
    {
      id: 3,
      titulo: 'Ciudad nocturna',
      descripcion: 'Luces brillantes de la gran ciudad',
      descripcionLarga: 'Vista panorámica de una ciudad moderna iluminada por la noche, con rascacielos y tráfico.',
      url: 'assets/img/ciudad.jpg',
      categoria: 'Playa',
      fecha: new Date('2023-03-10'),
      esFavorito: false
    },
    // Puedes agregar más imágenes siguiendo este patrón
  ];

  obtenerImagenes(): Imagen[] {
    return this.imagenes;
  }

  obtenerCategorias(): string[] {
    return [...new Set(this.imagenes.map(img => img.categoria))];
  }

  filtrarPorCategoria(categoria: string): Imagen[] {
    if (!categoria) return this.imagenes;
    return this.imagenes.filter(img => img.categoria === categoria);
  }

  toggleFavorito(imagen: Imagen) {
    imagen.esFavorito = !imagen.esFavorito;
  }

  obtenerFavoritos(): Imagen[] {
    return this.imagenes.filter(img => img.esFavorito);
  }
}