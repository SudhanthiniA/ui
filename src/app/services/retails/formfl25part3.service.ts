
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class FormFL25Part3Service {

    constructor(
        private http: HttpClient
    ) { }
    baseURL = environment.localDBUrl;

    get(): Observable<any> {
        const url = this.baseURL + apiUrls.getFormfl25Part3;
        return this.http.get(url);
    }
    getById(id): Observable<any> {
        const url = this.baseURL + apiUrls.getFormfl25Part3 + '/' + id;
        return this.http.get(url);
    }
}