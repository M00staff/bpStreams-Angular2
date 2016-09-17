import { Component } from '@angular/core';
import { ShowsComponent } from './shows/shows.component'

@Component({
  selector: 'my-app',
  template:
  `

  <div class="column column-12">
    <ul>
      <li>
        <img src="http://mnmpresents.com/wp-content/uploads/2010/07/bpLogo.jpg">
      </li>
    </ul>
  </div>


  <pick-shows></pick-shows>

  <div class="column column-12 footnote">
  <a href="mailto:MostafaSHabib@gmail.com">Questions and Site Issues can be sent to MostafaSHabib@gmail.com</a>
  </div>

  `
})

export class AppComponent {

}
