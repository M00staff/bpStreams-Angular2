import { Component, Input } from '@angular/core';
import { Response  } from '@angular/http';
import { SongsComponent } from '../songs/songs.component';
import { ShowsService } from '../shows.service';
// import 'rxjs/Rx';

@Component({
  selector: 'pick-year',
  providers: [ShowsService],
  // directives depreceated, its now declarations in main module
  // directives: [SongsComponent]
  template:
  `

  <div class="column column-12">
    <div class="yearButtons">
      <p>Select Year</p>
        <a href="#/">
        <button (click)="pickYear(2001, 15)">2001</button>
        <button (click)="pickYear(2002, 26)">2002</button>
        <button (click)="pickYear(2003, 84)">2003</button>
        <button (click)="pickYear(2004, 96)">2004</button>
        <button (click)="pickYear(2005, 131)">2005</button>
        <button (click)="pickYear(2006, 84)">2006</button>
        <button (click)="pickYear(2007, 25)">2007</button>
        <button (click)="pickYear(2008, 4)">2008</button>
        <button (click)="pickYear(2009, 17)">2009</button>
        <button (click)="pickYear(2010, 20)">2010</button>
        <button (click)="pickYear(2011, 34)">2011</button>
        <button (click)="pickYear(2012, 14)">2012</button>
        <button (click)="pickYear(2013, 1)">2013</button>
      </a>
    </div>


    <pick-shows
      [show]="show"
      [showList]="showList">
    </pick-shows>

  </div>


  <footer>
    <span class="player-song-title"><!-- {{ songSource.title }} --></span>
    <audio controls autoplay="true" class="player" preload="auto"> <!-- [src]="songSource.source">  --> </audio>
  </footer>


  `
})

export class YearComponent {

  // need this in the constructor to run service
  constructor (private showsService: ShowsService) { }

  // private means variable cannot be accessed outside of class
  public shows: any;
  public showList: Array<Object>;

  pickYear = (year, row) => {
    // run service with arguments
    this.showsService.pickYear2(year, row)
    // subscribe works like a promise here and executes one then then other
    .subscribe((res: Response) => {
      // subscribe also allows us to change observable to JSON
      this.shows = res.json();
      // grabs and attaches filtered data correct
      this.showList = this.shows.response.docs
      // console.log(this.showList)
      // showList = this.showList
    })

  }

};
