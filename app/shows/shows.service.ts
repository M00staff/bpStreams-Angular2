//this does nothing

import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { showsComponent } from './shows.component';

@Injectable()
export class showsService {

  constructor (private http: Http) {}


  getShows(){
    return this.http.get('https://archive.org/advancedsearch.php?q=BrothersPast,%20year:2006&fl%5B%5D=year&fl%5B%5D=date&fl%5B%5D=identifier,title&sort%5B%5D=&sort%5B%5D=&sort%5B%5D=&rows=100&page=1&output=json&callback=JSON_CALLBACK')
  }

  // public showList

      // this.showList =
      // .map(this.showList => this.showList.json())

}
