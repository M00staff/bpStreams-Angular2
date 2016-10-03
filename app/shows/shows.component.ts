import { Component, Input } from '@angular/core';
import { Response  } from '@angular/http';
import { SongsComponent } from '../songs/songs.component';
import { ShowsService } from '../shows.service';
// import 'rxjs/Rx';

@Component({
  selector: 'pick-shows',
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

<div class="allSongsContainer">
  <pick-songs
    *ngFor="let set of setList"
    [set]="set"
    [setList]="setList">
  </pick-songs>
</div>


      <a class="allShows" id="/" href="#//" (click)="pickShow( show.identifier, show.title )" *ngFor="let show of showList">
          {{show.title}}
      </a>


  </div>


  <footer>
    <span class="player-song-title"><!-- {{ songSource.title }} --></span>
    <audio controls autoplay="true" class="player" preload="auto"> <!-- [src]="songSource.source">  --> </audio>
  </footer>


  `
})

export class ShowsComponent {

  // need this in the constructor to run service
  constructor (private showsService: ShowsService) { }

  // private means variable cannot be accessed outside of class
  public shows: any;
  public showList: Array<Object>;


  // @Input() set = this.setList

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

    })

  }


  public show: any;
  public showFiles: any;
  public setList: Array<Object>;
  public songSource: Object;
  public title: string;
  public isSBD: string;

    pickShow = ( id, title ) => {
      this.showsService.pickShow2( id )
      .subscribe((res: Response) => {
        this.show = res.json();
        // console.log(this.show)
        this.showFiles = this.show.files;
        this.title = this.show.metadata.title;
        // this.isSBD = this.show.metadata.subject
        // console.log(this.isSBD)

        // baseUrl and dir are a level above name and title in the ng2 version of object
        let setList = [];
        const baseUrl = this.show.d1
        const dir = this.show.dir

        // iterate through the array of objects and grab the file names and song titles
        // Typescript iterator
        for (let val of this.showFiles) {
        // this.showFiles.forEach((val) => {
          // console.log(val)
          const fileName = val.name;
          const songName = val.title;
          const track = val.track;

          // check file type - looks at everything after '.'
          const ext = fileName.substr(fileName.lastIndexOf('.') + 1);
            if ((ext === 'ogg' || ext === 'mp3') && songName != undefined) {
               setList.push({songTitle: songName, track: track, songFile: fileName, deeOne: baseUrl, directory: dir, songSource1: 'http://' + baseUrl + dir + '/' + fileName});

               // sort playlist
               setList.sort((a, b) => {
                 if (a.songFile > b.songFile) {
                   return 1;
                 }
                 if (a.songFile < b.songFile) {
                   return -1;
                 }
                 return 0;
               })

            }
        }
      // )
        // console.log(setList)
        // bind top public setlist with one just made
        this.setList = setList;
        // return this.setList
      })
    }





}
