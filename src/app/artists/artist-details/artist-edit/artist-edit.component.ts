import { CountriesService } from './../../shared/countries/countries.service';
import { ArtistService } from './../../shared/artist.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { IArtist } from './../../shared/artist.model';
import { ICountry } from '../../shared/countries/countries.model';
import { ToastrService } from 'ngx-toastr';

@Component({
    templateUrl: 'artist-edit.component.html',
    styleUrls: ['artist-edit.component.css']
})

/// @name ArtistEditComponent
/// This component edits the data for a selected artist. 
export class ArtistEditComponent {

    /// Holds the state of the form fields
    /// @type {boolean}
    isDirty: boolean = true

    /// The current id to get the artist to be retrieved and edited 
    /// @type {string}
    id: string

    /// Stored the current artist data
    /// @type {IArtist}
    artist: IArtist

    // list of coutried dataset for the select field
    countriesList: ICountry[]

    /// Creates an instance of ArtistEditComponent.
    /// @param {Router} router - 
    /// @param {ArtistService} artistService - 
    /// @param {ActivatedRoute} route - 
    /// @param {CountriesService} countries - 
    /// @param {ToastrService} toatr - 
    constructor(private router: Router, private artistService: ArtistService, private route: ActivatedRoute, private countries: CountriesService, private toatr: ToastrService) {
    }

    /// @name ngOnInit
    /// Inits the form with current data
    ngOnInit() {
        this.getCountries()

        this.id = this.route.snapshot.params['id']
        this.artist = this.artistService.getArtistToUpdate()

        if (this.artist.country === null || this.artist.country === undefined) this.artist.country = ''
        if (this.artist.album === null || this.artist.album === undefined) this.artist.album = ''
        if (this.artist.description === null || this.artist.description === undefined) this.artist.description = ''
        // if (this.artist.link === null || this.artist.link === undefined) this.artist.link = ''

        // if (this.artist.songs === null || this.artist.songs === undefined) {
        //     this.artist.songs = { song1: '', song2: '' }
        //}
    }

    /// @name getCountries
    /// get the countries list from service
    getCountries() {
        this.countries.getCountries().subscribe(
            (c: ICountry[]) => {
                this.countriesList = c;
            })
    }

    /// @name editArtist
    /// Calls the Artist Service and passes data for the update
    /// @param {any} formValues - 
    editArtist(formValues) {
        this.artistService.updateArtist(formValues, this.id).subscribe(() => {
            this.router.navigate(['/artists' + '/' + this.id.toString()])
            this.isDirty = false
            this.toatr.success("Artist Updated.")
        });
    }

    /// @name cancel
    /// Action for the cancel button
    cancel() {
        this.router.navigate(['/artists' + '/' + this.id.toString()])
    }

}
