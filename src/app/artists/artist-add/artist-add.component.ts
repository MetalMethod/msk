import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    templateUrl:'artist-add.component.html'

})

export class ArtistAddComponent{

    isDirty:boolean = true

    constructor(private router:Router){

    }

    cancel(){
        this.router.navigate(['/artists'])
    }

}