import { Component } from '@angular/core';
//import {AppComponent} from '../app.component';

@Component({
  selector: 'pick-shows',
  templateUrl: 'app/shows/shows.view.html'
})

export class showsComponent {

  pickYear = (year, row) => {
    console.log(year, row);
 }

}
