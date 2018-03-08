import { ArtistService } from './../artists/shared/artist.service';
import { Component, Output, Injectable } from '@angular/core'
import { AuthService } from './../user/auth/auth.service';
import { IArtist } from './../artists/shared/artist.model';
import { SimpleModalComponent } from '../common/simple-modal/simple-modal.component';


@Component({
    selector: 'nav-bar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.css']
})

@Injectable()
export class NavBarComponent{
    
    searchTerm: string = "";
    foundArtists: IArtist[];

    constructor(private auth:AuthService, private artistService:ArtistService, private modal: SimpleModalComponent){

    }

    onSearch(){
    }
    
    searchAll(searchTerm: string){
        this.foundArtists = []
        
        this.artistService.searchAll(searchTerm).subscribe
        (artists => {
            this.foundArtists = artists;
            console.log(this.foundArtists)
        })
    }


}