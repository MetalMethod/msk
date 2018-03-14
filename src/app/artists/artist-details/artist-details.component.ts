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

    //my own implementation
    private currentId: number

    constructor(private artistService:ArtistService, private route:ActivatedRoute, private router:Router){ 
    }

    ngOnInit(){
        //+ casts to number
        this.route.params.forEach((params: Params) =>{
           // this.artist = this.artistService.getArtist(+params['id'])
           this.artist = this.route.snapshot.data['artist']
        })

    }

    editDetails(){
        this.router.navigate(['/artists' + '/' + this.artist.id.toString() + '/edit'])
    }

    deleteArtist(){
        //console.log("Del button clicked")
        let id = this.artist.id;
        this.artistService.deleteArtist(id).subscribe();
        this.router.navigate(['/artists'])
    }
}