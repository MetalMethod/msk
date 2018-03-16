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

@Injectable()
export class AuthService {

    public currentUser: any

    private loggedIn: boolean = false;

    private unauthorized: boolean = false;

    public getUnauthorized() {
        return this.unauthorized;
    }

    public isLoggedIn(): boolean {
        return this.loggedIn
    }

    constructor(private router: Router, private httpClient: HttpClient) {

        this.currentUser = {}
    }

    login(userName: string, password: string) {
        let userInfo = "\{\"username\":\"" + userName.toString() + "\"\, \"password\"\:\"" + password.toString() + "\"\}";

        this.httpClient.post("http://localhost:3000/api/Users/login", userInfo, httpOptions).subscribe(
            (resp: Response) => {
                if (resp['userId']) {
                    this.loggedIn = true;
                    this.currentUser.id = resp['userId']
                    this.currentUser.userName = userName;
                    this.unauthorized = false
                    this.router.navigate(['artists'])
                    //console.log(this.currentUser.id)
                } 
            },
            (resp: HttpErrorResponse) => {
                this.unauthorized = true;
                //console.log(resp)
            }
        )
    }

    // login(userName: string, password: string){
    //     if(userName !== '' && password != ''){
    //         this.loggedIn = true;
    //     }

    //     //REMOVE THIS, this user date must be added on login, but must come from the server
    //     this.currentUser = {
    //         id:"dfwdve1",
    //         userName: userName,
    //         password: password,
    //         firstName: 'Igor',
    //         lastName: 'Busquets',
    //         email: 'igor@busquets.com'
    //         }
    // }

    logout() {
        this.loggedIn = false;
    }

    isAuthenticated(): boolean {
        //return !!this.currentUser;
        return this.isLoggedIn()
    }

    updateCurrentUser(firstName: string, lastName: string) {
        //mock implementation
        this.currentUser.firstName = firstName
        this.currentUser.lastName = lastName
    }

}