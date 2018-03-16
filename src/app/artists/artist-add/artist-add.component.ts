import { element } from 'protractor';
import { ICountry } from './../shared/countries/countries.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArtistService } from './../shared/artist.service';
import { CountriesService } from '../shared/countries/countries.service';


@Component({
    templateUrl:'artist-add.component.html',
    styleUrls: ['artist-add.component.css']

})

export class ArtistAddComponent implements OnInit{

    isDirty:boolean = true
    countriesList: ICountry[]
    
    constructor(private router:Router, private artistService: ArtistService, private countries: CountriesService){
        
    }
    
    ngOnInit(){
        this.getCountries();
    }

    private getCountries() {
        this.countries.getCountries().subscribe((c: ICountry[]) => {
            this.countriesList = c;
        });
    }

    addArtist(formValues){
        formValues.dateAdded = new Date();
        if(!formValues.songs.song1 && !formValues.songs.song2) formValues.songs = null;
               
        this.isDirty = false
        
        let resp:any;
        this.artistService.saveArtist(formValues).subscribe(
            response => {
                resp = response
                return response;
            }
        );
        this.router.navigate(['/artists'])
    }

    cancel(){
        this.router.navigate(['/artists'])
    }

}
