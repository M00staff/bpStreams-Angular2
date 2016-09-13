import { Component, Input } from '@angular/core';
import { Response, JSONP_PROVIDERS  } from '@angular/http';
import { SongsComponent } from '../songs/songs.component';
import { ShowsService } from '../shows.service';
// import 'rxjs/Rx';
declare const $:any;

@Component({
  selector: 'pick-shows',
  templateUrl: 'app/shows/shows.html',
  providers: [JSONP_PROVIDERS, ShowsService],
  directives: [SongsComponent]
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


  pickSong = ( title, file, d1, dir, songList, track ) => {
    const songSrc:any = {title: title, track: track, source: 'http://' + d1 + dir + '/' + file};
    console.log(songSrc)


    $('.player-song-title').html(songSrc.title);          //actual changing of audio source
              $('.player').attr('src', songSrc.source);
    //
    //                                         //=========== event listener for next song
    //           var audio = $('audio');
    //           var songCount = index;
    //           var len = songList.length - 1;
    //           audio[0].addEventListener('ended', function(e){
    //           songCount++;
    //         if(songCount >= len){
    //             $('.player-song-title').html(songList[0].songTitle);
    //             $('.player').attr('src', songList[0].songSource1);
    //         } else{
    //           $('.player-song-title').html(songList[songCount].songTitle);
    //           $('.player').attr('src', songList[songCount].songSource1);
    //         }
    //     });





    // document.getElementsByClassName('.player').attr

    // this.songSource = songSrc;
    // const inputElement = (<HTMLTextAreaElement><any>document.getElementsByClassName('player-song-title'));
    // inputElement.value = songSrc.title;

    // const inputElement2 = <HTMLAudioElement><any>document.getElementsByClassName('player')

    // inputElement2.attr('src', songList[index].songSource1)
  }


}
