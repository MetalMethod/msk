import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'artist-thumbnail',
    styleUrls: ['artist-thumbnail.component.css'],
    templateUrl: 'artist-thumbnail.component.html'
})
export class ArtistThumbnailComponent{
    @Input() artist:any;
   
 }