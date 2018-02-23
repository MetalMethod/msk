//main app component

import { Component } from '@angular/core'

//compoment decorator, defines a angular component 
@Component({
    selector: 'msk-app',
    template: `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
     `
})

export class MskAppComponent{
    
}