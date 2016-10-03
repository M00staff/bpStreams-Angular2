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
    function ShowsComponent(showsService) {
        var _this = this;
        this.showsService = showsService;
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
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ShowsComponent.prototype, "showList", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ShowsComponent.prototype, "show", void 0);
    ShowsComponent = __decorate([
        core_1.Component({
            selector: 'pick-shows',
            providers: [shows_service_1.ShowsService],
            template: "\n\n  <a class=\"allShows\" *ngFor=\"let show of showList\" id=\"/\" href=\"#//\" (click)=\"pickShow( show.identifier, show.title )\">\n      {{show.title}}\n  </a>\n\n  <div class=\"allSongsContainer\" id=\"//\">\n    <pick-songs\n      *ngFor=\"let set of setList\"\n      [set]=\"set\"\n      [setList]=\"setList\">\n    </pick-songs>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [shows_service_1.ShowsService])
    ], ShowsComponent);
    return ShowsComponent;
}());
exports.ShowsComponent = ShowsComponent;
//# sourceMappingURL=shows.component.js.map