import { Component } from '@angular/core';
import { SahredModule } from '@shared/sahred.module';

@Component({
  selector: 'app-tracks-page',
  standalone: true,
  imports: [
    SahredModule
  ],
  templateUrl: './tracks-page.component.html',
  styleUrl: './tracks-page.component.css'
})
export class TracksPageComponent {

}
