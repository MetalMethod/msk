import { catchError } from 'rxjs/operators';
import { AuthService } from './../user/auth/auth.service';
import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpResponse, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { Router } from '@angular/router';
import { CookiesService } from './cookies.service';

@Injectable()

/// @name GlobalHttpInterceptor
/// This classes intercepts ALL outgoing Http requests, 
/// then clones them, add the login Token to the header and send those clones
/// @implements {HttpInterceptor}
export class GlobalHttpInterceptor implements HttpInterceptor {

    private authorization: string;
    /// Creates an instance of GlobalHttpInterceptor.
    /// @param {AuthService} auth - 
    /// @param {Router} router - 
    constructor(private auth: AuthService, private router: Router, private cookies: CookiesService) { }

    /// @name intercept
    /// Action for intercepting Http requests
    /// @param {HttpRequest<any>} req - the request to intercept
    /// @param {HttpHandler} next - the result request handler 
    /// @returns {{Observable<HttpEvent<any>>}} 
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (this.cookies.getTokenCookie() == "" || !this.cookies.checkTokenCookie()) {
            //read the token from response of a new login
            this.authorization = this.auth.getToken();
            // saves the Token to a cookie
            //this.cookies.setTokenCookie(this.authorization)
        } else {
            this.cookies.deleteAll()
            //get Token from stored cookie
            //this.authorization = this.cookies.getTokenCookie()
            
            //console.log(this.authorization)
            this.authorization = this.auth.getToken();
        }

        // Clone the request to add the authorization header.
        const authReq = req.clone({ headers: req.headers.set('authorization', this.authorization) });

        // Pass on the cloned request instead of the original request.
        return next.handle(authReq)
            .catch((error, caught) => {
                return Observable.throw(error);
            }) as any;

    }
}