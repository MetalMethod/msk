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
import { AuthGuard } from './user/auth/auth.guard';

export const appRoutes:Routes = [
    { path: 'artists/add', component: ArtistAddComponent, canDeactivate: ['canDeactivateAddArtist'] , canActivate: [AuthGuard]},
    { path: 'artists', component: ArtistsListComponent , resolve:{artists:ArtistsListResolver}, canActivate: [AuthGuard]},
    
    //{ path: 'artists/:id', component: ArtistDetailsComponent, canActivate: [ArtistRouteActivatorService] },
    { path: 'artists/:id', component: ArtistDetailsComponent, resolve: {artist: ArtistResolver }, canActivate: [AuthGuard]},
    
    // { path: 'artists/:id/edit', component: ArtistEditComponent, canActivate: [ArtistRouteActivatorService] },
    { path: 'artists/:id/edit', component: ArtistEditComponent, canActivate: [AuthGuard]},
    
    { path: '404', component: Error404Component, canActivate: [AuthGuard]},
    { path: '', redirectTo: 'user/login', pathMatch: 'full', canActivate: [AuthGuard]},
    { path: 'user', component: UserModule , canActivate: [AuthGuard]}
]
