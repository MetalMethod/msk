import { Observable } from 'rxjs/RX';
import { ArtistService } from './../artists/shared/artist.service';
import { Component, Output, Input, Injectable } from '@angular/core'
import { AuthService } from './../user/auth/auth.service';
import { IArtist } from './../artists/shared/artist.model';
import { SimpleModalComponent } from '../common/simple-modal/simple-modal.component';
import { EventEmitter } from '@angular/core'

@Component({
    selector: 'nav-bar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.css']
})

/// @name NavBarComponent
/// The top navbar component
@Injectable()
export class NavBarComponent {

    /// search term string from search form
    /// @type {string}
    searchTerm: string = "";

    /// array of resulting artists from search
    /// @type {IArtist[]}
    foundArtists: IArtist[];

    /// Creates an instance of NavBarComponent.
    /// @param {AuthService} auth - 
    /// @param {ArtistService} artistService - 
    /// @param {SimpleModalComponent} modal - 
    constructor(private auth: AuthService, private artistService: ArtistService, private modal: SimpleModalComponent) {
    }

    /// @name searchAll
    /// call the search from the button or typing enter from the input field
    /// @param {string} searchTerm - 
    searchAll(searchTerm: string) {
        this.foundArtists = this.artistService.searchAll(searchTerm)
    }

    /// @name logout
    /// calls auth service for logout
    logout() {
        this.auth.logout();
    }

}