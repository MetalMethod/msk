import { ArtistDetailsComponent } from './../artist-details/artist-details.component';
import { Injectable, EventEmitter } from '@angular/core';
import { Subject, Observable } from 'rxjs/RX';
import { IArtist } from './artist.model';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// required only if this service requires injecting other services here
// but is good practice to always add Injectable decorator in services
@Injectable()

export class ArtistService {
    
    ARTISTS: IArtist[]

    constructor(private http: Http){}

    getArtists(): Observable<IArtist[]> {   
        return this.http.get("http://www.mocky.io/v2/5aa65e74310000fd21e71572?mocky-delay=500ms")
        .map((response: Response)=>{
            this.ARTISTS = <IArtist[]>response.json()
            return this.ARTISTS;
        }).catch(this.handleError);
    }


    getArtist(id: number): IArtist {
        return this.ARTISTS.find(artist => artist.id === id);
    }

    saveArtist(formValues) {
        formValues.id = Math.max.apply(null, this.ARTISTS.map(artist => artist.id)) + 1;

        if(!formValues.songs.song1 && !formValues.songs.song2) formValues.songs = null;

        this.ARTISTS.push(formValues)
    }

    updateArtist(formValues, id) {
        let selectedArtist = this.getArtist(id)
        selectedArtist.name = formValues.name
        selectedArtist.genre = formValues.genre
        selectedArtist.description = formValues.description
        selectedArtist.country = formValues.country
        selectedArtist.link = formValues.link
        if(formValues.songs) selectedArtist.songs = formValues.songs
        selectedArtist.album = formValues.album
    }

    searchAll(searchTerm: string) {
        var term = searchTerm.toLocaleLowerCase();
        var result: IArtist[] = [];
        // TODO: reimplementation of searchAll
        //debugger
        result = this.ARTISTS.filter(artist => {
            if (artist['name'].toLocaleLowerCase().indexOf(term) > -1) {return true};

            if (artist['genre'].toLocaleLowerCase().indexOf(term) > -1) {return true};

            if (artist.description) {
                if (artist['description'].toLocaleLowerCase().indexOf(term) > -1) {return true};
            }

            if (artist.country) {
                if (artist['country'].toLocaleLowerCase().indexOf(term) > -1) {return true};
            }

            if (artist.album) {
                if (artist['album'].toLocaleLowerCase().indexOf(term) > -1) {return true};
            }

            if (artist.songs && artist.songs.song1) {
                if (
                    artist.songs['song1'].toLocaleLowerCase().indexOf(term) > -1
                    || artist.songs['song2'].toLocaleLowerCase().indexOf(term) > -1
                ) {return true};
            }

        });

        var emitter = new EventEmitter(true);
        setTimeout(() => {
            emitter.emit(result);
        }, 100);
        return emitter;
    }

    private handleError(error: Response){
        return Observable.throw(error.statusText);
    }

}
