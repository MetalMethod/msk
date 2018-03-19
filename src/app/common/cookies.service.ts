
// INSTALL PACKAGE
// npm install ngx-cookie-service --save

import { Component, OnInit, Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';


@Injectable()

export class CookiesService implements OnInit {

    constructor(private cookieService: CookieService) { }

    ngOnInit(): void {
        
    }

    checkTokenCookie():boolean{
        return this.cookieService.check('token');
    }

    getTokenCookie(){
        return this.cookieService.get('token')
    }

    setTokenCookie(token){
        this.cookieService.set('token', token)
    }
}