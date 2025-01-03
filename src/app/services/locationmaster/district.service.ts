import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class DistrictMasterService {

    baseURL = environment.baseURLMaster;

    constructor(
        private http: HttpClient
    ) { }

    getAllDistrict(): Observable<any> {
        const url = this.baseURL + apiUrls.getAllDistrict;
        return this.http.get(url);
    }

    searchDistrict(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.districtLazySearch;
        return this.http.post(url, postParam);
    }

    addDistrict(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.addDistrict;
        return this.http.post(url, postParam);
    }

    getdistrictById(id): Observable<any> {
        const url = this.baseURL + apiUrls.getByIdDistrict + id;
        return this.http.get(url);
    }

    putDistrict(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.updateDistrict;
        return this.http.put(url, postParam);
    }
    getDistrictsByStateid(id) {
        const url = this.baseURL + apiUrls.getDistByStateId + '?stateId=' + id;
        return this.http.get(url);
    }
}
