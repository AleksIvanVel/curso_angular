import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TareaItemList } from '../models/tarea-item-list.model';


@Component({
  selector: 'app-tareas-pendientes',
  standalone: true,
  imports: [],
  templateUrl: './tareas-pendientes.component.html',
  styleUrl: './tareas-pendientes.component.css'
})
export class TareasComponent {
 @Input() tareas!: TareaItemList;
 @Output() clicked!: EventEmitter<TareaItemList>;

  constructor() {
    this.clicked = new EventEmitter();
  }
 
  priorizar(){
    this.clicked.emit(this.tareas);  
    return false;
  }

}
