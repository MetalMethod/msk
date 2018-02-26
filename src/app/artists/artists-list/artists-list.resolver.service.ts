import { ArtistService } from './../shared/artist.service';
import { Injectable } from "@angular/core";
import { Resolve } from '@angular/router'


@Injectable()
export class ArtistsListResolver implements Resolve<any> {
    constructor(private artistService: ArtistService){}

    resolve(){
        //async method acall and return data
        return this.artistService.getArtists().map(artists => artists)
    }
}