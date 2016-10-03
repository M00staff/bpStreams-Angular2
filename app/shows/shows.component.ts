import { Component, Input } from '@angular/core';
import { Response  } from '@angular/http';
import { YearComponent } from '../year/year.component';
import { ShowsService } from '../shows.service';

@Component({
  selector: 'pick-shows',
  providers: [ShowsService],
  template:

  `
  <div class="allSongsContainer" id="//">
  <span class="showHeading"> {{ title }} </span>
  <pick-songs
  *ngFor="let set of setList"
  [set]="set"
  [setList]="setList">
  </pick-songs>
  </div>

  <a class="allShows" *ngFor="let show of showList" id="/" href="#//" (click)="pickShow( show.identifier, show.title )">
      {{show.title}}
  </a>

  `
})

export class ShowsComponent {
  constructor (private showsService: ShowsService) { }

  @Input() showList:any;
  @Input() public show: any;
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
