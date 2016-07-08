import { Component } from '@angular/core';
import { ShowsComponent } from '../shows/shows.component';
import { ShowsService } from '../shows.service';

@Component({
  selector: 'show-pick',
  // providers: [ShowsService],
  // properties: ['setList'],
  template:
    `

    <div class="allSongs" *ngFor="let set of setList">

      <div>{{ set.songTitle }}</div>

    </div>

    `
})

export class ShowPick {
  constructor ( private showsService: ShowsService ){
    console.log(this.setList)
  }
  public setList
}




// (click)="pickSong( set.songTitle, set.songFile, set.deeOne, set.directory, setList, track )">
