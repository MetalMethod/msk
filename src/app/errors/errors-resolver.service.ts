import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { Injectable } from "@angular/core";
import { Resolve } from '@angular/router'
import { ToastrService } from 'ngx-toastr';

@Injectable()

/// @name ArtistResolver
/// This resolver Grabs the data from ArtistListComponent before it renders itself
/// @implements {Resolve<any>}
export class ErrorResolver implements Resolve<any> {

    /// Creates an instance of ArtistResolver.
    /// @param {ArtistService} artistService - 
    /// @param {Router} router - 
    constructor(private router: Router, private toastr: ToastrService) { }

    /// @name resolve
    /// @param {ActivatedRouteSnapshot} route - 
    /// @returns {any} - 
    resolve(route: ActivatedRouteSnapshot) {
        this.toastr.warning("Sorry, that URL doesn't exist")
        return this.router.navigate(['/artists'])
    }
}