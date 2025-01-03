
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class FormFL42Service {

    constructor(
        private http: HttpClient
    ) { }
    baseURL = environment.localDBUrl;

    get(): Observable<any> {
        const url = this.baseURL + apiUrls.retailFormFL42Add;
        return this.http.get(url);
      }

      addForm42(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.retailFormFL42Add;
        return this.http.post(url, postParam);
    }

    getFormFl42(id): Observable<any> {
        const url = this.baseURL + apiUrls.retailFormFL42Add + '/' + id;
        return this.http.get(url);
      }
};