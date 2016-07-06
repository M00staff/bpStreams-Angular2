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
var http_1 = require('@angular/http');
var showList_component_1 = require('../showList/showList.component');
var shows_service_1 = require('../shows.service');
// import 'rxjs/Rx';
var ShowsComponent = (function () {
    // need this in the constructor to run service
    function ShowsComponent(showsService) {
        var _this = this;
        this.showsService = showsService;
        // public setList;
        this.pickYear = function (year, row) {
            // run service with arguments
            _this.showsService.pickYear2(year, row)
                .subscribe(function (res) {
                // subscribe also allows us to change observable to JSON
                _this.shows = res.json();
                // grabs and attaches filtered data correct
                _this.showList = _this.shows.response.docs;
            });
        };
        this.pickShow = function (id) {
            _this.showsService.pickShow2(id)
                .subscribe(function (res) {
                _this.show = res.json();
                _this.showFiles = _this.show.files;
                console.log(_this.show);
                var setList = [];
                var baseUrl = _this.show.d1;
                var dir = _this.show.dir;
                _this.showFiles.forEach(function (val) {
                    var fileName = val.name;
                    var songName = val.title;
                    console.log(val);
                    var ext = fileName.substr(fileName.lastIndexOf('.') + 1); //check file type - looks at everything after '.'
                    if ((ext === 'ogg' || ext === 'mp3') && songName != undefined) {
                        setList.push({ songTitle: songName, songFile: fileName, deeOne: baseUrl, directory: dir, songSource1: 'http://' + baseUrl + dir + '/' + fileName });
                    }
                });
                console.log(setList);
            });
        };
    }
    ShowsComponent = __decorate([
        core_1.Component({
            selector: 'pick-shows',
            templateUrl: 'app/shows/shows.html',
            providers: [http_1.JSONP_PROVIDERS, shows_service_1.ShowsService],
            directives: [showList_component_1.ShowList]
        }), 
        __metadata('design:paramtypes', [shows_service_1.ShowsService])
    ], ShowsComponent);
    return ShowsComponent;
}());
exports.ShowsComponent = ShowsComponent;
//# sourceMappingURL=shows.component.js.map