import { Component, OnInit } from '@angular/core';
import { ArtistService } from './../shared/artist.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'artist-details',
    templateUrl: 'artist-details.component.html',
    styleUrls: ['artist-details.component.css']
})
export class ArtistDetailsComponent implements OnInit{

    artist: any

    constructor(private artistService:ArtistService, private route:ActivatedRoute){ 
    }

    ngOnInit(){
        //+ casts to number
        this.artist = this.artistService.getArtist(+this.route.snapshot.params['id'])
    }
}