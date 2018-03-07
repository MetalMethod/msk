import { Component, Output } from '@angular/core'
import { AuthService } from './../user/auth/auth.service';
//import { ToastrNgxService } from '../common/toastr.service';

@Component({
    selector: 'nav-bar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.css']
})

export class NavBarComponent{
    
    //sortBy: string ='dateAdded'

    //constructor(private auth:AuthService, private toastr:ToastrNgxService){
    constructor(private auth:AuthService){
        //toastr.success("yoooo", "dude")
    }

   // @Output() sortBy: string
    
}