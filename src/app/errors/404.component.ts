import { Component } from '@angular/core'

@Component({
  template: `
    <h1 class="errorMessage">error 404</h1>
    <h3 class="errorMessage">You're lost...</h3>
  `,
  styles: [`
    .errorMessage { 
      margin-top:20px; 
      text-align: center; 
      color:#CCCCCC;
    },
    
    
    `]
})
export class Error404Component{
  constructor() {

  }

}
