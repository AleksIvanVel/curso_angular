import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-destino-viaje',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './destino-viaje.component.html',
  styleUrl: './destino-viaje.component.css'
})
export class DestinoViajeComponent {
  @Input() nombre: string = '';
  constructor(){
  }
}
