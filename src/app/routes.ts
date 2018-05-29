
import { UserModule } from './user/user.module';
import { Routes } from '@angular/router'
import { ArtistResolver } from './artists/artist-details/artist-resolver.service';
import { AuthGuard } from './user/auth/auth.guard';
import { Error404Component } from './errors/404.component';
import { ErrorResolver } from './errors/errors-resolver.service';
import {
    ArtistsListComponent,
    ArtistDetailsComponent,
    ArtistAddComponent,
    ArtistEditComponent
} from './artists/index'

// Routes for app module
// Error URL: uses ** and must be the last route is this array so it catches any error AFTER all other routes.
export const appRoutes: Routes = [
    { path: 'artists', component: ArtistsListComponent },
    { path: 'artists/add', component: ArtistAddComponent, canActivate: [AuthGuard] },
    { path: 'artists/:id', component: ArtistDetailsComponent, resolve: { artist: ArtistResolver } },
    { path: 'artists/:id/edit', component: ArtistEditComponent, canActivate: [AuthGuard] }
    //,
    // { path: 'user', component: UserModule, canActivate: [AuthGuard] },
    // { path: '', redirectTo: 'user/login', pathMatch: 'full' },
    // { path: '**', resolve:{ ErrorResolver } ,  redirectTo:'artists'} 
]

// export const appRoutes: Routes = [
//     { path: 'artists/add', component: ArtistAddComponent, canActivate: [AuthGuard] },
//     { path: 'artists', component: ArtistsListComponent, canActivate: [AuthGuard] },
//     { path: 'artists/:id', component: ArtistDetailsComponent, resolve: { artist: ArtistResolver }, canActivate: [AuthGuard] },
//     { path: 'artists/:id/edit', component: ArtistEditComponent, canActivate: [AuthGuard] },
//     { path: '', redirectTo: 'user/login', pathMatch: 'full', canActivate: [AuthGuard] },
//     { path: 'user', component: UserModule, canActivate: [AuthGuard] },
//     { path: '**', resolve:{ ErrorResolver} ,  redirectTo:'artists'} 
// ]
