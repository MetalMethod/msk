import { Routes } from '@angular/router'

import {
    ArtistsListComponent,
    ArtistDetailsComponent,
    ArtistAddComponent,
    ArtistRouteActivatorService,
    ArtistsListResolver

} from './artists/index'

import { Error404Component } from './errors/404.component';

export const appRoutes:Routes = [
    { path: 'artists/add', component: ArtistAddComponent, canDeactivate: ['canDeactivateAddArtist'] },
    { path: 'artists', component: ArtistsListComponent , resolve:{artists:ArtistsListResolver}},
    { path: 'artists/:id', component: ArtistDetailsComponent, canActivate: [ArtistRouteActivatorService] },
    { path: '404', component: Error404Component},
    { path: '', redirectTo: '/artists', pathMatch: 'full'},
    { path: 'user', loadChildren: 'app/user/user.module#UserModule' }
]
