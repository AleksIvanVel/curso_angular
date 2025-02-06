import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TracksService {
  dataTracksTrending$: Observable<TrackModel[]> =                //como buena practica se utiliza $

  constructor() { }
}
