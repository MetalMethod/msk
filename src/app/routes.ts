import { Routes } from '@angular/router'

import { ArtistsListComponent } from "./artists/artists-list/artists-list.component";
import { ArtistDetailsComponent } from './artists/artist-details/artist-details.component';


export const appRoutes:Routes = [
    { path: '', redirectTo: '/artists', pathMatch: 'full'},
    { path: 'artists', component: ArtistsListComponent },
    { path: 'artists/:id', component: ArtistDetailsComponent }
]
