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
var shows_service_1 = require('../shows.service');
var ShowsComponent = (function () {
    // need this in the constructor to run service
    function ShowsComponent(showsService) {
        var _this = this;
        this.showsService = showsService;
        // @Input() set = this.setList
        this.pickYear = function (year, row) {
            // run service with arguments
            _this.showsService.pickYear2(year, row)
                .subscribe(function (res) {
                // subscribe also allows us to change observable to JSON
                _this.shows = res.json();
                // grabs and attaches filtered data correct
                _this.showList = _this.shows.response.docs;
                // console.log(this.showList)
            });
        };
        this.pickShow = function (id, title) {
            _this.showsService.pickShow2(id)
                .subscribe(function (res) {
                _this.show = res.json();
                // console.log(this.show)
                _this.showFiles = _this.show.files;
                _this.title = _this.show.metadata.title;
                // this.isSBD = this.show.metadata.subject
                // console.log(this.isSBD)
                // baseUrl and dir are a level above name and title in the ng2 version of object
                var setList = [];
                var baseUrl = _this.show.d1;
                var dir = _this.show.dir;
                // iterate through the array of objects and grab the file names and song titles
                // Typescript iterator
                for (var _i = 0, _a = _this.showFiles; _i < _a.length; _i++) {
                    var val = _a[_i];
                    // this.showFiles.forEach((val) => {
                    // console.log(val)
                    var fileName = val.name;
                    var songName = val.title;
                    var track = val.track;
                    // check file type - looks at everything after '.'
                    var ext = fileName.substr(fileName.lastIndexOf('.') + 1);
                    if ((ext === 'ogg' || ext === 'mp3') && songName != undefined) {
                        setList.push({ songTitle: songName, track: track, songFile: fileName, deeOne: baseUrl, directory: dir, songSource1: 'http://' + baseUrl + dir + '/' + fileName });
                        // sort playlist
                        setList.sort(function (a, b) {
                            if (a.songFile > b.songFile) {
                                return 1;
                            }
                            if (a.songFile < b.songFile) {
                                return -1;
                            }
                            return 0;
                        });
                    }
                }
                // )
                // console.log(setList)
                // bind top public setlist with one just made
                _this.setList = setList;
                // return this.setList
            });
        };
        this.pickSong = function (title, file, d1, dir, songList, index) {
            var songSrc = { title: title, source: 'http://' + d1 + dir + '/' + file };
            // console.log(index)
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
    ShowsComponent = __decorate([
        core_1.Component({
            selector: 'pick-shows',
            providers: [shows_service_1.ShowsService],
            // directives depreceated, its now declarations in main module
            // directives: [SongsComponent]
            template: "\n\n\n  <div class=\"column column-12\">\n    <div class=\"yearButtons\">\n      <p>Select Year</p>\n        <a href=\"#/\">\n        <button (click)=\"pickYear(2001, 15)\">2001</button>\n        <button (click)=\"pickYear(2002, 26)\">2002</button>\n        <button (click)=\"pickYear(2003, 84)\">2003</button>\n        <button (click)=\"pickYear(2004, 96)\">2004</button>\n        <button (click)=\"pickYear(2005, 131)\">2005</button>\n        <button (click)=\"pickYear(2006, 84)\">2006</button>\n        <button (click)=\"pickYear(2007, 25)\">2007</button>\n        <button (click)=\"pickYear(2008, 4)\">2008</button>\n        <button (click)=\"pickYear(2009, 17)\">2009</button>\n        <button (click)=\"pickYear(2010, 20)\">2010</button>\n        <button (click)=\"pickYear(2011, 34)\">2011</button>\n        <button (click)=\"pickYear(2012, 14)\">2012</button>\n        <button (click)=\"pickYear(2013, 1)\">2013</button>\n      </a>\n    </div>\n\n  <!-- <div class=\"allShowsContainer\"> -->\n  <div class=\"allSongsContainer\">\n    <span class=\"showHeading\" id=\"//\"> {{ title }} </span>\n    <div class=\"allSongs\" *ngFor=\"let set of setList\" (click)=\"pickSong( set.songTitle, set.songFile, set.deeOne, set.directory, setList, setList.indexOf(set) )\">\n      {{ set.songTitle }}\n    </div>\n  </div>\n\n      <a class=\"allShows\" id=\"/\" href=\"#//\" (click)=\"pickShow( show.identifier, show.title )\" *ngFor=\"let show of showList\">\n          {{show.title}}\n      </a>\n\n\n  </div>\n\n\n  <footer>\n    <span class=\"player-song-title\"><!-- {{ songSource.title }} --></span>\n    <audio controls autoplay=\"true\" class=\"player\" preload=\"auto\"> <!-- [src]=\"songSource.source\">  --> </audio>\n  </footer>\n\n\n  "
        }), 
        __metadata('design:paramtypes', [shows_service_1.ShowsService])
    ], ShowsComponent);
    return ShowsComponent;
}());
exports.ShowsComponent = ShowsComponent;
//# sourceMappingURL=shows.component.js.map