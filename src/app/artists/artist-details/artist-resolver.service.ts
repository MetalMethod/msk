import { ActivatedRouteSnapshot, Router } from '@angular/router';

//This resolver Grabs the data from ArtistListComponent before it renders itself

import { ArtistService } from './../shared/artist.service';
import { Injectable } from "@angular/core";
import { Resolve } from '@angular/router'

@Injectable()
export class ArtistResolver implements Resolve<any> {
    constructor(private artistService: ArtistService, private router:Router){}

    resolve(route: ActivatedRouteSnapshot){
        
       return this.artistService.getArtist(route.params['id']);
        
    }
}