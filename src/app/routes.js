"use strict";
var artists_list_component_1 = require("./artists/artists-list/artists-list.component");
var artist_details_component_1 = require("./artists/artist-details/artist-details.component");
exports.appRoutes = [
    { path: '', redirectTo: '/artists', pathMatch: 'full' },
    { path: 'artists', component: artists_list_component_1.ArtistsListComponent },
    { path: 'artists/:id', component: artist_details_component_1.ArtistDetailsComponent }
];
//# sourceMappingURL=routes.js.map