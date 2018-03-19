import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { ArtistService } from './../shared/artist.service';
import { Injectable } from "@angular/core";
import { Resolve } from '@angular/router'

@Injectable()

/// @name ArtistResolver
/// This resolver Grabs the data from ArtistListComponent before it renders itself
/// @implements {Resolve<any>}
export class ArtistResolver implements Resolve<any> {
    
    /// Creates an instance of ArtistResolver.
    /// @param {ArtistService} artistService - 
    /// @param {Router} router - 
    constructor(private artistService: ArtistService, private router:Router){}

    /// @name resolve
    /// @param {ActivatedRouteSnapshot} route - 
    /// @returns {any} - 
    resolve(route: ActivatedRouteSnapshot){
       return this.artistService.getArtist(route.params['id']);
    }
}