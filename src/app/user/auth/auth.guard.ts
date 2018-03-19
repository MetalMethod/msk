import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()

/// @name AuthGuard
/// Guards routes if user is not authenticated.
/// @implements {CanActivate}
export class AuthGuard implements CanActivate {
    
    /// Creates an instance of AuthGuard.
    /// @param {AuthService} authService - 
    /// @param {Router} router - 
    constructor(private authService: AuthService, private router: Router) { }

    /// @name canActivate
    /// Checks if the user is authenticated and sends it to login if it is not.
    /// @returns {{boolean}} - 
    canActivate(): boolean {
        if (!this.authService.isLoggedIn()) {
            this.router.navigate(['/user/login']);
            return false;
        }
        return true;
    }
}