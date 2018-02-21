import { Component } from '@angular/core'

@Component({
    selector: 'artists-list',
    templateUrl: 'app/artists/artists-list.component.html',
    styleUrls: ['app/artists/artists-list.component.css']
})

export class ArtistsListComponent{

    //mock data to be added in database / API
    artist1 = {
        id: 1,
        name: 'Name One',
        genre: 'Some genre',
        description: 'some description here some description here some description here some description here some description here some description here.',
        country: 'Portugal',
        user: 'user1',
        imageUrl: '/app/assets/images/angularconnect-shield.png',
        songs: {
            song1: 'Song1 name',
            song2: 'Song2 name',
            song3: 'Song3 name',
        },
        links: {
            link1: 'www.google.com',
            link2: 'www.wikipedia.org'
        },
    }
}