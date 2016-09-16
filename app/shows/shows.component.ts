import { Component, Input } from '@angular/core';
import { Response  } from '@angular/http';
import { SongsComponent } from '../songs/songs.component';
import { ShowsService } from '../shows.service';
// import 'rxjs/Rx';
declare const $:any;

@Component({
  selector: 'pick-shows',
  providers: [ShowsService],
  template: `

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

                    <!-- <div class="allShowsContainer"> -->
                    <div class="allSongsContainer">
                      <span class="showHeading" id="//"> {{ title }} </span>
                      <div class="allSongs" *ngFor="let set of setList" (click)="pickSong( set.songTitle, set.songFile, set.deeOne, set.directory, setList, setList.indexOf(set) )">
                        {{ set.songTitle }}
                      </div>
                    </div>

                        <a class="allShows" id="/" href="#//" (click)="pickShow( show.identifier, show.title )" *ngFor="let show of showList">
                          <!-- <a class="allShows" > -->
                            {{show.title}}
                          <!-- </a> -->
                        </a>

                    <!-- </div> -->


                        <!-- <pick-songs>  </pick-songs> -->
                        <!-- <hero-detail *ngFor="let hero of heroes" [hero]="hero"></hero-detail> -->


                        <!-- <pick-songs> </pick-songs> -->







                      <!-- <show-list [showList2]='shows'></show-list> -->


                    </div>

                      <!-- <div class="allSongsContainer"> -->
                      <!-- </div> -->


                    <footer>


                      <span class="player-song-title"><!-- {{ songSource.title }} --></span>
                      <audio controls autoplay="true" class="player" preload="auto"> <!-- [src]="songSource.source">  --> </audio>

                    </footer>


  `
  // directives: [SongsComponent]
  // inputs: ['setList']
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
      console.log(this.showList)

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
        console.log(setList)
        // bind top public setlist with one just made
        this.setList = setList;
        // return this.setList
      })
    }


  pickSong = ( title, file, d1, dir, songList, index ) => {
    const songSrc:any = {title: title, source: 'http://' + d1 + dir + '/' + file};
    console.log(index)


              $('.player-song-title').html(songSrc.title);          //actual changing of audio source
              $('.player').attr('src', songSrc.source);

                                            //=========== event listener for next song
              let audio = $('audio');
              let songCount = index;
              let len = songList.length - 1;

              audio[0].addEventListener('ended', function(e){
              songCount++;
            if(songCount >= len){
                $('.player-song-title').html(songList[0].songTitle);
                $('.player').attr('src', songList[0].source);
            } else{
              $('.player-song-title').html(songList[songCount].songTitle);
              $('.player').attr('src', songList[songCount].source);
            }
        });





    // document.getElementsByClassName('.player').attr

    // this.songSource = songSrc;
    // const inputElement = (<HTMLTextAreaElement><any>document.getElementsByClassName('player-song-title'));
    // inputElement.value = songSrc.title;

    // const inputElement2 = <HTMLAudioElement><any>document.getElementsByClassName('player')

    // inputElement2.attr('src', songList[index].songSource1)
  }


}
