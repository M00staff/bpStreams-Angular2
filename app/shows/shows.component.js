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
var showsComponent = (function () {
    // constructor(private showsService: showsService) {}
    function showsComponent(showsService) {
        var _this = this;
        this.showsService = showsService;
        this.pickYear = function (year, row) {
            _this.shows = _this.showsService.pickYear2(year, row);
        };
    }
    showsComponent = __decorate([
        core_1.Component({
            selector: 'pick-shows',
            templateUrl: 'app/shows/shows.html',
            providers: [http_1.JSONP_PROVIDERS, shows_service_1.ShowsService],
            // inputs: ['shows'],
            directives: [showList_component_1.showList]
        }), 
        __metadata('design:paramtypes', [shows_service_1.ShowsService])
    ], showsComponent);
    return showsComponent;
}());
exports.showsComponent = showsComponent;
//# sourceMappingURL=shows.component.js.map