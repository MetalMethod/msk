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

@Injectable()
export class NavBarComponent {

    searchTerm: string = "";
    foundArtists: IArtist[];

    //@Output() public getData: EventEmitter<any> = new EventEmitter<any>();

    constructor(private auth: AuthService, private artistService: ArtistService, private modal: SimpleModalComponent) {

    }

    isAuthenticated():boolean {
        return this.auth.isAuthenticated()
    }

    onSearch() {
    }

    searchAll(searchTerm: string) {
        this.foundArtists = this.artistService.searchAll(searchTerm)
    }

    logout() {
        console.log("logout click")
        this.auth.logout();
    }


}