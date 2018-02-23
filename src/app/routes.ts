import { Routes } from '@angular/router'

import { ArtistsListComponent } from "./artists/artists-list/artists-list.component";
import { ArtistDetailsComponent } from './artists/artist-details/artist-details.component';
import { ArtistAddComponent } from './artists/artist-add/artist-add.component';
import { Error404Component } from './errors/404.component';
import { ArtistRouteActivatorService } from './artists/shared/artist-route-activator.service';


export const appRoutes:Routes = [
    { path: 'artists/add', component: ArtistAddComponent },
    { path: '', redirectTo: '/artists', pathMatch: 'full'},
    { path: 'artists', component: ArtistsListComponent },
    { path: 'artists/:id', component: ArtistDetailsComponent, canActivate: [ArtistRouteActivatorService] },
    { path: '404', component: Error404Component}
]
