import { Component, OnInit, Input, OnChanges } from '@angular/core'
import { ArtistService } from './../shared/artist.service';
import { ActivatedRoute } from '@angular/router';
import { IArtist } from './../shared/artist.model';

@Component({
    selector: 'artists-list',
    templateUrl: 'artists-list.component.html',
    styleUrls: ['artists-list.component.css']
})

export class ArtistsListComponent implements OnInit, OnChanges{
    
    artists:IArtist[]
    visibleArtist: IArtist[]
    sortBy: string
    errorMessage: any

    constructor( private artistService: ArtistService, private route:ActivatedRoute){

    }
    
    ngOnInit(){
        //event called when the component is first loaded
       this.artistService.getArtists().subscribe(
            (artists: IArtist[]) => {
                this.artists = artists;
                this.sortArtists('date');
                //pass list of artists to the service so it can serach serve the details page
                this.artistService.setArtistListData(artists)
            })
    
    }

    handleThumbnailClick(artistName){
    }

    ngOnChanges(){
    }

    sortArtists(filterValue: string){
        if(filterValue === 'date') this.artists.sort(sortByDateAsc) 
        if(filterValue === 'name') this.artists.sort(sortByNameAsc)
        if(filterValue === 'genre') this.artists.sort(sortByGenreAsc)
    }

}

function sortByDateAsc(a1: IArtist, a2: IArtist){
    if(a1.id < a2.id) return 1
    else if(a1.dateAdded === a2.dateAdded) return 0
    else return -1
}

function sortByNameAsc(a1: IArtist, a2: IArtist){
    if(a1.name > a2.name) return 1
    else if(a1.name === a2.name) return 0
    else return -1
}

function sortByGenreAsc(a1: IArtist, a2: IArtist){
    if(a1.genre > a2.genre) return 1
    else if(a1.genre === a2.genre) return 0
    else return -1
}

