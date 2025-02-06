import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.models';
import { Observable, of } from 'rxjs';
import * as dataRaw from '../../../data/tracks.json';
@Injectable({
  providedIn: 'root'
})
export class TracksService {
  //forma 1 de declarar observables
  dataTracksTrending$: Observable<TrackModel[]> = of([]) //como buena practica se utiliza $
  dataTracksRandom$: Observable<TrackModel[]> = of()

  constructor() { 
    const {data}:any = (dataRaw as any).default;
    
    //los observables requieren de una subscripcion para poder verse 
    this.dataTracksTrending$ = of(data);
    this.dataTracksRandom$ = of(data);
  }
}
