
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class FormFL21Service {

    constructor(
        private http: HttpClient
    ) { }
    baseURL = environment.localDBUrl;

    get(): Observable<any> {
        const url = this.baseURL + apiUrls.getfl21;
        return this.http.get(url);
    }

    addForm13(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.retailFormFL13Add;
        return this.http.post(url, postParam);
    }

    getFormFL21(id): Observable<any> {
        const url = this.baseURL + apiUrls.getfl21 + '/' + id;
        return this.http.get(url);
    }
}
