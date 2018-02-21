import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'artist-thumbnail',
    styleUrls: ['app/artists/artists-list.component.css'],
    templateUrl: 'app/artists/artist-thumbnail.component.html'
})
export class ArtistThumbnailComponent{
    @Input() artist:any;
   
 }