import { Component, Input } from '@angular/core';
import { Response, JSONP_PROVIDERS, Jsonp } from '@angular/http';
import { showList } from '../showList/showList.component';

// import { showsService } from './shows.service';
// import 'rxjs/Rx';

@Component({
  selector: 'pick-shows',
  templateUrl: 'app/shows/shows.view.html',
  providers: [JSONP_PROVIDERS],
  outputs: ['shows'],
  directives: [showList]
  // ,
  // providers:[showsService]
})

export class showsComponent {

  // constructor(private showsService: showsService) {}
  constructor (private jsonp: Jsonp) {}

    public shows;

    pickYear = (year, row) => {
      this.jsonp.request('https://archive.org/advancedsearch.php?q=BrothersPast,%20year:'+ year +'&fl%5B%5D=year&fl%5B%5D=date&fl%5B%5D=identifier,title&sort%5B%5D=&sort%5B%5D=&sort%5B%5D=&rows='+ row +'&page=1&output=json&callback=JSONP_CALLBACK')
      .subscribe((res: Response) => {
                  this.shows = res.json();
                  console.log(this.shows);
                })
   }


}
