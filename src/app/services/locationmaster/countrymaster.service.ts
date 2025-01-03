import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class CountrymasterService {

    baseURL = environment.baseURLMaster;

    constructor(
        private http: HttpClient
    ) { }

    getCountry(): Observable<any> {
        const url = this.baseURL + apiUrls.getAllCountry;
        return this.http.get(url);
    }

    searchCountry(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.searchCountry;
        return this.http.post(url, postParam);
    }

    addCountry(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.addCountry;
        return this.http.post(url, postParam);
    }

    getCountryById(id): Observable<any> {
        const url = this.baseURL + apiUrls.getByIdCountry + id;
        return this.http.get(url);
    }

    putCountry(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.updateCountry;
        return this.http.put(url, postParam);
    }
}
