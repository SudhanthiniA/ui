import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DistilleryapiService {

  @Output() langChange = new EventEmitter();
  baseURL = environment.distilleryBaseURL;
  authToken = environment.authToken;
  surl = environment.distilleryBaseURL;
  constructor(
    private http: HttpClient
  ) { }

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

  postDownload(url, data) {
    const requestURL = this.baseURL + url;
    const promise = new Promise((resolve, reject) => {
      this.http.post(requestURL, data, { responseType: 'blob' })
        .subscribe(
          (res) => {
            resolve(res);
          },
          (err) => {
            reject(err);
          }
        );
    });
    return promise;
  }

  getDownload(url, data) {
    const requestURL = this.baseURL + url;
    const promise = new Promise((resolve, reject) => {
      this.http.get(requestURL,{ responseType: 'blob' })
        .subscribe(
          (res) => {
            resolve(res);
          },
          (err) => {
            reject(err);
          }
        );
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
}
