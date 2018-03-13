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

    addArtist(formValues){debugger
        formValues.dateAdded = new Date();

        let resp:any;

        this.artistService.saveArtist(formValues).subscribe(
            response => {
                resp = response
                console.log(resp)
                return response;
            }
        );
        this.isDirty = false
        //this.router.navigate(['/artists'])
    }

    cancel(){
        this.router.navigate(['/artists'])
    }

}
