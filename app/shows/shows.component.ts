import { Component, Input } from '@angular/core';
import { Response, JSONP_PROVIDERS  } from '@angular/http';
// import { ShowPick } from '../showPick/showPick.component';
import { ShowsService } from '../shows.service';
// import 'rxjs/Rx';

@Component({
  selector: 'pick-shows',
  templateUrl: 'app/shows/shows.html',
  providers: [JSONP_PROVIDERS, ShowsService],
  // directives: [ShowPick],
  inputs: ['setList']
})

export class ShowsComponent {

  // need this in the constructor to run service
  constructor (private showsService: ShowsService) { }

  // private means variable cannot be accessed outside of class
  public shows: any;
  public showList: Array<Object>;
  public show: any;
  public showFiles: any;
  public setList: Array<Object>;
  public songSource: Object;

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


  pickShow = ( id ) => {
    this.showsService.pickShow2( id )
    .subscribe((res: Response) => {
      this.show = res.json();
      // console.log(this.show)
      this.showFiles = this.show.files;

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
               if (a.track > b.track) {
                 return 1;
               }
               if (a.track < b.track) {
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
    const songSrc = {title: title, source: 'http://' + d1 + dir + '/' + file};
    console.log(songSrc)

    // this.songSource = songSrc;
    // const inputElement = (<HTMLTextAreaElement><any>document.getElementsByClassName('player-song-title'));
    // inputElement.value = songSrc.title;
    //
    // const inputElement2 = <HTMLAudioElement><any>document.getElementsByClassName('player')

    // inputElement2.attr('src', songList[index].songSource1)
  }


}
