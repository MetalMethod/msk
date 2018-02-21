//main app component

import { Component } from '@angular/core'

//compoment decorator, defines a angular component
@Component({
    selector: 'msk-app',
    template: `
    <nav-bar></nav-bar>
    <artists-list></artists-list>
    `
})

export class MskAppComponent{
    
}