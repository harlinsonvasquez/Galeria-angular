import { Component, Input } from '@angular/core';
import { Imagen } from '.././models/imagen.model';

@Component({
  selector: 'app-imagen-detalle',
  templateUrl: './imagen-detalle.component.html',
  styleUrls: ['./imagen-detalle.component.css']
})
export class ImagenDetalleComponent {
  @Input() imagen: Imagen | null = null;
}