import { Component, OnInit } from '@angular/core';
import { ArtistService } from './../shared/artist.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { IArtist } from './../shared/artist.model';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'artist-details',
    templateUrl: 'artist-details.component.html',
    styleUrls: ['artist-details.component.css']
})
export class ArtistDetailsComponent implements OnInit{

    artist: IArtist

    //my own implementation
    private currentId: number

    constructor(private artistService:ArtistService, private route:ActivatedRoute, private router:Router, private toastr: ToastrService){ 
    }

    ngOnInit(){
        this.route.params.forEach((params: Params) =>{
           this.artist = this.route.snapshot.data['artist']
        })

    }

    editDetails(){
        this.artistService.setArtistToUpdate(this.artist)
        this.router.navigate(['/artists' + '/' + this.artist.id.toString() + '/edit'])
    }

    deleteArtist(){
        let id = this.artist.id;
        this.artistService.deleteArtist(id).subscribe(
            ()=>{
                this.toastr.success("Artist Deleted.")
            }
        );
        this.router.navigate(['/artists'])
    }
}