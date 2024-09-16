import { Component, OnInit } from '@angular/core';
import { GaleriaService } from '../services/galeria.service';
import { Imagen } from '../models/imagen.model';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {
  imagenes: Imagen[] = [];
  categorias: string[] = [];
  categoriaSeleccionada: string = '';

  constructor(private galeriaService: GaleriaService) { }

  ngOnInit(): void {
    this.imagenes = this.galeriaService.obtenerImagenes();
    this.categorias = this.galeriaService.obtenerCategorias();
  }

  filtrarPorCategoria(categoria: string): void {
    this.categoriaSeleccionada = categoria;
    this.imagenes = this.galeriaService.filtrarPorCategoria(categoria);
  }

  toggleFavorito(imagen: Imagen): void {
    this.galeriaService.toggleFavorito(imagen);
    console.log('Estado de favorito cambiado para:', imagen.titulo);
  }

  obtenerFavoritos(): Imagen[] {
    return this.galeriaService.obtenerFavoritos();
  }
}