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

  mockCover: any={
    cover: 'image/url',
    album: 'album name',
    name: 'song name'
  }

  listObservers$: Array<Subscription> = []

  constructor(private _multimediaService: MultimediaService){}

  //primer ciclo de vida
  ngOnInit(): void {
      //recibe el objeto enviado desde el componente de card player
      const observer1$: Subscription = this._multimediaService.callback.subscribe((response: TrackModel) => {
        console.log('recibiendo Cancion...', response ) 
      }
    )

    this.listObservers$ = [observer1$] // guarda en una lista los observadores creados
  }

  //ultimo ciclo de vida del componente, se ejecuta antes de destruir el componente
  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe()); //elimina las subscripciones guardadas en la lista
    
  }
}
