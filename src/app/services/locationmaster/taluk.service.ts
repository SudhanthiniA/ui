import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class TalukMasterService {

    baseURL = environment.baseURLMaster;

    constructor(
        private http: HttpClient
    ) { }

    getAllTaluk(): Observable<any> {
        const url = this.baseURL + apiUrls.getAllTaulk;
        return this.http.get(url);
    }

    searchTaluk(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.searchTaulk;
        return this.http.post(url, postParam);
    }

    addTaluk(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.addTaulk;
        return this.http.post(url, postParam);
    }

    gettalukById(id): Observable<any> {
        const url = this.baseURL + apiUrls.getTaulkById + '?id=' + id;
        return this.http.get(url);
    }

    putTaulk(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.update;
        return this.http.put(url, postParam);
    }
    gettalukByDistId(id) {
        const url = this.baseURL + apiUrls.getTaulkByDistId + '?districtId=' + id;
        return this.http.get(url);
    }
}
