import { Injectable } from '@angular/core';
import { Response, JSONP_PROVIDERS, Jsonp } from '@angular/http';


@Injectable()
export class ShowsService {

  constructor (private jsonp: Jsonp) {  }

  public shows2;
  public shows3;

  pickYear2 = (year, row) => {
    return this.jsonp.request('https://archive.org/advancedsearch.php?q=BrothersPast,%20year:'+ year +'&fl%5B%5D=year&fl%5B%5D=date&fl%5B%5D=identifier,title&sort%5B%5D=&sort%5B%5D=&sort%5B%5D=&rows='+ row +'&page=1&output=json&callback=JSONP_CALLBACK')
    // .subscribe((res: Response) => {
    //           this.shows2 = res.json();
    //           this.shows3 = this.shows2.response.docs;
    //           return this.shows3;
    //           console.log(this.shows3);
    //         })
  }
}
