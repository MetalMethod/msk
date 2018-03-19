import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IArtist } from './../shared/artist.model';

@Component({
    selector: 'artist-thumbnail',
    styleUrls: ['artist-thumbnail.component.css'],
    templateUrl: 'artist-thumbnail.component.html'
})

/// @name ArtistThumbnailComponent
/// This component represents the template for the artist box on main page
export class ArtistThumbnailComponent{
    @Input() artist:IArtist;
 }