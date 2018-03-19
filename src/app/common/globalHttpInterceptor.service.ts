import { AuthService } from './../user/auth/auth.service';
import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/catch';
import { Router } from '@angular/router';


@Injectable()
export class GlobalHttpInterceptor implements HttpInterceptor {
    constructor(private auth: AuthService, private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        console.log("intercepted request ");

        //read the token from storage
        const Authorization = this.auth.getToken();

        // Clone the request to add the authorization header.
        const authReq = req.clone({ headers: req.headers.set('authorization', Authorization) });

        // Pass on the cloned request instead of the original request.
        return next.handle(authReq)
            .catch((error, caught) => {
                if (error.status === 401) {

                    //logout users, redirect to login page
                    this.auth.logout();

                    return Observable.throw(error);
                } else {
                    return Observable.throw(error);
                }
            }) as any;
    }
}