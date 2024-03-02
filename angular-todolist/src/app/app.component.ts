import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TareasComponent } from './tareas-pendientes/tareas-pendientes.component';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TareasComponent, ListaTareasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-todolist';
}
