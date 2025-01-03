
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class FormFL25APart2Service {

    constructor(
        private http: HttpClient
    ) { }
    baseURL = environment.localDBUrl;

    get(): Observable<any> {
        const url = this.baseURL + apiUrls.formFL25Apart2;
        return this.http.get(url);
    }

    addForm25aPart2(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.formFL25Apart2;
        return this.http.post(url, postParam);
    }

    getFormFL25aPart2(id): Observable<any> {
        const url = this.baseURL + apiUrls.formFL25Apart2 + '/' + id;
        return this.http.get(url);
    }
};