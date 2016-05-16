import { Component } from '@angular/core';
import { showsComponent } from '../shows/shows.component';

@Component({
  selector: 'show-list',
  template: 'showList.view.html',
  directives: [showList]
})

export class showList {


  randomButton() {
    alert(shows)
  }

}
