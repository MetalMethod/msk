"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var ArtistsListComponent = (function () {
    function ArtistsListComponent() {
        //mock data to be added in database / API
        this.artists = [
            {
                id: 1,
                name: 'Name One',
                genre: 'Some genre',
                description: 'Being a developer in 2037 is about more than just writing bug-free code. You also have to look the part.',
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
            },
            {
                id: 2,
                name: 'Name Twott3te rtert eetert er tertert erterterte rwwueiwerwerwerweriwerwer',
                genre: 'Some genre',
                description: 'Coinciding with the release of Star Wars Episode 18, this talk will show how to use directives in your Angular 4 development',
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
            },
            {
                id: 3,
                name: 'Name Three',
                genre: 'Some genre',
                description: 'Sometimes our internal biases can make it difficult forthese well-designed coworkers to really feel at home coding alongside us.',
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
            },
            {
                id: 4,
                name: 'Name Four',
                genre: 'Some genre',
                description: 'Angular has been used in most of the major peace brokering that has happened in the last decade',
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
            },
            {
                id: 5,
                name: 'Name Five',
                genre: 'Some genre',
                description: 'We all know that Angular is used in most waiter-bots and coke vending machines, but did you know that was also used to write the core engine in the majority of voting machines? ',
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
            },
            {
                id: 6,
                name: 'Name Six',
                genre: 'Some genre',
                description: 'Let\'s take a look at some of the stranger pieces of Angular 4, including neural net nets, Android in Androids, and using pipes with actual pipes.',
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
            },
            {
                id: 7,
                name: 'Name Seven',
                genre: 'Some genre',
                description: 'Being a developer in 2037 is about more than just writing bug-free code. You also have to look the part.',
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
            },
            {
                id: 8,
                name: 'Name Eight',
                genre: 'Some genre',
                description: 'Coinciding with the release of Star Wars Episode 18, this talk will show how to use directives in your Angular 4 development',
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
            },
            {
                id: 9,
                name: 'Name Nine',
                genre: 'Some genre',
                description: 'Yes, we all work with cyborgs and androids and Martians, but we probably don\'t realize that sometimes our internal biases can make it difficult forthese well-designed coworkers to really feel at home coding alongside us.',
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
            },
            {
                id: 10,
                name: 'Name Ten',
                genre: 'Some genre',
                description: 'Angular has been used in most of the major peace brokering that has happened in the last decade',
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
            },
            {
                id: 11,
                name: 'Name Eleven',
                genre: 'Some genre',
                description: 'No, this talk isn\'t about slot machines. ',
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
            },
            {
                id: 12,
                name: 'Name Twelve',
                genre: 'Some genre',
                description: 'Let\'s take a look at some of the stranger pieces of Angular 4, including neural net nets, Android in Androids, and using pipes with actual pipes.',
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
            },
            {
                id: 13,
                name: 'Name Thirteen',
                genre: 'Some genre',
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
                }
            }
        ];
        //end of mock data array
    }
    return ArtistsListComponent;
}());
ArtistsListComponent = __decorate([
    core_1.Component({
        selector: 'artists-list',
        templateUrl: 'app/artists/artists-list.component.html',
        styleUrls: ['app/artists/artists-list.component.css']
    }),
    __metadata("design:paramtypes", [])
], ArtistsListComponent);
exports.ArtistsListComponent = ArtistsListComponent;
//# sourceMappingURL=artists-list.component.js.map