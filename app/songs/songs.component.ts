import { Component, Input } from '@angular/core';
import { Response  } from '@angular/http';
import { ShowsComponent } from '../shows/shows.component';
import { ShowsService } from '../shows.service';
// import 'rxjs/Rx';

@Component({
  selector: 'pick-songs',
  template:

  `

<div>
  {{songTitle}}
<div>

  `

})

export class SongsComponent {
  constructor () { };



};
