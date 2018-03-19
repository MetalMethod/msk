import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
    selector: '[modal-trigger]'
})

/// @name ModalTriggerDirective
/// Directive for triggering the modal window 
/// @implements {OnInit}
export class ModalTriggerDirective implements OnInit {

    /// element reference of the modal
    /// @private
    /// @type {HTMLElement}
    private el: HTMLElement;

    /// Creates an instance of ModalTriggerDirective.
    /// @param {ElementRef} ref - 
    constructor(ref: ElementRef) {
        this.el = ref.nativeElement;
    }

    /// @name ngOnInit
    /// Initializes the directive, listens for the click event that triggers the modal display
    ngOnInit() {
        this.el.addEventListener('click', e => {
            $('#simpleModal').on('shown.bs.modal', function () {
                var modal = $(this)
            })
        })
    }

}