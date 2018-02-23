//main app component

import { Component } from '@angular/core'

//compoment decorator, defines a angular component 
@Component({
    selector: 'msk-app',
    template: `
    <nav-bar></nav-bar>
    <artists-list></artists-list>
    
    `
    // <router-outlet></router-outlet>
    // <artist-details></artist-details>
})

export class MskAppComponent{
    
}