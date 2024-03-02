import { Component } from '@angular/core';
import { TareasComponent } from '../tareas-pendientes/tareas-pendientes.component';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TareaItemList } from '../models/tarea-item-list.model';

@Component({
  selector: 'app-lista-tareas',
  standalone: true,
  imports: [TareasComponent, NgFor, FormsModule],
  templateUrl: './lista-tareas.component.html',
  styleUrl: './lista-tareas.component.css'
})
export class ListaTareasComponent {
  tareaItems: TareaItemList[];
  tareaInput: string = '';
  constructor(){
    this.tareaItems = [];
  }

  guardarValor(tarea:string):boolean{
    this.tareaItems.push(new TareaItemList(tarea));
    console.log(this.tareaItems);
    return false;
  }
}
