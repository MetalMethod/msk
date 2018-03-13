// import { ArtistService } from './artist.service';
// import { Injectable } from '@angular/core';
// import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';


// @Injectable()
// export class ArtistRouteActivatorService implements CanActivate{
//     constructor(private artistService:ArtistService, private router:Router){

//     }

//     canActivate(route:ActivatedRouteSnapshot){
//         //!! cast to boolean
//         //const artistExists = !!this.artistService.getArtist(+route.params['id'])
// debugger
//         let artistExists: boolean = !!this.artistService.getArtist(+route.params['id'])


//         if(!artistExists)
//             this.router.navigate(['/404'])
        
//         return artistExists
//     }


// }