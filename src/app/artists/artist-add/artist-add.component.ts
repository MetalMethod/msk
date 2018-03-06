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
        console.log(formValues.dateAdded)
        this.artistService.saveArtist(formValues);
        this.isDirty = false
        this.router.navigate(['/artists'])
    }

    cancel(){
        this.router.navigate(['/artists'])
    }

}
