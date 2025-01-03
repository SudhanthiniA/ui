
import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { apiUrls } from '@appEnv/apiurls';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WholesaleStockAvailabilityService {

  constructor(
    private http: HttpClient
  ) { }
  baseURL = environment.localDBUrl;
  baseURL2= environment.devisionUrl;
  parentunitURL = environment.parentunit;
  getLiquiorType(){
    const url = this.baseURL2 + apiUrls.getAllLiquorType
    return this.http.get(url)
 }
 getTempLicense(): Observable<any> {
  const url = this.parentunitURL + apiUrls.getTempLicense;
  return this.http.get(url);
}
  get(url) {
    const requestURL = this.baseURL + url;
    const promise = new Promise((resolve, reject) => {
      this.http.get(requestURL).toPromise()
        .then(res => { // Success
          resolve(res);
        }, msg => { // Error
          reject(msg);
        });
    });
    return promise;
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