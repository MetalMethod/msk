import { Component, OnInit } from '@angular/core';
import { ArtistService } from './../shared/artist.service';

@Component({
    selector: 'artist-details',
    templateUrl: 'artist-details.component.html',
    styleUrls: ['artist-details.component.css']
})
export class ArtistDetailsComponent implements OnInit{

    artist: any

    constructor(private artistService:ArtistService){ 
    }

    ngOnInit(){
        this.artist = this.artistService.getArtist(9)
    }
}