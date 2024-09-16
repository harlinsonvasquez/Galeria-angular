import { Component, OnInit } from '@angular/core';
import { GaleriaService } from '.././services/galeria.service';
import { Imagen } from '.././models/imagen.model';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {
  favoritos: Imagen[] = [];

  constructor(private galeriaService: GaleriaService) {}

  ngOnInit() {
    this.favoritos = this.galeriaService.obtenerFavoritos();
  }
}