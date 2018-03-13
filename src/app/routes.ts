import { Routes } from '@angular/router'

import {
    ArtistsListComponent,
    ArtistDetailsComponent,
    ArtistAddComponent,
    //ArtistRouteActivatorService,
    ArtistsListResolver,
    ArtistEditComponent
    
} from './artists/index'

import { Error404Component } from './errors/404.component';

import { UserModule } from './user/user.module';
import { ArtistResolver } from './artists/artist-details/artist-resolver.service';

export const appRoutes:Routes = [
    { path: 'artists/add', component: ArtistAddComponent, canDeactivate: ['canDeactivateAddArtist'] },
    { path: 'artists', component: ArtistsListComponent , resolve:{artists:ArtistsListResolver}},
    
    //{ path: 'artists/:id', component: ArtistDetailsComponent, canActivate: [ArtistRouteActivatorService] },
    { path: 'artists/:id', component: ArtistDetailsComponent, resolve: {artist: ArtistResolver }},
    
    // { path: 'artists/:id/edit', component: ArtistEditComponent, canActivate: [ArtistRouteActivatorService] },
    { path: 'artists/:id/edit', component: ArtistEditComponent},
    
    { path: '404', component: Error404Component},
    { path: '', redirectTo: 'user/login', pathMatch: 'full'},
    { path: 'user', component: UserModule }
]
