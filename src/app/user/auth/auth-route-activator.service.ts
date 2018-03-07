import { AuthService } from './auth.service';

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';


@Injectable()
export class AuthRouteActivatorService implements CanActivate{
    constructor(private auth:AuthService, private router:Router){

    }

    canActivate(){
        if(!this.auth.isAuthenticated()){
            this.router.navigate(['/'])
        }
        return this.auth.isAuthenticated()
    }


}