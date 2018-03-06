import { Component, OnInit } from '@angular/core';
import { ArtistService } from './../shared/artist.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IArtist } from './../shared/artist.model';

@Component({
    selector: 'artist-details',
    templateUrl: 'artist-details.component.html',
    styleUrls: ['artist-details.component.css']
})
export class ArtistDetailsComponent implements OnInit{

    artist: IArtist

    constructor(private artistService:ArtistService, private route:ActivatedRoute, private router:Router){ 
    }

    ngOnInit(){
        //+ casts to number
        this.artist = this.artistService.getArtist(+this.route.snapshot.params['id'])
    }

    editDetails(){
        this.router.navigate(['/artists' + '/' + this.route.snapshot.params['id'] + '/edit'])
    }
}