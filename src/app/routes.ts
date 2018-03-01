import { Routes } from '@angular/router'

import { ArtistsListComponent } from "./artists/artists-list/artists-list.component";
import { ArtistDetailsComponent } from './artists/artist-details/artist-details.component';
import { ArtistAddComponent } from './artists/artist-add/artist-add.component';
import { Error404Component } from './errors/404.component';
import { ArtistRouteActivatorService } from './artists/shared/artist-route-activator.service';
import { ArtistsListResolver } from './artists/artists-list/artists-list.resolver.service';


export const appRoutes:Routes = [
    { path: 'artists/add', component: ArtistAddComponent, canDeactivate: ['canDeactivateAddArtist'] },
    { path: 'artists', component: ArtistsListComponent , resolve:{artists:ArtistsListResolver}},
    { path: 'artists/:id', component: ArtistDetailsComponent, canActivate: [ArtistRouteActivatorService] },
    { path: '404', component: Error404Component},
    { path: '', redirectTo: '/artists', pathMatch: 'full'},
    { path: 'user', loadChildren: 'app/user/user.module#UserModule' }
]
