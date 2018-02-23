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
//imports of internal dependencies
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
//Application specific components
var msk_app_component_1 = require("./msk-app.component");
var artists_list_component_1 = require("./artists/artists-list/artists-list.component");
var artist_thumbnail_component_1 = require("./artists/artist-thumbnail/artist-thumbnail.component");
var artist_details_component_1 = require("./artists/artist-details/artist-details.component");
var artist_service_1 = require("./artists/shared/artist.service");
var navbar_component_1 = require("./nav/navbar.component");
var toastr_service_1 = require("./common/toastr.service");
var routes_1 = require("./routes");
var router_1 = require("@angular/router");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot(routes_1.appRoutes, { enableTracing: true })
        ],
        declarations: [
            msk_app_component_1.MskAppComponent,
            artists_list_component_1.ArtistsListComponent,
            artist_thumbnail_component_1.ArtistThumbnailComponent,
            artist_details_component_1.ArtistDetailsComponent,
            navbar_component_1.NavBarComponent
        ],
        providers: [
            artist_service_1.ArtistService,
            toastr_service_1.ToastrService
        ],
        bootstrap: [msk_app_component_1.MskAppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map