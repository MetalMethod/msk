import { CookiesService } from './../../common/cookies.service';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { IUser } from './user.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router';
// HTTP
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Subject, Observable } from 'rxjs/RX';

// common request options for POST and PUT
const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}

/// @name AuthService
///  global service for authentication
@Injectable()
export class AuthService {

    public currentUser: any
    ///# Internal status of user
    ///# @private
    ///# @type {boolean}
    private loggedIn: boolean = false;

    ///# status for authentication error message
    ///# @private
    ///# @type {boolean}
    private unauthorized: boolean = false;

    ///# String that stores the auth token
    ///# @private
    ///# @type {string}
    private token: string = "";

    ///# @name getToken
    ///# Returns the saved token
    ///# @public
    ///# @returns {any} - 
    public getToken(){
        return this.token
    }

    ///# @name getUnauthorized
    ///# returns unauthorized state for form validation messages
    ///# @public
    ///# @returns {any} - 
    public getUnauthorized() {
        return this.unauthorized;
    }

    ///# @name setUnauthorized
    ///# sets the unauthorized state for form validation messages
    ///# @public
    public setUnauthorized(){
        this.unauthorized = true;
    }

    ///# @name isLoggedIn
    ///# returns user state
    ///# @public
    ///# @returns {{boolean}} - 
    public isLoggedIn(): boolean {
        return this.loggedIn
    }

    ///# Creates an instance of AuthService.
    ///# @param {Router} router - 
    ///# @param {HttpClient} httpClient - 
    constructor(private router: Router, private httpClient: HttpClient, private cookies: CookiesService) {
        this.currentUser = {}
    }

    ///# @name login
    ///# make request to server for user login
    ///# @param {string} userName - the username from the login form
    ///# @param {string} password - the password from the login form
    login(userName: string, password: string) {
        this.unauthorized = false
        
        /// builds the required body of server call cointaing a object with username and pass
        let userInfo = "\{\"username\":\"" + userName.toString() + "\"\, \"password\"\:\"" + password.toString() + "\"\}";

        /// Calls the server for login and initializes the navigation
        this.httpClient.post("http://localhost:3000/api/Users/login", userInfo, httpOptions).subscribe(
            (resp: Response) => {
                if (resp['userId']) {
                    this.token = resp['id']
                    this.loggedIn = true;
                    this.currentUser.id = resp['userId']
                    this.currentUser.userName = userName;
                    this.router.navigate(['artists'])
                }
            },
            (resp: HttpErrorResponse) => {
                if(resp.status == 401){
                    this.unauthorized = true
                }
            }
        )
    }

    ///# @name logout
    ///# logout the user
    logout() {
        this.httpClient.post("http://localhost:3000/api/Users/logout", httpOptions).subscribe()
        this.cookies.deleteAll();
        this.loggedIn = false;
        this.token = "";
    }

    ///# @name updateCurrentUser
    ///# Stores the current user for the profile page
    ///# @param {string} firstName - name to update
    ///# @param {string} lastName - name to update
    updateCurrentUser(firstName: string, lastName: string) {
        this.currentUser.firstName = firstName
        this.currentUser.lastName = lastName
    }

}