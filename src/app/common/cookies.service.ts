
// INSTALL PACKAGE instructions:
// npm install ngx-cookie-service --save

import { Component, OnInit, Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
/// @name CookiesService
/// Global service for creating, retrieving and deleting cookies
/// @implements {OnInit}
export class CookiesService implements OnInit {

    /// Creates an instance of CookiesService.
    /// @param {CookieService} cookieService - 
    constructor(private cookieService: CookieService) { }

    /// @name ngOnInit
    /// Called when this service is instantiated 
    ngOnInit(): void { }

    /// @name checkTokenCookie
    ///  Checks if the cookie with auth token already exists
    /// @public
    /// @returns {{boolean}} - 
    public checkTokenCookie(): boolean {
        return this.cookieService.check('token');
    }

    /// @name getTokenCookie
    /// Retrieves the token from the cookie saved on login
    /// @public
    /// @returns {any} - 
    public getTokenCookie() {
        return this.cookieService.get('token')
    }

    /// @name setTokenCookie
    /// Creates a new cookie with the auth token
    /// @public
    /// @param {any} token - 
    public setTokenCookie(token) {
        this.cookieService.set('token', token)
    }

    /// @name deleteAll
    /// Erases all cookies
    /// @public
    public deleteAll() {
        this.cookieService.deleteAll()
    }
}