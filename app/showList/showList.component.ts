import { Component } from '@angular/core';
import { showsComponent } from '../shows/shows.component';


@Component({
  selector: 'show-list',
  templateUrl: 'app/showList/showList.html',

})

export class showList {
  randomButton = () => {
    console.log('randomButton clicked')
  }
}
