import { ArtistService } from './../../shared/artist.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { IArtist } from './../../shared/artist.model';


@Component({
    templateUrl:'artist-edit.component.html',
    styleUrls: ['artist-edit.component.css']

})

export class ArtistEditComponent{

    isDirty:boolean = true
    id:number
    artist: IArtist
    constructor(private router:Router, private artistService: ArtistService, private route:ActivatedRoute){
        
    }
    
    ngOnInit(){
        //+ casts to number
        this.id = +this.route.snapshot.params['id']
        this.artist = this.artistService.getArtist(this.id)

        if(this.artist.country === null || this.artist.country === undefined) this.artist.country = ''
        if(this.artist.album === null || this.artist.album === undefined) this.artist.album = ''
        if(this.artist.description === null || this.artist.description === undefined) this.artist.description = ''
        if(this.artist.link === null || this.artist.link === undefined) this.artist.link = ''
        
        if(this.artist.songs === null || this.artist.songs === undefined) {
            this.artist.songs = {song1: '', song2: '' }
        }
    }

    editArtist(formValues){
        this.artistService.updateArtist(formValues, this.id).subscribe( ()=>{
            this.router.navigate(['/artists' + '/' + this.id.toString()])
            this.isDirty = false
        });
    }

    cancel(){
        this.router.navigate(['/artists' + '/' + this.id.toString()])        
    }

}
