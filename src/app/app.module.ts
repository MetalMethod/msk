import { ArtistRouteActivatorService } from './artists/shared/artist-route-activator.service';


//imports of internal dependencies
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser' 

//Application specific components
import { MskAppComponent } from './msk-app.component'

import { ArtistsListComponent } from './artists/artists-list/artists-list.component'
import { ArtistThumbnailComponent } from './artists/artist-thumbnail/artist-thumbnail.component'
import { ArtistDetailsComponent } from './artists/artist-details/artist-details.component';
import { ArtistService } from './artists/shared/artist.service';
import { ArtistAddComponent } from './artists/artist-add/artist-add.component';

import { NavBarComponent } from './nav/navbar.component';
import { ToastrService } from './common/toastr.service';

import { appRoutes } from './routes';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './errors/404.component';


@NgModule({
    imports: [
        BrowserModule,
        // RouterModule.forRoot(appRoutes, {enableTracing: true})
        RouterModule.forRoot(appRoutes)
        ],
    declarations: [
        MskAppComponent, 
        ArtistsListComponent, 
        ArtistThumbnailComponent, 
        ArtistDetailsComponent, 
        NavBarComponent,
        ArtistAddComponent,
        Error404Component
    ],
    providers: [
        ArtistService,
        ArtistRouteActivatorService,
        {provide: 'canDeactivateAddArtist', useValue: checkDirtyState}
        // ,  
        // ToastrService
    ],
    bootstrap: [MskAppComponent]
})
export class AppModule{
    
}

function checkDirtyState(component:ArtistAddComponent){
    if(component.isDirty)
        return window.confirm('You have not added this artist yet, do you really want to cancel?')
    return true
}