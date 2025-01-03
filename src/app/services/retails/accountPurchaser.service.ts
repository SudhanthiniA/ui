import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class AccountPurchaserService {

    constructor(
        private http: HttpClient
    ) { }
    baseURL = environment.localDBUrl;

    get(): Observable<any> {
        const url = this.baseURL + apiUrls.accountPurchaser;
        return this.http.get(url);
    }

    addAccountPurchaser(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.accountPurchaser;
        return this.http.post(url, postParam);
    }

    getAccountPurchaserId(id): Observable<any> {
        const url = this.baseURL + apiUrls.accountPurchaser + '/' + id;
        return this.http.get(url);
      }
};