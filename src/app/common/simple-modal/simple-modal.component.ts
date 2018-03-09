import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';


@Component({
    selector:'simple-modal',
    templateUrl:'simple-modal.component.html',
    styleUrls: ['simple-modal.component.css']

})

export class SimpleModalComponent {
    @Input() title: string;
    @Input() elementId: string;
    @Input() closeOnBodyClick: string;

    @ViewChild('modalContainer') containerElement: ElementRef
    
    closeModal(){
        if(this.closeOnBodyClick.toLocaleLowerCase() === "true"){
            //search for css class of generated close button from bootstrap and simulate a click.
            $('.close').click()
        }
    }


}