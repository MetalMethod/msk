import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { userRoutes } from './user.routes';
import { AuthGuard } from './auth/auth.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forChild(userRoutes),
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        ProfileComponent,
        LoginComponent
    ],
    providers: [
        AuthGuard
        
    ]
})

/// @name UserModule
///  User Module, managing login and profile
export class UserModule {

}