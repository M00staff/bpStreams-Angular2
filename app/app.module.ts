import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JsonpModule }    from '@angular/http';

import { AppComponent }   from './app.component';
import { YearComponent } from './year/year.component';
import { ShowsComponent } from './year/shows/shows.component';
import { SongsComponent } from './year/shows/songs/songs.component';
import { ShowsService } from './shows.service';

@NgModule({

  imports:      [
    BrowserModule,
    JsonpModule
  ],

  declarations: [
    AppComponent,
    YearComponent,
    ShowsComponent,
    SongsComponent
  ],

  providers: [
    ShowsService,
  ],

  bootstrap:    [ AppComponent ]

})
export class AppModule { }
