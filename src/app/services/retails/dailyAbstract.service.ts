import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class DailyAbstractService {

    constructor(
        private http: HttpClient
    ) { }
    baseURL = environment.localDBUrl;

    get(): Observable<any> {
        const url = this.baseURL + apiUrls.addDailyAbstract;
        return this.http.get(url);
    }

    addDailyAbstract(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.addDailyAbstract;
        return this.http.post(url, postParam);
    }

    getDailyAbstractId(id): Observable<any> {
        const url = this.baseURL + apiUrls.addDailyAbstract + '/' + id;
        return this.http.get(url);
      }
};