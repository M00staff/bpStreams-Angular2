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
var YearComponent = (function () {
    // need this in the constructor to run service
    function YearComponent(showsService) {
        var _this = this;
        this.showsService = showsService;
        this.pickYear = function (year, row) {
            // run service with arguments
            _this.showsService.pickYear2(year, row)
                .subscribe(function (res) {
                // subscribe also allows us to change observable to JSON
                _this.shows = res.json();
                // grabs and attaches filtered data correct
                _this.showList = _this.shows.response.docs;
                // console.log(this.showList)
                // showList = this.showList
            });
        };
    }
    YearComponent = __decorate([
        core_1.Component({
            selector: 'pick-year',
            providers: [shows_service_1.ShowsService],
            // directives depreceated, its now declarations in main module
            // directives: [SongsComponent]
            template: "\n\n  <div class=\"column column-12\">\n    <div class=\"yearButtons\">\n      <p>Select Year</p>\n        <a href=\"#/\">\n        <button (click)=\"pickYear(2001, 15)\">2001</button>\n        <button (click)=\"pickYear(2002, 26)\">2002</button>\n        <button (click)=\"pickYear(2003, 84)\">2003</button>\n        <button (click)=\"pickYear(2004, 96)\">2004</button>\n        <button (click)=\"pickYear(2005, 131)\">2005</button>\n        <button (click)=\"pickYear(2006, 84)\">2006</button>\n        <button (click)=\"pickYear(2007, 25)\">2007</button>\n        <button (click)=\"pickYear(2008, 4)\">2008</button>\n        <button (click)=\"pickYear(2009, 17)\">2009</button>\n        <button (click)=\"pickYear(2010, 20)\">2010</button>\n        <button (click)=\"pickYear(2011, 34)\">2011</button>\n        <button (click)=\"pickYear(2012, 14)\">2012</button>\n        <button (click)=\"pickYear(2013, 1)\">2013</button>\n      </a>\n    </div>\n\n\n    <pick-shows\n      [show]=\"show\"\n      [showList]=\"showList\">\n    </pick-shows>\n\n  </div>\n\n\n  <footer>\n    <span class=\"player-song-title\"><!-- {{ songSource.title }} --></span>\n    <audio controls autoplay=\"true\" class=\"player\" preload=\"auto\"> <!-- [src]=\"songSource.source\">  --> </audio>\n  </footer>\n\n\n  "
        }), 
        __metadata('design:paramtypes', [shows_service_1.ShowsService])
    ], YearComponent);
    return YearComponent;
}());
exports.YearComponent = YearComponent;
;
//# sourceMappingURL=year.component.js.map