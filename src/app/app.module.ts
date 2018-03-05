//imports of internal dependencies
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser' 

//Application specific components
import { MskAppComponent } from './msk-app.component'

import { 
    ArtistsListComponent,
    ArtistThumbnailComponent,
    ArtistDetailsComponent,
    ArtistService,
    ArtistAddComponent
    
} from './artists/index'

import { NavBarComponent } from './nav/navbar.component';
import { ToastrService } from './common/toastr.service';

//Routes
import { appRoutes } from './routes';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './errors/404.component';
import { ArtistRouteActivatorService } from './artists/shared/artist-route-activator.service';

//Async and Observables
import { ArtistsListResolver } from './artists/artists-list/artists-list.resolver.service'

//User and Authentication
import { AuthService } from './user/auth/auth.service';
import { UserModule } from './user/user.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        BrowserModule,
        // RouterModule.forRoot(appRoutes, {enableTracing: true})
        RouterModule.forRoot(appRoutes),
        UserModule,
        FormsModule,
        ReactiveFormsModule
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
        ArtistsListResolver,
        {provide: 'canDeactivateAddArtist', useValue: checkDirtyState},
        AuthService
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