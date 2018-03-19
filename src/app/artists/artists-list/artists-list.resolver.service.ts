import { AuthService } from './../../user/auth/auth.service';
import { IArtist } from './../shared/artist.model';
import { ArtistService } from './../shared/artist.service';
import { Injectable } from "@angular/core";
import { Resolve } from '@angular/router';

@Injectable()

//This resolver Grabs the data from ArtistListComponent before it renders itself
export class ArtistsListResolver implements Resolve<any> {
    constructor(private artistService: ArtistService, private auth: AuthService) { }

    /// @name resolve
    /// Calls service for artist date before rendering the list 
    resolve() {
        return this.artistService.getArtists();
    }
}