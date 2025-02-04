import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.models';
import * as dataRaw from '../../../data/tracks.json'

@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrl: './play-list-body.component.css'
})
export class PlayListBodyComponent implements OnInit {
  @Input() tracks: TrackModel[] = [];

  //inicializacion del filtro
  optionSort:{property: string|null, order: string} = {property: null, order: 'asc'}
  
  constructor(){}

  ngOnInit():void{
    const {data}: any = (dataRaw as any).default
    this.tracks = data
  }

  //funcion para ordenar el array por la propiedad que se le pasa 
  changeSort(property: string): void{
    const{order} = this.optionSort

    this.optionSort = {
      property,
      order: order === 'asc' ? 'desc': 'asc'
    }
  }

}
