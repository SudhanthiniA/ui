
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class FormFL25APart1Service {

    constructor(
        private http: HttpClient
    ) { }
    baseURL = environment.localDBUrl;

    get(): Observable<any> {
        const url = this.baseURL + apiUrls.formFL25Apart1;
        return this.http.get(url);
    }

    addFormFL25Apart1(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.formFL25Apart1;
        return this.http.post(url, postParam);
    }

    getFormFL25Apart1(id): Observable<any> {
        const url = this.baseURL + apiUrls.formFL25Apart1 + '/' + id;
        return this.http.get(url);
    }
};