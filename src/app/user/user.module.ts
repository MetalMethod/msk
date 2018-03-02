import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import  {userRoutes } from './user.routes';

import { FormsModule } from '@angular/forms';

import { ProfileComponent } from './profile.component';
import { LoginComponent } from './login/login.component';

@NgModule({
    imports:[
        BrowserModule,
        RouterModule.forChild(userRoutes),
        FormsModule
    ],
    declarations: [
        ProfileComponent,
        LoginComponent
    ],
    providers: [

    ]
})

export class UserModule{

}