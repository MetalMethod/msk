import { Component, Input, OnInit } from '@angular/core';


@Component({
    selector:'simple-modal',
    templateUrl:'simple-modal.component.html',
    styleUrls: ['simple-modal.component.css']

})

//export class SimpleModalComponent implements OnInit{
export class SimpleModalComponent {
    @Input() title: string;
    content: any;

    open(content:any){
       
        $('#simpleModal').on('shown.bs.modal', function(){
            var modal = $(this)
           // modal.find('h4').text(title)
           
        })
    }

    
}