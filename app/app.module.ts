//imports of internal dependencies
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser' 

//Application specific components
import { MskAppComponent } from './msk-app.component'
import { ArtistsListComponent } from './artists/artists-list/artists-list.component'
import { ArtistThumbnailComponent } from './artists/artist-thumbnail/artist-thumbnail.component'
import { NavBarComponent } from './nav/navbar.component';
import { ArtistService } from './artists/shared/artist.service';


@NgModule({
    imports: [BrowserModule],
    declarations: [MskAppComponent, ArtistsListComponent, ArtistThumbnailComponent, NavBarComponent],
    providers: [ArtistService],
    bootstrap: [MskAppComponent]
})
export class AppModule{

}