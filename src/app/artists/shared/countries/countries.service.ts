import { Injectable} from '@angular/core';

// HTTP
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { catchError } from 'rxjs/operators';

import { ICountry } from './countries.model';

// common request options for POST and PUT
const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}


@Injectable()

export class CountriesService {

    countriesList: ICountry[]
    
    constructor(private httpClient: HttpClient) { }

    getCountries(): Observable<ICountry[]> {
        return this.httpClient.get<ICountry[]>("http://localhost:3000/api/countriesLists")
        
    }
 


}
