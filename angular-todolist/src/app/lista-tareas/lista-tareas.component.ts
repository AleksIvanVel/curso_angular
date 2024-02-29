import { Component } from '@angular/core';
import { TareasComponent } from '../tareas/tareas.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-lista-tareas',
  standalone: true,
  imports: [TareasComponent, NgFor],
  templateUrl: './lista-tareas.component.html',
  styleUrl: './lista-tareas.component.css'
})
export class ListaTareasComponent {
  tareas: string[];
  constructor(){
    this.tareas = ['Tarea 1','Tarea 2','Tarea 3'];
  }
}
