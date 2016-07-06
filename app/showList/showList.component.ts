import { Component, Input } from '@angular/core';
import { ShowsComponent } from '../shows/shows.component';
import { ShowsService } from '../shows.service';
import { ShowPick } from '../showPick/showPick.component'

@Component({
  selector: 'show-list',
  templateUrl: 'app/showList/showList.html',
  directives: [ShowPick]
})


export class ShowList {

  constructor(private showsService: ShowsService){}

  // @Input() showList2;
  public showList


  randomButton = () => {
    // console.log(this.showList + ' did it work?')
    // this.showList = this.showsService.shows2.response.docs;
    // console.log(this.showsService.shows2.response.docs)
  }
}
