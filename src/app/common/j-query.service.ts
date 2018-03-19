import { Injectable } from '@angular/core';
import * as $ from 'jquery'

@Injectable()

/// @name JQueryService
/// global service for JQuery
export class JQueryService {

    //Global access to JQuery
    $:any;
  
    /// Creates an instance of JQueryService.
    constructor() {
        this.$ = $;
    }

}
