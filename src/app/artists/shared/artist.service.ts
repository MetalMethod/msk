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

/// @name ArtistService
/// Service responsible for get, post and update artist data
export class ArtistService {

    /// Main list of artists
    /// @type {IArtist[]}
    ARTISTS: IArtist[]

    /// Temporary container of data to be updated
    /// @type {IArtist}
    artistToUpdate: IArtist;

    /// Creates an instance of ArtistService.
    /// @param {HttpClient} httpClient - 
    constructor(private httpClient: HttpClient) { }

    /// @name getArtists
    /// Calls server and gets data for all artists
    /// @returns {{Observable<IArtist[]>}} - observable with list of all artists
    getArtists(): Observable<IArtist[]> {
        return this.httpClient.get<IArtist[]>("http://localhost:3000/api/artists")
    }

    /// @name getArtist
    /// Calls server and gets data for a single artist, using the id
    /// @param {string} id - 
    /// @returns {{Observable<IArtist>}} - observable with single artist data
    getArtist(id: string): Observable<IArtist> {
        return this.httpClient.get<IArtist>("http://localhost:3000/api/artists" + "/" + id.toString())
    }

    /// @name saveArtist
    /// Calls the server with a new artist data to add
    /// @param {any} formValues - values from form
    saveArtist(formValues) {
        formValues.user = "user1"
        return this.httpClient.post<IArtist>("http://localhost:3000/api/artists", formValues, httpOptions)
    }

    /// @name handleError
    /// Handles error for http requests
    /// @private
    /// @param {Response} error - error to handle
    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }

    /// @name setArtistListData
    /// Sets a list of artists as the current data, done everytime a new request for all artists is done
    /// @public
    public setArtistListData(data) {
        this.ARTISTS = data;
    }

    /// @name updateArtist
    /// Calls server and update a single artist data using id
    /// @param {any} formValues - 
    /// @param {any} id - 
    updateArtist(formValues, id) {
        this.artistToUpdate.name = formValues.name;
        this.artistToUpdate.genre = formValues.genre;
        this.artistToUpdate.description = formValues.description;
        this.artistToUpdate.country = formValues.country;
        this.artistToUpdate.link = formValues.link;
        this.artistToUpdate.album = formValues.album;

        if (formValues.songs) this.artistToUpdate.songs = formValues.songs;

        return this.httpClient.put<IArtist>("http://localhost:3000/api/artists" + "/" + id.toString(), this.artistToUpdate, httpOptions);
    }

    /// @name setArtistToUpdate
    /// Stores the data for update
    /// @param {any} data - 
    setArtistToUpdate(data) {
        this.artistToUpdate = data
    }

    /// @name getArtistToUpdate
    /// Retrieves the data to update
    getArtistToUpdate() {
        return this.artistToUpdate
    }

    /// @name deleteArtist
    /// Calls the server and deletes the artist using id
    /// @param {any} id - 
    deleteArtist(id) {
        return this.httpClient.delete<IArtist>("http://localhost:3000/api/artists/" + "/" + id.toString(), httpOptions);
    }

    /// @name searchAll
    /// Search artists using Name, Genre, desciption, album and songs data.
    /// @param {string} searchTerm - the term to search for
    /// @returns {{IArtist[]}} - a new lis of found artists to be shown in the results modal window.
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
