
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser' 

//Application specific components
import { MskAppComponent } from './msk-app.component'
import { ArtistsListComponent } from './artists/artists-list.component'
import { ArtistThumbnailComponent } from './artists/artist-thumbnail.component'
import { NavBarComponent } from './nav/navbar.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [MskAppComponent, ArtistsListComponent, ArtistThumbnailComponent, NavBarComponent],
    bootstrap: [MskAppComponent]
})
export class AppModule{

}