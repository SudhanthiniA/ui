
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class FormFL24Service {

    constructor(
        private http: HttpClient
    ) { }
    baseURL = environment.localDBUrl;

    get(): Observable<any> {
        const url = this.baseURL + apiUrls.retailFormFL24;
        return this.http.get(url);
      }

      addForm24(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.retailFormFL24Add;
        return this.http.post(url, postParam);
    }

    getForm24(id): Observable<any> {
        const url = this.baseURL + apiUrls.retailFormFL24Add + '/' + id;
        return this.http.get(url);
      }
      
};