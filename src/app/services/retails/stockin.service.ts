
import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
  providedIn: 'root'
})
export class StockInService {

  constructor(
    private http: HttpClient
  ) { }
  baseURL = environment.localDBUrl;
  retailBaseURL = environment.baseURLRetail;

  get(): Observable<any> {
    const url = this.baseURL + apiUrls.stockIn;
    return this.http.get(url);
  }

  searchStockIn(postParam): Observable<any> {
    const url = this.retailBaseURL + apiUrls.searchStockIn;
    return this.http.post(url, postParam);
}

  addStockIn(postParam) {
    const requestURL = this.retailBaseURL + apiUrls.addStockIn;
    return  this.http.post(requestURL, postParam);;
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