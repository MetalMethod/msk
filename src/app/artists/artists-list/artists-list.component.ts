import { Component, OnInit, Input, OnChanges } from '@angular/core'
import { ArtistService } from './../shared/artist.service';
import { ActivatedRoute } from '@angular/router';
import { IArtist } from './../shared/artist.model';

@Component({
    selector: 'artists-list',
    templateUrl: 'artists-list.component.html',
    styleUrls: ['artists-list.component.css']
})

/// @name ArtistsListComponent
/// This components build the list of artists thumbnails 
/// @implements {OnInit}
/// @implements {OnChanges}
export class ArtistsListComponent implements OnInit {

    /// The list of all users 
    /// @type {IArtist[]}
    artists: IArtist[]

    /// Creates an instance of ArtistsListComponent.
    /// @param {ArtistService} artistService - 
    /// @param {ActivatedRoute} route - 
    constructor(private artistService: ArtistService, private route: ActivatedRoute) {
    }

    //event called when the component is first loaded
    ngOnInit() {
        this.artistService.getArtists().subscribe(
            (artists: IArtist[]) => {
                this.artists = artists;
                this.sortArtists('date');
                //pass list of artists to the service so it can serach serve the details page
                this.artistService.setArtistListData(artists)
            })
    }

    /// @name sortArtists
    /// Calls specific sorting action depending on the radio button clicked in template
    /// @param {string} filterValue - state of sorting from the forms's radio buttons
    sortArtists(filterValue: string) {
        if (filterValue === 'date') this.artists.sort(sortByDateAsc)
        if (filterValue === 'name') this.artists.sort(sortByNameAsc)
        if (filterValue === 'genre') this.artists.sort(sortByGenreAsc)
    }
}


///Auxiliary Functions

/// @name sortByDateAsc
/// Implementation of sorting by date
/// @param {IArtist} a1 - first element of artists list
/// @param {IArtist} a2 - last element of artists list
function sortByDateAsc(a1: IArtist, a2: IArtist) {
    if (a1.id < a2.id) return 1
    else if (a1.dateAdded === a2.dateAdded) return 0
    else return -1
}

/// @name sortByDateAsc
/// Implementation of sorting by name
/// @param {IArtist} a1 - first element of artists list
/// @param {IArtist} a2 - last element of artists list
function sortByNameAsc(a1: IArtist, a2: IArtist) {
    if (a1.name > a2.name) return 1
    else if (a1.name === a2.name) return 0
    else return -1
}

/// @name sortByDateAsc
/// Implementation of sorting by genre
/// @param {IArtist} a1 - first element of artists list
/// @param {IArtist} a2 - last element of artists list
function sortByGenreAsc(a1: IArtist, a2: IArtist) {
    if (a1.genre > a2.genre) return 1
    else if (a1.genre === a2.genre) return 0
    else return -1
}

