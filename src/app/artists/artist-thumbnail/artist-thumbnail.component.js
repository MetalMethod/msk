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
var ArtistThumbnailComponent = (function () {
    function ArtistThumbnailComponent() {
    }
    return ArtistThumbnailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ArtistThumbnailComponent.prototype, "artist", void 0);
ArtistThumbnailComponent = __decorate([
    core_1.Component({
        selector: 'artist-thumbnail',
        styleUrls: ['app/artists/artist-thumbnail/artist-thumbnail.component.css'],
        templateUrl: 'app/artists/artist-thumbnail/artist-thumbnail.component.html'
    }),
    __metadata("design:paramtypes", [])
], ArtistThumbnailComponent);
exports.ArtistThumbnailComponent = ArtistThumbnailComponent;
//# sourceMappingURL=artist-thumbnail.component.js.map