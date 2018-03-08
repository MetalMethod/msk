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
    ArtistAddComponent,
    ArtistEditComponent
    
} from './artists/index'

import { NavBarComponent } from './nav/navbar.component';

//TOASTR
import { ToastrService, ToastrModule } from 'ngx-toastr';

// import { TOASTR_TOKEN, ToastrNgService } from './common/toastr.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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

//FORMS
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//MODAL
import { SimpleModalComponent } from './common/simple-modal/simple-modal.component';
import { ModalTriggerDirective } from './common/simple-modal/modal-trigger.directive';

//global injection
//let toastr:ToastrNgService;

@NgModule({
    imports: [
        BrowserModule,
        // RouterModule.forRoot(appRoutes, {enableTracing: true})
        RouterModule.forRoot(appRoutes),
        UserModule,
        FormsModule,
        ReactiveFormsModule,
        ToastrModule.forRoot(),
        BrowserAnimationsModule
        
        ],
    declarations: [
        MskAppComponent, 
        ArtistsListComponent, 
        ArtistThumbnailComponent, 
        ArtistDetailsComponent, 
        NavBarComponent,
        ArtistAddComponent,
        ArtistEditComponent,
        Error404Component,
        SimpleModalComponent,
        ModalTriggerDirective
    ],
    providers: [
        ArtistService,
        ArtistRouteActivatorService,
        ArtistsListResolver,
        {provide: 'canDeactivateAddArtist', useValue: checkDirtyState},
        AuthService,
        ToastrService,
        SimpleModalComponent

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