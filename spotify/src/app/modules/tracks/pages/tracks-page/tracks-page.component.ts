import { Component, OnInit } from '@angular/core';
import * as dataRaw from '../../../../data/tracks.json'
import { TrackModel } from '@core/models/tracks.models';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrl: './tracks-page.component.css'
})
export class TracksPageComponent implements OnInit {
  mockTracksList: Array<TrackModel> = []

  constructor(){}

  ngOnInit():void{
    const { data }: any = (dataRaw as any).default;

    //llena el mock con los atos de la API basado en el modelo TrackModel
    this.mockTracksList = data;
  }
}
