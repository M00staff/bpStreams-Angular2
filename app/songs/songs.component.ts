import { Component, Input } from '@angular/core';
import { Response  } from '@angular/http';
import { ShowsComponent } from '../Shows/shows.component';
import { ShowsService } from '../shows.service';
declare const $:any;

@Component({
  selector: 'pick-songs',
  template:

  `

  <div class="allSongs" (click)="pickSong( set.songTitle, set.songFile, set.deeOne, set.directory, setList, setList.indexOf(set) )">
    {{ set.songTitle }}
  </div>

  `

})

export class SongsComponent {
  constructor () { };

  @Input() set;
  @Input() setList;
  // @Input() show;

  pickSong = ( title, file, d1, dir, songList, index ) => {
    const songSrc:any = {title: title, source: 'http://' + d1 + dir + '/' + file};
    // console.log(index)

    $('.player-song-title').html(songSrc.title);          //actual changing of audio source
    $('.player').attr('src', songSrc.source);

    //=========== event listener for next song
    let audio = $('audio');
    let songCount = index;
    let len = songList.length - 1;

    audio[0].addEventListener('ended', function(e){
      songCount++;
      if(songCount >= len){
        $('.player-song-title').html(songList[0].songTitle);
        $('.player').attr('src', songList[0].source);
      } else {
        $('.player-song-title').html(songList[songCount].songTitle);
        $('.player').attr('src', songList[songCount].source);
      }
    });

  }

};
