import { Injectable } from '@angular/core';
import * as $ from 'jquery'

@Injectable()
export class JQueryService {

    $:any;
  
    constructor() {
        this.$ = $;
        console.log($(window))
    }

}
