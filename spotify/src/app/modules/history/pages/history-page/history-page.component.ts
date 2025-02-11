import { Component } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { TrackModel } from '@core/models/tracks.models';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrl: './history-page.component.css'
})
export class HistoryPageComponent {

  listResults: TrackModel[] = [];
  
  constructor(private serachService: SearchService){}
  //funcion para recibir y procesar los datos del componente hijo (search)
  reciveData(event:string): void{
    console.log('estoy en el padre', event);

    this.serachService.searchTrakcs$(event)
    .subscribe(({data} )=> {
      this.listResults = data;
    })
  }
}
