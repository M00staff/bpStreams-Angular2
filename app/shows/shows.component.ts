import { Component } from '@angular/core';
import { Http, Response, JSONP_PROVIDERS, Jsonp } from '@angular/http';
import { showsService } from './shows.service';
import 'rxjs/Rx';

@Component({
  selector: 'pick-shows',
  templateUrl: 'app/shows/shows.view.html',
  providers: [JSONP_PROVIDERS]
  // ,
  // providers:[showsService]
  // ,
  // providers: [HTTP_BINDINGS]
})

export class showsComponent {

  // constructor(private showsService: showsService) {}
  constructor (private jsonp: Jsonp) {}

  public shows;
  public year;
  public row;

      pickYear = (year, row) => {
      this.year = year;
      this.row = row;
      this.jsonp.request('https://archive.org/advancedsearch.php?q=BrothersPast,%20year:2006&fl%5B%5D='+ year +'&fl%5B%5D=date&fl%5B%5D=identifier,title&sort%5B%5D=&sort%5B%5D=&sort%5B%5D=&rows=' +row+ '&page=1&output=json&callback=JSONP_CALLBACK')
      .subscribe((res: Response) => {
                  this.shows = res.json();
                })
      console.log(this.shows)
      // .map((response) => {
      //   this.shows = response.json();
      // })
    //   .subscribe(result => {
    //   this.dataObserver.next(result);
    // }, error => console.log('Could not load artists'));
      // .map(res => {
      //     return res.json();
      // }).toPromise();
      // .toPromise()
      // .then
      // .map(response => response.json());
      // this.shows = Http.get('https://archive.org/advancedsearch.php?q=BrothersPast,%20year:' +this.year+ '&fl%5B%5D=year&fl%5B%5D=date&fl%5B%5D=identifier,title&sort%5B%5D=&sort%5B%5D=&sort%5B%5D=&rows=' +this.row+ '&page=1&output=json&callback=JSON_CALLBACK')
      // console.log(this.shows)
   }


}
