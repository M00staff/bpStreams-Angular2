import { Component } from '@angular/core';
import { ShowsComponent } from '../shows/shows.component';
import { ShowsService } from '../shows.service';

@Component({
  selector: 'show-list',
  templateUrl: 'app/showList/showList.html',

})


export class showList {
//
  constructor(private showsService: ShowsService){}

  public showList

  randomButton = () => {
    this.showList = this.showsService.shows2.response.docs;
    console.log(this.showsService.shows2)
  }
}
