//imports of internal dependencies
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

//TOASTR
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Routes
import { appRoutes } from './routes';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './errors/404.component';

//User and Authentication
import { AuthService } from './user/auth/auth.service';
import { AuthGuard } from './user/auth/auth.guard';
import { UserModule } from './user/user.module';

//FORMS
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//MODAL
import { SimpleModalComponent } from './common/simple-modal/simple-modal.component';
import { ModalTriggerDirective } from './common/simple-modal/modal-trigger.directive';

//HTTP
import { HttpClientModule } from "@angular/common/http";
import { ArtistResolver } from './artists/artist-details/artist-resolver.service';
import { CountriesService } from './artists/shared/countries/countries.service';

//Async and Observables
import { ArtistsListResolver } from './artists/artists-list/artists-list.resolver.service'

//Application specific components
import { MskAppComponent } from './msk-app.component'
import { NavBarComponent } from './nav/navbar.component';
import {
    ArtistsListComponent,
    ArtistThumbnailComponent,
    ArtistDetailsComponent,
    ArtistService,
    ArtistAddComponent,
    ArtistEditComponent
} from './artists/index'

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        UserModule,
        FormsModule,
        ReactiveFormsModule,
        ToastrModule.forRoot(),
        BrowserAnimationsModule,
        HttpClientModule
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
        ArtistResolver,
        ArtistsListResolver,
        AuthService,
        ToastrService,
        SimpleModalComponent,
        AuthGuard,
        CountriesService
    ],
    bootstrap: [MskAppComponent]
})

/// @name AppModule
/// Main module for this app
export class AppModule {
}
