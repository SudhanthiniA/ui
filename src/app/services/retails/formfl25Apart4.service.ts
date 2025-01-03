
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class FormFL25APart4Service {

    constructor(
        private http: HttpClient
    ) { }
    baseURL = environment.localDBUrl;

    get(): Observable<any> {
        const url = this.baseURL + apiUrls.formFL25Apart4;
        return this.http.get(url);
    }

    addFormFL25Apart4(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.formFL25Apart4;
        return this.http.post(url, postParam);
    }

    getFormFL25Apart4(id): Observable<any> {
        const url = this.baseURL + apiUrls.formFL25Apart4 + '/' + id;
        return this.http.get(url);
    }
};