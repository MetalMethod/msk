
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
        //because its a resolver and implements REsolve, that automatically calls subscrice.
        return this.artistService.getArtists().subscribe()
    }
}