import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
 
@Component({
    selector: 'simple-modal',
    templateUrl: 'simple-modal.component.html',
    styleUrls: ['simple-modal.component.css']
    
})

/// @name SimpleModalComponent
/// Component for a simple modal window
export class SimpleModalComponent {
    
    /// Input for Title of modal 
    /// @type {string}
    @Input() title: string;

    /// Input for html id of modal
    /// @type {string}
    @Input() elementId: string;

    /// Input for event of click on close button
    /// @type {string}
    @Input() closeOnBodyClick: string;

    /// Container for reference of element that contains the modal
    /// @type {ElementRef}
    @ViewChild('modalContainer') containerElement: ElementRef

    /// @name closeModal
    /// Search for css class of generated close button from bootstrap and simulate a click.
    closeModal() {
        if (this.closeOnBodyClick.toLocaleLowerCase() === "true") {
            $('.close').click()
        }
    }

}