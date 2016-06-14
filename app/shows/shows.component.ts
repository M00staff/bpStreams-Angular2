import { Component, Input, Output } from '@angular/core';
import { Response, JSONP_PROVIDERS, Jsonp } from '@angular/http';
import { showList } from '../showList/showList.component';
import { ShowsService } from '../shows.service';
// import 'rxjs/Rx';

@Component({
  selector: 'pick-shows',
  templateUrl: 'app/shows/shows.html',
  providers: [JSONP_PROVIDERS, ShowsService],
  // inputs: ['shows'],
  directives: [showList]
})

export class showsComponent {

  // constructor(private showsService: showsService) {}
  constructor (private showsService: ShowsService) {}

    public shows;

    pickYear = (year, row) => {
      this.shows = this.showsService.pickYear2(year, row)
   }


}
