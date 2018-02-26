import { Component, OnInit } from '@angular/core'
import { ArtistService } from './../shared/artist.service';
//import { ToastrService } from './../../common/toastr.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'artists-list',
    templateUrl: 'artists-list.component.html',
    styleUrls: ['artists-list.component.css']
})

export class ArtistsListComponent implements OnInit{
    artists:any

    //injecting the service
    // constructor( private artistService: ArtistService, private  toastrService: ToastrService){
    constructor( private artistService: ArtistService, private route:ActivatedRoute){

    }
    
    ngOnInit(){
        //event callend when the component is first loaded
        //this.artists = this.artistService.getArtists().subscribe(artists => {this.artists = artists})
        this.artists = this.route.snapshot.data['artists']
        
    }

    handleThumbnailClick(artistName){
        //this.toastrService.warning(artistName)
        console.log("click")
    }

}
