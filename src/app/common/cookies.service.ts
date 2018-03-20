
// INSTALL PACKAGE
// npm install ngx-cookie-service --save

import { Component, OnInit, Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
/// @name CookiesService
/// 
/// 
/// @implements {OnInit}

export class CookiesService implements OnInit {

    constructor(private cookieService: CookieService) { }

    ngOnInit(): void {
        
    }

    public checkTokenCookie():boolean{
        return this.cookieService.check('token');
    }

    public getTokenCookie(){
        return this.cookieService.get('token')
    }

    public setTokenCookie(token){
        this.cookieService.set('token', token)
    }
    
    public deleteAll(){
        this.cookieService.deleteAll()
    }
}