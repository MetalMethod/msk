import { ArtistService } from './../artists/shared/artist.service';
import { Component, Output } from '@angular/core'
import { AuthService } from './../user/auth/auth.service';
import { IArtist } from './../artists/shared/artist.model';

@Component({
    selector: 'nav-bar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.css']
})

export class NavBarComponent{
    
    searchTerm: string = "";
    foundArtists: IArtist[];

    constructor(private auth:AuthService, private artistService:ArtistService){

    }

    searchAll(searchTerm: string){
        this.foundArtists = []

        this.artistService.searchAll(searchTerm).subscribe
        (artists => {
            this.foundArtists = artists;
            console.log(this.foundArtists)
        })
    }


}