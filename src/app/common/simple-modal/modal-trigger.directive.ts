import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
    selector: '[modal-trigger]'
})

/// @name ModalTriggerDirective
/// Directive that triggers the modal window
/// @implements {OnInit}
export class ModalTriggerDirective implements OnInit {

    /// element of html to trigger
    /// @private
    /// @type {HTMLElement}
    private el: HTMLElement;

    /// Creates an instance of ModalTriggerDirective.
    /// @param {ElementRef} ref - 
    constructor(ref: ElementRef) {
        this.el = ref.nativeElement;
    }

    /// @name ngOnInit
    /// Initializes modal when click event is triggered
    ngOnInit() {
        this.el.addEventListener('click', e => {
            $('#simpleModal').on('shown.bs.modal', function () {
                var modal = $(this)
            })
        })
    }

}