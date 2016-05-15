import { Component } from '@angular/core';
import { Response, JSONP_PROVIDERS, Jsonp, Http } from '@angular/http';
import { showsService } from './shows.service';
import 'rxjs/Rx';

@Component({
  selector: 'pick-shows',
  templateUrl: 'app/shows/shows.view.html',
  providers: [JSONP_PROVIDERS]
  // ,
  // providers:[showsService]
})

export class showsComponent {

  // constructor(private showsService: showsService) {}
  constructor (private jsonp: Jsonp) {}

    public shows;
    public year;
    public row;
    public showList;

      pickYear = (year, row) => {
      this.year = year;
      this.row = row;
      this.showList = this.jsonp.request('https://archive.org/advancedsearch.php?q=BrothersPast,%20year:'+ year +'&fl%5B%5D=year&fl%5B%5D=date&fl%5B%5D=identifier,title&sort%5B%5D=&sort%5B%5D=&sort%5B%5D=&rows='+ row +'&page=1&output=json&callback=JSONP_CALLBACK')
      .subscribe((res: Response) => {
                  this.shows = res.json();
                  console.log(this.shows)
                })
      // console.log(this.showList)

   }


}
