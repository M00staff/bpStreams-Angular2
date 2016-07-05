import { Component } from '@angular/core';
import { Response, JSONP_PROVIDERS  } from '@angular/http';
import { ShowList } from '../showList/showList.component';
import { ShowsService } from '../shows.service';
// import 'rxjs/Rx';

@Component({
  selector: 'pick-shows',
  templateUrl: 'app/shows/shows.html',
  providers: [JSONP_PROVIDERS, ShowsService],
  directives: [ShowList]
})

export class ShowsComponent {

  // need this in the constructor to run service
  constructor (private showsService: ShowsService) {}

  public shows;
  public showList;
  public show;
  public showFiles;
  // public setList;

  pickYear = (year, row) => {
    // run service with arguments
    this.showsService.pickYear2(year, row)
    // subscribe works like a promise here and executes one then then other
    .subscribe((res: Response) => {
      // subscribe also allows us to change observable to JSON
      this.shows = res.json();
      // grabs and attaches filtered data correct
      this.showList = this.shows.response.docs
    })
  }

  pickShow = ( id ) => {
    this.showsService.pickShow2( id )
    .subscribe((res: Response) => {
      this.show = res.json();
      this.showFiles = this.show;
console.log(this.show)

      const setList = []

      this.showFiles.forEach(function(val) {
        const fileName = val.files.name;
        const songName = val.files.title;
        const baseUrl = val.d1;
        const dir = val.dir;
console.log(val)
        const ext = fileName.substr(fileName.lastIndexOf('.') + 1);   //check file type - looks at everything after '.'
          if ((ext === 'ogg' || ext === 'mp3') && songName != undefined) {
             setList.push({songTitle: songName, songFile: fileName, deeOne: baseUrl, directory: dir, songSource1: 'http://' + baseUrl + dir + '/' + fileName});
           }
      })
console.log(setList)
    })
  }
}
