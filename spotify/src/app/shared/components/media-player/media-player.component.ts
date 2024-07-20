import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.models';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {

  mockCover: TrackModel = {
    cover: 'https://i.pinimg.com/originals/26/5e/82/265e82d7f7c0fb164492a58ac0cb1110.jpg',
    album: 'Charles Ans ',
    name:'Loca (Oficial)', 
    url: 'http://localhost/tracks.mp3',
    _id: 1
  } 
  constructor() { }

  ngOnInit(): void {
  }

}
