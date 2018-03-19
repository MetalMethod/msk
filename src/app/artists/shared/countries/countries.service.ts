
import { Injectable} from '@angular/core';
// HTTP
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ICountry } from './countries.model';

// common request options for POST and PUT
const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}
@Injectable()

/// @name CountriesService
/// Service responsible for retrieving the country list for select form field. 
export class CountriesService {

    /// The list of countries
    /// @type {ICountry[]}
    countriesList: ICountry[]

    /// Creates an instance of CountriesService.
    /// @param {HttpClient} httpClient - 
    constructor(private httpClient: HttpClient) { }

    /// @name getCountries
    /// calls server for countries list
    /// @returns {{Observable<ICountry[]>}} - 
    getCountries(): Observable<ICountry[]> {
        return this.httpClient.get<ICountry[]>("http://localhost:3000/api/countriesLists")
    }
 
}
