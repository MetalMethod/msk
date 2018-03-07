import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './../auth/auth.service';
import { Router } from '@angular/router';
import { ToastrNgxService } from '../../common/toastr.service';

@Component({
  templateUrl: './profile.component.html',
  styleUrls:['./profile.component.css']
})


export class ProfileComponent implements OnInit{

  profileForm:FormGroup
  private firstName:FormControl
  private lastName:FormControl

  constructor(private authService: AuthService, private router: Router, private toastr:ToastrNgxService){}

  ngOnInit(){
    // passing a group of validators with dfefined target pattern to validate against
    this.firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')])
    this.lastName  = new FormControl(this.authService.currentUser.lastName, [Validators.required, Validators.pattern('[a-zA-Z].*')])

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    })
  }

  saveProfile(formValues){
    if(this.profileForm.valid){
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)
      this.toastr.success("Your profile was altered.", "Success!")
      this.router.navigate(['artists'])
    }
  }
  
  validateFirstName(){
    return this.firstName.valid || this.firstName.untouched
  }

  validateLastName(){
    return this.lastName.valid || this.lastName.untouched
  }

  cancel(){
    this.router.navigate(['artists'])
  }
       
}

