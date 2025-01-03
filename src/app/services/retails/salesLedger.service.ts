
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class SalesLedgerService {

    constructor(
        private http: HttpClient
    ) { }
    baseURL = environment.localDBUrl;

    get(): Observable<any> {
        const url = this.baseURL + apiUrls.addSalesLedger;
        return this.http.get(url);
    }

    addSalesLedger(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.addSalesLedger;
        return this.http.post(url, postParam);
    }

    getSalesLedgerId(id): Observable<any> {
        const url = this.baseURL + apiUrls.addSalesLedger + '/' + id;
        return this.http.get(url);
      }
};