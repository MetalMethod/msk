
//This resolver Grabs the data from ArtistListComponent before it renders itself

import { ArtistService } from './../shared/artist.service';
import { Injectable } from "@angular/core";
import { Resolve } from '@angular/router'

@Injectable()
export class ArtistsListResolver implements Resolve<any> {
    constructor(private artistService: ArtistService){}

    resolve(){
        //async method acall and return data
        //does not requeire to add .subscribe() 
        //because its a resolver and implements Resolve, 
        //that automatically calls subscrice.

        //but calling the hetArtists is dupication the server requests, so the call is done in artist-list component.
        //this.artistService.getArtists()
        return ;
    }
}