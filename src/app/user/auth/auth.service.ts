import { Injectable } from '@angular/core';
import { IUser } from './user.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router';


@Injectable()
export class AuthService{

    currentUser: IUser

    private loggedIn = new BehaviorSubject<boolean>(false);

    get isLoggedIn(){
        return this.loggedIn.asObservable()
    }

    constructor(private router: Router){
        
    }

    login(userName: string, password: string){
        if(userName !== '' && password != ''){
            this.loggedIn.next(true);
        }

        //REMOVE THIS
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
        this.loggedIn.next(false);
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

    isAuthenticated(){
        return !!this.currentUser;
    }

    updateCurrentUser(firstName: string, lastName:string){
        //mock implementation
        this.currentUser.firstName = firstName
        this.currentUser.lastName = lastName
    }

}