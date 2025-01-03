
import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class StockAvailabilityService {

    constructor(
        private http: HttpClient
    ) { }
    baseURL = environment.localDBUrl;

    get(): Observable<any> {
        const url = this.baseURL + apiUrls.stockAvailability;
        return this.http.get(url);
    }

    getStockAvailability(): Observable<any> {
        const url = this.baseURL + apiUrls.stockAvailabilityView;
        return this.http.get(url);
    }

    getProductTypeById(id): Observable<any> {
        const url = this.baseURL + apiUrls.productType + id;
        return this.http.get(url);
    }
    getBrandSize(id): Observable<any> {
        const url = this.baseURL + apiUrls.getBrandSizeByProductId + '/' + id;
        return this.http.get(url);
    }
    post(url, data) {
        const requestURL = this.baseURL + url;
        const promise = new Promise((resolve, reject) => {
            this.http.post(requestURL, data).toPromise()
                .then(res => { // Success
                    resolve(res);
                }, msg => { // Error
                    reject(msg);
                });
        });
        return promise;
    }

    patch(url, data) {
        const requestURL = this.baseURL + url;
        const promise = new Promise((resolve, reject) => {
            this.http.patch(requestURL, data).toPromise()
                .then(res => { // Success
                    resolve(res);
                }, msg => { // Error
                    reject(msg);
                });
        });
        return promise;
    }

    put(url, data) {
        const requestURL = this.baseURL + url;
        const promise = new Promise((resolve, reject) => {
            this.http.put(requestURL, data).toPromise()
                .then(res => { // Success
                    resolve(res);
                }, msg => { // Error
                    reject(msg);
                });
        });
        return promise;
    }
};