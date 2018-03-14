import { ArtistDetailsComponent } from './../artist-details/artist-details.component';
import { Injectable, EventEmitter, Output } from '@angular/core';
import { IArtist } from './artist.model';
import { Subject, Observable } from 'rxjs/RX';

// HTTP
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';


// common request options for POST
const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':  'application/json'
    })    
}


@Injectable()

export class ArtistService {
    
    ARTISTS: IArtist[]

    @Output() searchData : any;

    constructor(private httpClient: HttpClient){}

    getArtists(): Observable<IArtist[]>  {
        return this.httpClient.get<IArtist[]>("http://www.mocky.io/v2/5aa65e74310000fd21e71572?mocky-delay=500ms")
    }

    getArtist(id: number): IArtist {
        let result: IArtist = this.ARTISTS.find(artist => artist.id === id);
        if(result){
            return result
        } else {
            return;
        } 
    }

    saveArtist(formValues)   {
        //formValues.id = Math.max.apply(null, this.ARTISTS.map(artist => artist.id)) + 1;

        let headers = new Headers({})

        
        return this.httpClient.post<IArtist>("http://www.mocky.io/v2/5aa909ce320000cb2b165aa6?mocky-delay=600ms", formValues, httpOptions)
        // .pipe(
        //     catchError(this.handleError)
        // )
       
        //this.ARTISTS.push(formValues)
    }

    private handleError(error: Response){
        return Observable.throw(error.statusText);
    }

    public setArtistListData(data) {
        this.ARTISTS = data
    }

    updateArtist(formValues, id) {
        let artistToUpdate = this.getArtist(id)
        artistToUpdate.name = formValues.name
        artistToUpdate.genre = formValues.genre
        artistToUpdate.description = formValues.description
        artistToUpdate.country = formValues.country
        artistToUpdate.link = formValues.link
        if(formValues.songs) artistToUpdate.songs = formValues.songs
        artistToUpdate.album = formValues.album

        return this.httpClient.post<IArtist>("http://www.mocky.io/v2/5aa909ce320000cb2b165aa6?mocky-delay=600ms", artistToUpdate, httpOptions)
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
    

}
