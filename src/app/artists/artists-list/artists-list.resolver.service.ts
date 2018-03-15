import { AuthService } from './../../user/auth/auth.service';
import { IArtist } from './../shared/artist.model';

//This resolver Grabs the data from ArtistListComponent before it renders itself

import { ArtistService } from './../shared/artist.service';
import { Injectable } from "@angular/core";
import { Resolve } from '@angular/router';

@Injectable()
export class ArtistsListResolver implements Resolve<any> {
    constructor(private artistService: ArtistService, private auth: AuthService){}

    resolve(){
        console.log("user logged? " + this.auth.isAuthenticated().toString())
        
        return this.artistService.getArtists();
    }
}