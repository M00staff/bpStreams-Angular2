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
    function ShowsComponent(showsService) {
        var _this = this;
        this.showsService = showsService;
        this.pickYear = function (year, row) {
            // this.shows =
            _this.showsService.pickYear2(year, row)
                .subscribe(function (res) {
                _this.shows = res.json();
                _this.showList = _this.shows.response.docs;
            });
            // console.log(this.shows)
            // .subscribe((res: Response) => {
            // console.log(res.response.docs)
            // this.showList = this.showsService.shows3;
            // })
            // this.shows = this.showsService.shows2.response.docs;
            // .subscribe(res => this.showList = res);
            // console.log(this.showList)
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