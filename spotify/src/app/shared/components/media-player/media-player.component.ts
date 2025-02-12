import { Component, OnDestroy, OnInit } from '@angular/core';
import { MultimediaService } from '../../services/multimedia.service';
import { TrackModel } from '@core/models/tracks.models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css'
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
  mockCover !: TrackModel;
  listObservers$: Array<Subscription> = []
  state:string = 'paused';
  
  constructor(public multimediaService: MultimediaService){}

  //primer ciclo de vida
  ngOnInit(): void {
    this.multimediaService.trackInfo$.subscribe(res => {
      this.mockCover = res
    })

    const observer1$ = this.multimediaService.playerStatus$
    .subscribe(status => this.state = status)

    this.listObservers$ = [observer1$];


  }

  //ultimo ciclo de vida del componente, se ejecuta antes de destruir el componente
  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe()); //elimina las subscripciones guardadas en la lista
    
  }
}
