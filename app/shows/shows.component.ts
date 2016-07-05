import { Component, Input, Output } from '@angular/core';
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

  pickYear = (year, row) => {
    // run service with arguments
    this.showsService.pickYear2(year, row)
    // subscribe works like a promise here and executes one then then other
    .subscribe((res: Response) => {
      // changes observable to JSON
      this.shows = res.json();
      // grabs and attaches filtered data correct
      this.showList = this.shows.response.docs
    })
  }
}
