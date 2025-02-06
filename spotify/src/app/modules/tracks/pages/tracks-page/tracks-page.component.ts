import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.models';
import { TracksService } from '../../services/tracks.service';
import { Subscription, UnsubscriptionError } from 'rxjs';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrl: './tracks-page.component.css'
})
export class TracksPageComponent implements OnInit {
  tracksTrending: Array<TrackModel> = [];
  tracksRandom: Array<TrackModel> = [];

  listObservers$: Array<Subscription> = [];

  constructor(private _tracksService: TracksService){}

  ngOnInit():void{



    this._tracksService.getAllRandom$()
    .subscribe((response: TrackModel[]) =>{
      this.tracksRandom = response
    })

  }

  loadDataAll(): void{
    this._tracksService.getAllTracks$()
    .subscribe((response: TrackModel[]) =>{
      this.tracksTrending = response
    }, err =>{
      alert('error de conexion a la API')
    })
  }
}
