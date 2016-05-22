import { Component } from '@angular/core';
import { showsComponent } from './shows/shows.component'

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.view.html',
  directives: [showsComponent]
})

export class AppComponent {

}
