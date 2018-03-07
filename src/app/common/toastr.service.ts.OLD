
//Toastr dependencies
//import { ToastrModule } from 'ngx-toastr';
import { ToastrService } from 'ngx-toastr';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations'


import { Injectable } from '@angular/core';
//declare let toastr:any;

@Injectable()
export class ToastrNgxService implements Injectable{

    constructor(private toastr:ToastrService){
//        this.init()
    }

    // init(){
    //     this.toastr.options.progressBar = true;
    //     this.toastr.options.closeButton = true;
    // }
    
    success(message: string, tittle?:string){
        this.toastr.success(message, tittle, {progressBar:true, closeButton:true});
    }

    info(message: string, tittle?:string){
        this.toastr.info(message, tittle, {progressBar:true, closeButton:true})
    }
    
    warning(message: string, tittle?:string){
        this.toastr.warning(message, tittle, {progressBar:true, closeButton:true})
    }
    
    error(message: string, tittle?:string){
        this. toastr.error(message, tittle, {progressBar:true, closeButton:true})
    }

}
