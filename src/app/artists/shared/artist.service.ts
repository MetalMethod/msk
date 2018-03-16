import { ArtistDetailsComponent } from './../artist-details/artist-details.component';
import { Injectable, EventEmitter, Output } from '@angular/core';
import { IArtist } from './artist.model';
import { Subject, Observable } from 'rxjs/RX';

// HTTP
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';


// common request options for POST and PUT
const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}


@Injectable()

export class ArtistService {

    ARTISTS: IArtist[]
    artistToUpdate: IArtist;


    @Output() searchData: any;

    constructor(private httpClient: HttpClient) { }

    getArtists(): Observable<IArtist[]> {
        return this.httpClient.get<IArtist[]>("http://localhost:3000/api/artists")
    }

    getArtist(id: string): Observable<IArtist> {

        return this.httpClient.get<IArtist>("http://localhost:3000/api/artists" + "/" + id.toString())
    }

    saveArtist(formValues) {
        formValues.user = "user1"
        return this.httpClient.post<IArtist>("http://localhost:3000/api/artists", formValues, httpOptions)
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }

    public setArtistListData(data) {
        this.ARTISTS = data;
    }

    updateArtist(formValues, id) {

        this.artistToUpdate.name = formValues.name;
        this.artistToUpdate.genre = formValues.genre;
        this.artistToUpdate.description = formValues.description;
        this.artistToUpdate.country = formValues.country;
        this.artistToUpdate.link = formValues.link;
        if (formValues.songs) this.artistToUpdate.songs = formValues.songs;
        this.artistToUpdate.album = formValues.album;

        return this.httpClient.put<IArtist>("http://localhost:3000/api/artists" + "/" + id.toString(), this.artistToUpdate, httpOptions);
    }

    setArtistToUpdate(data) {
        this.artistToUpdate = data
    }

    getArtistToUpdate() {
        return this.artistToUpdate
    }

    deleteArtist(id) {
        return this.httpClient.delete<IArtist>("http://localhost:3000/api/artists/" + "/" + id.toString(), httpOptions);
    }

    searchAll(searchTerm: string): IArtist[] {
        let term = searchTerm.toLocaleLowerCase();
        let result: IArtist[] = [];

        result = this.ARTISTS.filter(artist => {
            if (artist['name'].toLocaleLowerCase().indexOf(term) > -1) { return true };

            if (artist['genre'].toLocaleLowerCase().indexOf(term) > -1) { return true };

            if (artist.description) {
                if (artist['description'].toLocaleLowerCase().indexOf(term) > -1) { return true };
            }

            if (artist.country) {
                if (artist['country'].toLocaleLowerCase().indexOf(term) > -1) { return true };
            }

            if (artist.album) {
                if (artist['album'].toLocaleLowerCase().indexOf(term) > -1) { return true };
            }

            if (artist.songs && artist.songs.song1) {
                if (artist.songs['song1'].toLocaleLowerCase().indexOf(term) > -1) { return true };
            }

            if (artist.songs && artist.songs.song2) {
                if (artist.songs['song2'].toLocaleLowerCase().indexOf(term) > -1) { return true };
            }
        });
        return result;
    }


}
