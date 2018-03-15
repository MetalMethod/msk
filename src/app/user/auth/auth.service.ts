import { Injectable } from '@angular/core';
import { IUser } from './user.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router';


@Injectable()
export class AuthService{

    currentUser: IUser

    private loggedIn:boolean = false;

    public isLoggedIn():boolean {
        return this.loggedIn
    }

    constructor(private router: Router){
        
    }

    login(userName: string, password: string){
        if(userName !== '' && password != ''){
            this.loggedIn = true;
        }

        //REMOVE THIS, this user date must be added on login, but must come from the server
        this.currentUser = {
            id:"dfwdve1",
            userName: userName,
            password: password,
            firstName: 'Igor',
            lastName: 'Busquets',
            email: 'igor@busquets.com'
            }
    }

    logout(){
        this.loggedIn = false;
    }

    // loginUser(userName: string, password: string){
    //     this.currentUser = {
    //         id:1,
    //         userName: userName,
    //         firstName: 'Igor',
    //         lastName: 'Busquets',
    //         email: 'igor@busquets.com'
    //     }
    // }

    isAuthenticated():boolean{
        //return !!this.currentUser;
        return this.isLoggedIn()
    }

    updateCurrentUser(firstName: string, lastName:string){
        //mock implementation
        this.currentUser.firstName = firstName
        this.currentUser.lastName = lastName
    }

}