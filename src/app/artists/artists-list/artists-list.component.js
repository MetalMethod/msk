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
var core_1 = require("@angular/core");
var artist_service_1 = require("./../shared/artist.service");
var toastr_service_1 = require("./../../common/toastr.service");
var ArtistsListComponent = (function () {
    //injecting the service
    function ArtistsListComponent(artistService, toastrService) {
        this.artistService = artistService;
        this.toastrService = toastrService;
    }
    //event callend when the component is first loaded
    ArtistsListComponent.prototype.ngOnInit = function () {
        this.artists = this.artistService.getArtists();
    };
    ArtistsListComponent.prototype.handleThumbnailClick = function (artistName) {
        this.toastrService.warning(artistName);
    };
    return ArtistsListComponent;
}());
ArtistsListComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/artists/artists-list/artists-list.component.html',
        styleUrls: ['app/artists/artists-list/artists-list.component.css']
    }),
    __metadata("design:paramtypes", [artist_service_1.ArtistService, toastr_service_1.ToastrService])
], ArtistsListComponent);
exports.ArtistsListComponent = ArtistsListComponent;
//# sourceMappingURL=artists-list.component.js.map