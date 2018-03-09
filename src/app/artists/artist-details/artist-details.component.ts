import { Component, OnInit } from '@angular/core';
import { ArtistService } from './../shared/artist.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
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
        //OLD IMPLEMENTATION
        //+ casts to number
        //this.artist = this.artistService.getArtist(+this.route.snapshot.params['id'])

        this.route.params.forEach((params: Params) =>{
            this.artist = this.artistService.getArtist(+params['id'])
            console.log(this.artist)
        })

    }

    editDetails(){
        this.router.navigate(['/artists' + '/' + this.route.snapshot.params['id'] + '/edit'])
    }

    deleteArtist(){
        console.log("Del button clicked")
    }
}