import { Component } from '@angular/core';
import { AuthService } from './../auth/auth.service';
import { Router } from '@angular/router';


@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']

})
export class LoginComponent{

    constructor(private authService:AuthService, private router:Router){

    }

    login(formValues){
        this.authService.loginUser(formValues.userName, formValues.password)
        this.router.navigate(['artists'])
    }

    cancel(){
        this.router.navigate(['artists'])
    }

}