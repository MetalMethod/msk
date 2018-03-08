//import { JQueryService  } from './../j-query.service';
//import * as $ from 'jquery';
import { Directive, OnInit, ElementRef } from '@angular/core';


@Directive({
    selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {

    private el: HTMLElement;
    

    constructor(ref: ElementRef){
        this.el = ref.nativeElement;
    }

    ngOnInit() {
        this.el.addEventListener('click', e =>{

            $('#simpleModal').on('shown.bs.modal', function(){
                var modal = $(this)
               // modal.find('h4').text(title)
            })
            
        })
    }


}