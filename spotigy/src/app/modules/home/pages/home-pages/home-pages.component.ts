import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SahredModule } from '@shared/sahred.module';


@Component({
  selector: 'app-home-pages',
  standalone: true,
  imports: [
    SahredModule,
    RouterOutlet
  ],
  templateUrl: './home-pages.component.html',
  styleUrl: './home-pages.component.css'
})
export class HomePagesComponent {

}
