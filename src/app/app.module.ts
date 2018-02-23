
//imports of internal dependencies
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser' 

//Application specific components
import { MskAppComponent } from './msk-app.component'

import { ArtistsListComponent } from './artists/artists-list/artists-list.component'
import { ArtistThumbnailComponent } from './artists/artist-thumbnail/artist-thumbnail.component'
import { ArtistDetailsComponent } from './artists/artist-details/artist-details.component';
import { ArtistService } from './artists/shared/artist.service';

import { NavBarComponent } from './nav/navbar.component';
import { ToastrService } from './common/toastr.service';

import { appRoutes } from './routes';
import { RouterModule, Routes } from '@angular/router';


@NgModule({
    imports: [
        BrowserModule
        //,
        //RouterModule.forRoot(appRoutes, {enableTracing: true})
        //RouterModule.forRoot(appRoutes)
        ],
    declarations: [
        MskAppComponent, 
        ArtistsListComponent, 
        ArtistThumbnailComponent, 
        ArtistDetailsComponent, 
        NavBarComponent
    ],
    providers: [
        ArtistService
        // ,  
        // ToastrService
    ],
    bootstrap: [MskAppComponent]
})
export class AppModule{

}