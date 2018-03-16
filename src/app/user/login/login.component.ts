import { Component } from '@angular/core';
import { AuthService } from './../auth/auth.service';
import { Router } from '@angular/router';
import { IUser } from '../auth/user.model';


@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']

})
export class LoginComponent{

    unauthorized: boolean = false;

    constructor(private authService:AuthService, private router:Router){

    }

    login(formValues){
        this.authService.login(formValues.userName, formValues.password)
    }

    cancel(){
        this.router.navigate(['artists'])
    }

    // validateUserName(){
    //     return this.userName.valid || this.userName.untouched
    //   }
    
    //   validatePasswordName(){
    //     return this.password.valid || this.password.untouched
    //   }
    
}