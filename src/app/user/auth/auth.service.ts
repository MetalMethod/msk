import { Injectable } from '@angular/core';
import { IUser } from './user.model';


@Injectable()
export class AuthService{

    currentUser: IUser

    loginUser(userName: string, password: string){
        this.currentUser = {
            id:1,
            userName: userName,
            firstName: 'Igor',
            lastName: 'Busquets',
            email: 'igor@busquets.com'
        }
    }

    isAuthenticated(){
        return !!this.currentUser;
    }

    updateCurrentUser(firstName: string, lastName:string){
        //mock implementation
        this.currentUser.firstName = firstName
        this.currentUser.lastName = lastName
    }

}