import { Component } from '@angular/core';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css'
})
export class MediaPlayerComponent {
  mockCover: any = {
    cover: 'https://i.scdn.co/image/ab67616d0000b7345ca41b0d2352242c7c94bc',
    album: 'Gioli & Assia',
    name: 'BEBE (Oficial)'
  }

}