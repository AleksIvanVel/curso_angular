import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit {
  mockTracksList =[
    {
      name: 'Loca (oficial)'
    },
    {
      name: 'Dealer (oficial)'
    },
    {
      name: 'No son efectos especiales (oficial)'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
