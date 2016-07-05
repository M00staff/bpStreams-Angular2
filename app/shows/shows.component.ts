import { Component, Input, Output } from '@angular/core';
import { Response, JSONP_PROVIDERS, Jsonp } from '@angular/http';
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

  constructor (private showsService: ShowsService) {}

    public shows;
    public showList;

    pickYear = (year, row) => {
      // this.shows =
      this.showsService.pickYear2(year, row)
      .subscribe((res: Response) => {
        this.shows = res.json();
        this.showList = this.shows.response.docs
      })
      // console.log(this.shows)
      // .subscribe((res: Response) => {
        // console.log(res.response.docs)
      // this.showList = this.showsService.shows3;
    // })
      // this.shows = this.showsService.shows2.response.docs;
      // .subscribe(res => this.showList = res);
      // console.log(this.showList)
   }


}
