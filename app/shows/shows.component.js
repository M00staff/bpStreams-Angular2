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
// import { showsService } from './shows.service';
// import 'rxjs/Rx';
var showsComponent = (function () {
    // constructor(private showsService: showsService) {}
    function showsComponent(jsonp) {
        var _this = this;
        this.jsonp = jsonp;
        this.pickYear = function (year, row) {
            _this.jsonp.request('https://archive.org/advancedsearch.php?q=BrothersPast,%20year:' + year + '&fl%5B%5D=year&fl%5B%5D=date&fl%5B%5D=identifier,title&sort%5B%5D=&sort%5B%5D=&sort%5B%5D=&rows=' + row + '&page=1&output=json&callback=JSONP_CALLBACK')
                .subscribe(function (res) {
                _this.shows = res.json();
                console.log(_this.shows);
            });
        };
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], showsComponent.prototype, "shows", void 0);
    showsComponent = __decorate([
        core_1.Component({
            selector: 'pick-shows',
            templateUrl: 'app/shows/shows.view.html',
            providers: [http_1.JSONP_PROVIDERS],
            // inputs: ['shows'],
            directives: [showList_component_1.showList]
        }), 
        __metadata('design:paramtypes', [http_1.Jsonp])
    ], showsComponent);
    return showsComponent;
}());
exports.showsComponent = showsComponent;
//# sourceMappingURL=shows.component.js.map