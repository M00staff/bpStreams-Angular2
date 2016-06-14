import { Component } from '@angular/core';
import { ShowsComponent } from './shows/shows.component'

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.view.html',
  directives: [ShowsComponent]
})

export class AppComponent {

}
