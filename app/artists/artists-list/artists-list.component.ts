import { Component, OnInit } from '@angular/core'
import { ArtistService } from './../shared/artist.service';

@Component({
    selector: 'artists-list',
    templateUrl: 'app/artists/artists-list/artists-list.component.html',
    styleUrls: ['app/artists/artists-list/artists-list.component.css']
})

export class ArtistsListComponent implements OnInit{
    artists:any[]

    //injecting the service
    constructor( private artistService: ArtistService){
    }
    
    //event callend when the component is first loaded
    ngOnInit(){
        this.artists = this.artistService.getArtists()
        
    }

}
