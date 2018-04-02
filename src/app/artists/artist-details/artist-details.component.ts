import { Component, OnInit } from '@angular/core';
import { ArtistService } from './../shared/artist.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { IArtist } from './../shared/artist.model';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'artist-details',
    templateUrl: 'artist-details.component.html',
    styleUrls: ['artist-details.component.css']
})

/// @name ArtistDetailsComponent
/// This component shows the details info about a artist
/// @implements {OnInit}
export class ArtistDetailsComponent implements OnInit {

    /// Holds the data to show for the current artist
    /// @type {IArtist}
    artist: IArtist

    /// Creates an instance of ArtistDetailsComponent.
    /// @param {ArtistService} artistService - 
    /// @param {ActivatedRoute} route - 
    /// @param {Router} router - 
    /// @param {ToastrService} toastr - 
    constructor(private artistService: ArtistService, private route: ActivatedRoute, private router: Router, private toastr: ToastrService) {
    }

    /// @name ngOnInit
    /// Retrieves the data to be shown
    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.artist = this.route.snapshot.data['artist']
        })
    }

    /// @name editDetails
    /// Action for the edit button
    editDetails() {
        this.artistService.setArtistToUpdate(this.artist)
        this.router.navigate(['/artists', this.artist.id.toString(), 'edit'])
    }

    /// @name deleteArtist
    /// Action for delete artist button
    deleteArtist() {
        let id = this.artist.id;
        this.artistService.deleteArtist(id).subscribe(
            () => {
                this.toastr.success("Artist Deleted.")
            }
        );
        this.router.navigate(['/artists'])
    }
}