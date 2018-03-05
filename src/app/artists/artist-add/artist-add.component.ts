import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    templateUrl:'artist-add.component.html',
    styleUrls: ['artist-add.component.css']

})

export class ArtistAddComponent{

    isDirty:boolean = true

    constructor(private router:Router){

    }

    addArtist(formValues){
        console.log(formValues);
    }

    cancel(){
        this.router.navigate(['/artists'])
    }

}