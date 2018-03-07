import { AuthService } from './user/auth/auth.service';
import { Routes } from '@angular/router'

import {
    ArtistsListComponent,
    ArtistDetailsComponent,
    ArtistAddComponent,
    ArtistRouteActivatorService,
    ArtistsListResolver,
    ArtistEditComponent,
  
} from './artists/index'

import { Error404Component } from './errors/404.component';

import { UserModule } from './user/user.module';
import { AuthRouteActivatorService } from './user/auth/auth-route-activator.service';

import { Error404RouteActivatorService } from './errors/404-route-activator.service';

export const appRoutes:Routes = [
    { path: 'artists/add', component: ArtistAddComponent, canDeactivate: ['canDeactivateAddArtist'], canActivate: [AuthRouteActivatorService] },
    { path: 'artists', component: ArtistsListComponent , resolve:{artists:ArtistsListResolver}, canActivate: [AuthRouteActivatorService] },
    { path: 'artists/:id', component: ArtistDetailsComponent, canActivate: [ArtistRouteActivatorService, AuthRouteActivatorService] },
    
    { path: 'artists/:id/edit', component: ArtistEditComponent, canActivate: [ArtistRouteActivatorService, AuthRouteActivatorService] },
    // { path: 'artists/:id/edit', component: ArtistEditComponent},
    
    { path: '404', component: Error404Component, canActivate: [Error404RouteActivatorService]},
    { path: '', redirectTo: 'user/login', pathMatch: 'full'},
    { path: 'user', component: UserModule, canActivate: [AuthRouteActivatorService] }
]
