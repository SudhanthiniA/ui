
import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
  providedIn: 'root'
})
export class IndentAcceptanceService {

  constructor(
    private http: HttpClient
  ) { }
  baseURL = environment.localDBUrl;
  baseURL1 = environment.baseURLRetail;
  baseURL2 = environment.wholesaledevURL;
  baseurl3 = environment.wholesaleURL;
  getAllindent(obj): Observable<any> {
    const url = this.baseURL1 + apiUrls.getallindentbysearch;
    return this.http.post(url,obj);
  }
  getindent(id): Observable<any> {
    const url = this.baseURL1 + apiUrls.getindentacceptancebyid + id;
    return this.http.get(url);
  }
  addindent(obj): Observable<any> {
    const url = this.baseURL2 + apiUrls.addindentacceptance;
    return this.http.post(url,obj);
  }
  getIndtAcceptanceStatusList(){
    const url = this.baseurl3 + apiUrls.acceptanceStatusList;
    return this.http.get(url)
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