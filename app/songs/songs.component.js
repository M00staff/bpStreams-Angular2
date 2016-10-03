"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var SongsComponent = (function () {
    function SongsComponent() {
        this.pickSong = function (title, file, d1, dir, songList, index) {
            var songSrc = { title: title, source: 'http://' + d1 + dir + '/' + file };
            console.log(index);
            $('.player-song-title').html(songSrc.title); //actual changing of audio source
            $('.player').attr('src', songSrc.source);
            //=========== event listener for next song
            var audio = $('audio');
            var songCount = index;
            var len = songList.length - 1;
            audio[0].addEventListener('ended', function (e) {
                songCount++;
                if (songCount >= len) {
                    $('.player-song-title').html(songList[0].songTitle);
                    $('.player').attr('src', songList[0].source);
                }
                else {
                    $('.player-song-title').html(songList[songCount].songTitle);
                    $('.player').attr('src', songList[songCount].source);
                }
            });
        };
    }
    ;
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Set)
    ], SongsComponent.prototype, "set", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SongsComponent.prototype, "setList", void 0);
    SongsComponent = __decorate([
        core_1.Component({
            selector: 'pick-songs',
            template: "\n\n    <span class=\"showHeading\" id=\"//\"> {{ title }} </span>\n    <div class=\"allSongs\" (click)=\"pickSong( set.songTitle, set.songFile, set.deeOne, set.directory, setList, setList.indexOf(set) )\">\n      {{ set.songTitle }}\n    </div>\n\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], SongsComponent);
    return SongsComponent;
}());
exports.SongsComponent = SongsComponent;
;
//# sourceMappingURL=songs.component.js.map