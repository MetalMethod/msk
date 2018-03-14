import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ArtistService } from './../shared/artist.service';


@Component({
    templateUrl:'artist-add.component.html',
    styleUrls: ['artist-add.component.css']

})

export class ArtistAddComponent{

    isDirty:boolean = true

    constructor(private router:Router, private artistService: ArtistService){

    }

    addArtist(formValues){
        formValues.dateAdded = new Date();
        if(!formValues.songs.song1 && !formValues.songs.song2) formValues.songs = null;
               
        this.isDirty = false
        
        let resp:any;
        this.artistService.saveArtist(formValues).subscribe(
            response => {
                resp = response
                console.log(resp)
                return response;
            }
        );
        this.router.navigate(['/artists'])
    }

    cancel(){
        this.router.navigate(['/artists'])
    }

}
