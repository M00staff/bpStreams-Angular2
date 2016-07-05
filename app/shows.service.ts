import { Injectable } from '@angular/core';
import { JSONP_PROVIDERS, Jsonp } from '@angular/http';


@Injectable()
export class ShowsService {

  constructor (private jsonp: Jsonp) {  }

  // public shows2;
  // public shows3;

  pickYear2 = (year, row) => {
    return this.jsonp.request('https://archive.org/advancedsearch.php?q=BrothersPast,%20year:'+ year +'&fl%5B%5D=year&fl%5B%5D=date&fl%5B%5D=identifier,title&sort%5B%5D=&sort%5B%5D=&sort%5B%5D=&rows='+ row +'&page=1&output=json&callback=JSONP_CALLBACK')
  }

  pickShow2 = ( id ) => {
    return this.jsonp.request('https://archive.org/metadata/' + id + '&output=json&callback=JSONP_CALLBACK')
  }

}
