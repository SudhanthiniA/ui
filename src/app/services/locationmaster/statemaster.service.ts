import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class StatemasterService {

    baseURL = environment.baseURLMaster;

    constructor(
        private http: HttpClient
    ) { }

    getState(): Observable<any> {
        const url = this.baseURL + apiUrls.getAllState;
        return this.http.get(url);
    }

    searchState(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.searchState;
        return this.http.post(url, postParam);
    }

    addState(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.addState;
        return this.http.post(url, postParam);
    }

    getStateById(id): Observable<any> {
        const url = this.baseURL + apiUrls.getByIdState + id;
        return this.http.get(url);
    }

    putState(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.updateState;
        return this.http.put(url, postParam);
    }
    getStateByCountryid(id) {
        console.log(id);
        const url = this.baseURL + apiUrls.getStateByCountryId + '?countryId=' + id;
        return this.http.get(url);
    }
}
