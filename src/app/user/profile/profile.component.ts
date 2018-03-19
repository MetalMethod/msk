import { Component, OnInit, Inject } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './../auth/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})

/// @name ProfileComponent
/// User profile info component
/// @implements {OnInit}
export class ProfileComponent implements OnInit {

    /// FormGroup object for the profile page used in validation
    /// @type {FormGroup}
    profileForm: FormGroup

    /// Container for first name field
    /// @private
    /// @type {FormControl}
    private firstName: FormControl

    /// Container for first name field
    /// @private
    /// @type {FormControl}
    private lastName: FormControl

    /// Creates an instance of ProfileComponent.
    /// @param {AuthService} authService - 
    /// @param {Router} router - 
    /// @param {ToastrService} toastr - 
    constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) { }

    /// @name ngOnInit
    /// Initializes the ofrm with the current user profile info
    ngOnInit() {

        // passing a group of validators with dfefined target pattern to validate against
        this.firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')])
        this.lastName = new FormControl(this.authService.currentUser.lastName, [Validators.required, Validators.pattern('[a-zA-Z].*')])

        /// sets the FormGroup used for validation
        this.profileForm = new FormGroup({
            firstName: this.firstName,
            lastName: this.lastName
        })
    }

    /// @name saveProfile
    /// calls auth service and updates the user profile
    /// @param {any} formValues - 
    saveProfile(formValues) {
        if (this.profileForm.valid) {
            this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)
            this.toastr.success("Your profile was altered.", "Success!")
            this.router.navigate(['artists'])
        }
    }

    /// @name validateFirstName
    /// Validates first name
    /// @returns {any} - boolean
    validateFirstName(): boolean {
        return this.firstName.valid || this.firstName.untouched
    }

    /// @name validateFirstName
    /// Validates last name
    /// @returns {any} - boolean
    validateLastName(): boolean {
        return this.lastName.valid || this.lastName.untouched
    }

    /// @name cancel
    /// Action for the cancel button
    cancel() {
        this.router.navigate(['artists'])
    }

}

