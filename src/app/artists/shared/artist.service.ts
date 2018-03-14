import { ArtistDetailsComponent } from './../artist-details/artist-details.component';
import { Injectable, EventEmitter, Output } from '@angular/core';
import { Subject, Observable } from 'rxjs/RX';
import { IArtist } from './artist.model';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// required only if this service requires injecting other services here
// but is good practice to always add Injectable decorator in services
@Injectable()

export class ArtistService {
    
    ARTISTS: IArtist[]

    @Output() searchData : any;

    constructor(private http: Http){}

    getArtists(): Observable<IArtist[]> {
        return this.http.get("http://www.mocky.io/v2/5aa65e74310000fd21e71572?mocky-delay=500ms")
        .map((response: Response)=>{
            this.ARTISTS = <IArtist[]>response.json()
            return this.ARTISTS;
        }).catch(this.handleError);
    }


    getArtist(id: number): IArtist {
        let result: IArtist = this.ARTISTS.find(artist => artist.id === id);
        if(result){
            return result
        } else {
            return;
        } 
    }

    saveArtist(formValues) {
        formValues.id = Math.max.apply(null, this.ARTISTS.map(artist => artist.id)) + 1;

        let headers = new Headers({'Content-Type':  'application/json'})
        let options = new RequestOptions({headers: headers})
        
        return this.http.post("http://www.mocky.io/v2/5aa7ebcb2f00005c1e8ea81f?mocky-delay=600ms", JSON.stringify(formValues), options)
       
        // .map((response: Response)=>{
        //     let temp = response.json()
        //     console.log(temp)

        //     return response.json();

        // }).catch(this.handleError);
       
        //this.ARTISTS.push(formValues)
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

    searchAll(searchTerm: string): IArtist[]  {
        let term = searchTerm.toLocaleLowerCase();
        let result: IArtist[] = [];

        // if(!this.ARTISTS) {
        //     console.log("no ARTISTS")
        //     return;
        // }
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
                if (artist.songs['song1'].toLocaleLowerCase().indexOf(term) > -1) {return true};
            }

            if (artist.songs && artist.songs.song2) {
                if (artist.songs['song2'].toLocaleLowerCase().indexOf(term) > -1) {return true};
            }
        
        });

        return result;
    }

    private handleError(error: Response){
        return Observable.throw(error.statusText);
    }

}
