
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class FormFL25APart3Service {

    constructor(
        private http: HttpClient
    ) { }
    baseURL = environment.localDBUrl;

    get(): Observable<any> {
        const url = this.baseURL + apiUrls.formFL25Apart3;
        return this.http.get(url);
    }

    addFormFL25Apart3(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.formFL25Apart3;
        return this.http.post(url, postParam);
    }

    getFormFL25Apart3(id): Observable<any> {
        const url = this.baseURL + apiUrls.formFL25Apart3 + '/' + id;
        return this.http.get(url);
    }
};