import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JsonpModule }    from '@angular/http';

import { AppComponent }   from './app.component';
import { ShowsComponent } from './shows/shows.component';
import { ShowsService } from './shows.service';

@NgModule({
  imports:      [
    BrowserModule,
    JsonpModule
  ],
  declarations: [
    AppComponent,
    ShowsComponent
  ],
  providers: [
    ShowsService,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
