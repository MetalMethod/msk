import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IArtist } from './../shared/artist.model';


@Component({
    selector: 'artist-thumbnail',
    styleUrls: ['artist-thumbnail.component.css'],
    templateUrl: 'artist-thumbnail.component.html'
})
export class ArtistThumbnailComponent{
    @Input() artist:IArtist;
   
 }