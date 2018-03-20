import { element } from 'protractor';
import { ICountry } from './../shared/countries/countries.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArtistService } from './../shared/artist.service';
import { CountriesService } from '../shared/countries/countries.service';
import { ToastrService } from 'ngx-toastr';
import { SimpleModalComponent } from './../../common/simple-modal/simple-modal.component';

@Component({
    templateUrl: 'artist-add.component.html',
    styleUrls: ['artist-add.component.css']
})

/// @name ArtistAddComponent
/// Component responsible to pass form data for a new artist to the artist.service
/// @implements {OnInit}
export class ArtistAddComponent implements OnInit {

    /// checks if input field is dirty, used for validation messages
    /// @type {boolean}
    isDirty: boolean = true

    /// container for the coutries list retrieved from the server
    /// @type {ICountry[]}
    countriesList: ICountry[]

    /// Creates an instance of ArtistAddComponent.
    /// @param {Router} router - 
    /// @param {ArtistService} artistService - 
    /// @param {CountriesService} countries - 
    /// @param {ToastrService} toastr - 
    constructor( 
        private router: Router, 
        private artistService: ArtistService, 
        private countries: CountriesService, 
        private toastr: ToastrService,
        private modal: SimpleModalComponent
    ) { }

    /// @name ngOnInit
    /// executes when component is initialized
    ngOnInit() {
        this.getCountries();
    }

    /// @name getCountries
    /// makes the call to coutries services and retrieves the reultiing list 
    /// @private
    private getCountries() {
        this.countries.getCountries().subscribe((c: ICountry[]) => {
            this.countriesList = c;
        });
    }

    /// @name addArtist
    /// passes data to artist service for adding new artist
    /// @param {any} formValues - values from the form
    addArtist(formValues) {
        formValues.dateAdded = new Date();
        if (!formValues.songs.song1 && !formValues.songs.song2) formValues.songs = null;

        this.isDirty = false

        let resp: any;
        this.artistService.saveArtist(formValues).subscribe(
            response => {
                resp = response
                this.toastr.success("Artist Added.use")
                return response;
            }
        );
        this.router.navigate(['/artists'])
    }

    /// @name cancel
    /// Action for the cancel button
    cancel() {
        this.modal.closeModal();
        this.router.navigate(['/artists'])
    }

}
