import { Component, Input } from '@angular/core';
import { TareaItemList } from '../models/tarea-item-list.model';


@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [],
  templateUrl: './tareas-pendientes.component.html',
  styleUrl: './tareas-pendientes.component.css'
})
export class TareasComponent {
 @Input()
  tareas!: TareaItemList;

  constructor(){}
}
