import { Injectable } from '@angular/core';

declare let toastr:any;

@Injectable()
export class ToastrService implements Injectable{

    constructor(){
        this.init()
    }

    init(){
        toastr.options.progressBar = true;
        toastr.options.closeButton = true;
    }
    
    success(message: string, tittle?:string){
        toastr.success(message, tittle);
    }

    info(message: string, tittle?:string){
        toastr.info(message, tittle)
    }
    
    warning(message: string, tittle?:string){
        toastr.warning(message, tittle)
    }
    
    error(message: string, tittle?:string){
        toastr.error(message, tittle)
    }

}
