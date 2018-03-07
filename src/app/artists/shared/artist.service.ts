import { ArtistDetailsComponent } from './../artist-details/artist-details.component';
import { Injectable, EventEmitter } from '@angular/core';
import { Subject, Observable } from 'rxjs/RX';
import { IArtist } from './artist.model';

// required only if this service requires injecting other services here
// but is good practice to always add Injectable decorator in services
@Injectable()

export class ArtistService {


    getArtists(): Observable<IArtist[]> {
        //add async request, with a simulated delay
        let subject = new Subject<IArtist[]>()
        setTimeout(() => {
            subject.next(ARTISTS);
            subject.complete();
        }, 100
        )
        return subject;
    }

    getArtist(id: number): IArtist {
        return ARTISTS.find(artist => artist.id === id);
    }

    saveArtist(formValues) {
        formValues.id = Math.max.apply(null, ARTISTS.map(artist => artist.id)) + 1;
        ARTISTS.push(formValues)
    }

    updateArtist(formValues, id) {
        let selectedArtist = this.getArtist(id)
        selectedArtist.name = formValues.name
        selectedArtist.genre = formValues.genre
        selectedArtist.description = formValues.description
        selectedArtist.album = formValues.album
        selectedArtist.country = formValues.country
        selectedArtist.link = formValues.link
        selectedArtist.songs = formValues.songs
    }

    searchAll(searchTerm: string) {
        var term = searchTerm.toLocaleLowerCase();
        var result: IArtist[] = [];
        // TODO: reimplementation of searchAll
        //debugger
        result = ARTISTS.filter(artist => {
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

}

//mock data to be added in database / API
let ARTISTS: IArtist[] = [
    {
        id: 1,
        name: 'Name One',
        genre: 'Jazz',
        description: 'Being a developer in 2037 is about more than just writing bug-free code. You also have to look the part.',
        country: 'Portugal',
        link: 'www.google.com',
        songs: {
            song1: 'good one',
            song2: 'kinda good',
        },
        album: 'Green album',
        user: 'user1',
        dateAdded: new Date('5/4/2027')
    },
    {
        id: 2,
        name: 'Two',
        genre: 'Classical',
        description: 'Coinciding with the release of Star Wars Episode 18, this talk will show how to use directives in your Angular 4 development',
        user: 'user1',
        dateAdded: new Date('5/4/2027')
    },
    {
        id: 3,
        name: 'Three',
        genre: 'Metal',
        description: 'Sometimes our internal biases can make it difficult forthese well-designed coworkers to really feel at home coding alongside us.',
        country: 'Portugal',
        link: 'www.google.com',
        songs: {
            song1: 'www.google.com',
            song2: 'www.wikipedia.org',
        },
        user: 'user1',
        dateAdded: new Date('12/14/2068')
    },
    {
        id: 4,
        name: 'Four',
        genre: 'Fusion',
        description: 'Angular has been used in most of the major peace brokering that has happened in the last decade',
        country: 'Portugal',
        link: 'www.google.com',
        songs: {
            song1: 'www.google.com',
            song2: 'www.wikipedia.org',
        },
        album: 'Dirty Dance',
        user: 'user1',
        dateAdded: new Date('5/4/2027')
    },
    {
        id: 5,
        name: 'Five',
        genre: 'Funk',
        description: 'We all know that Angular is used in most waiter-bots and coke vending machines, but did you know that was also used to write the core engine in the majority of voting machines? ',
        country: 'Portugal',
        user: 'user1',
        dateAdded: new Date('5/4/2027')
    },
    {
        id: 6,
        name: 'Name Six',
        genre: 'Reggae',
        description: 'Let\'s take a look at some of the stranger pieces of Angular 4, including neural net nets, Android in Androids, and using pipes with actual pipes.',
        user: 'user1',
        dateAdded: new Date('5/23/2068')
    },
    {
        id: 7,
        name: 'Name Seven',
        genre: 'Metal',
        description: 'Coinciding with the release of Star Wars Episode 18, this talk will show how to use directives in your Angular 4 development',
        country: 'Portugal',
        user: 'user1',
        dateAdded: new Date('5/4/2027')
    }
]
//end of mock data array