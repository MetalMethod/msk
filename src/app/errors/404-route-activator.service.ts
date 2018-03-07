
//import { ArtistService } from './artist.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Routes } from '@angular/router';
import { appRoutes } from './../routes'

@Injectable()
export class Error404RouteActivatorService implements CanActivate{
    // constructor(private artistService:ArtistService, private router:Router){
    constructor(private router:Router, private routes:Routes){

    }

    canActivate(route:ActivatedRouteSnapshot){
        //!! cast to boolean
        const routeExists = !!this.routes.includes(route.params['path'])
        debugger

        if(!routeExists)
            this.router.navigate(['/404'])
        
        return routeExists
    }


}