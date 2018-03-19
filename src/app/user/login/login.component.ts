import { Component } from '@angular/core';
import { AuthService } from './../auth/auth.service';
import { Router } from '@angular/router';
import { IUser } from '../auth/user.model';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']

})

/// @name LoginComponent
/// Login page component 
export class LoginComponent {

    /// State of error message in login form
    /// @type {boolean}
    unauthorized: boolean = false;

    /// Creates an instance of LoginComponent.
    /// @param {AuthService} authService - 
    /// @param {Router} router - 
    constructor(private authService: AuthService, private router: Router) {
    }

    /// @name login
    /// calls service for login
    /// @param {any} formValues - values from the login form 
    login(formValues) {
        this.validateUserName(formValues.userName);
        this.validatePasswordName(formValues.password);

        this.authService.login(formValues.userName, formValues.password)
    }

    /// @name cance
    /// Action for the cancel button
    cancel() {
        this.router.navigate(['artists'])
    }

    /// @name validateUserName
    /// Validates username
    /// @param {any} userName - 
    /// @returns {any} - 
    validateUserName(userName):boolean {
        return userName.valid || userName.untouched
    }

    /// @name validatePasswordName
    /// Validates password
    /// @param {any} password - 
    /// @returns {any} - boolean
    validatePasswordName(password):boolean {
        return password.valid || password.untouched
    }

}