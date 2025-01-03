
import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { apiUrls } from '@appEnv/apiurls';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(
    private http: HttpClient
  ) { }
  baseURL = environment.localDBUrl;

  get(): Observable<any> {
    const url = this.baseURL + apiUrls.retailReports;
    return this.http.get(url);
  }

  getLiquorCategoryReport(): Observable<any> {
    const url = this.baseURL + apiUrls.liquorCategoryReport;
    return this.http.get(url);
  }

  getSalesReport(): Observable<any> {
    const url = this.baseURL + apiUrls.salesReport;;
    return this.http.get(url);
  }

  getStockReport(): Observable<any> {
    const url = this.baseURL + apiUrls.stockreport;
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