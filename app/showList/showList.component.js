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
var showPick_component_1 = require('../showPick/showPick.component');
var ShowList = (function () {
    function ShowList(showsService) {
        this.showsService = showsService;
        this.randomButton = function () {
            // console.log(this.showList + ' did it work?')
            // this.showList = this.showsService.shows2.response.docs;
            // console.log(this.showsService.shows2.response.docs)
        };
    }
    ShowList = __decorate([
        core_1.Component({
            selector: 'show-list',
            templateUrl: 'app/showList/showList.html',
            directives: [showPick_component_1.ShowPick]
        }), 
        __metadata('design:paramtypes', [shows_service_1.ShowsService])
    ], ShowList);
    return ShowList;
}());
exports.ShowList = ShowList;
//# sourceMappingURL=showList.component.js.map