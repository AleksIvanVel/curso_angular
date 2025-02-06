import { Component, OnDestroy, OnInit } from '@angular/core';
import * as dataRaw from '../../../../data/tracks.json'
import { TrackModel } from '@core/models/tracks.models';
import { TracksService } from '../../services/tracks.service';
import { Subscription, UnsubscriptionError } from 'rxjs';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrl: './tracks-page.component.css'
})
export class TracksPageComponent implements OnInit, OnDestroy {
  tracksTrending: Array<TrackModel> = [];
  tracksRandom: Array<TrackModel> = [];

  listObservers$: Array<Subscription> = [];

  constructor(private _tracksService: TracksService){}

  ngOnInit():void{

    // los objetos observables necesitan un .subscribe para poder verse
    const observer1$ = this._tracksService.dataTracksTrending$
    .subscribe(response =>{
      this.tracksTrending = response
      //console.log('canciones trending --->', response)
    })

    const observer2$ = this._tracksService.dataTracksRandom$
    .subscribe(response =>{
      this.tracksRandom = response
    })

    this.listObservers$ = [observer1$, observer2$];
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe())
  }
}
