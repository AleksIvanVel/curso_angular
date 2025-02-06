import { Component, OnInit } from '@angular/core';
import * as dataRaw from '../../../../data/tracks.json'
import { TrackModel } from '@core/models/tracks.models';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrl: './tracks-page.component.css'
})
export class TracksPageComponent implements OnInit {
  tracksTrending: Array<TrackModel> = []
  tracksRandom: Array<TrackModel> = []

  constructor(){}

  ngOnInit():void{
  }
}
