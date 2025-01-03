import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { apiUrls } from '@appEnv/apiurls';


@Injectable({
  providedIn: 'root'
})
export class StockadjustmentService {

  constructor(
    private http: HttpClient
  ) { }
  baseURL = environment.localDBUrl;

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
  getAll(url){
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
  getById(url){
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
  getById1(id): Observable<any> {
    const url = this.baseURL + apiUrls.stockAdjustment +'/'+id;
    return this.http.get(url);
}
updatestock(postdata,id): Observable<any> {
  const url = this.baseURL + apiUrls.stockAdjustment +'/'+id;
  return this.http.put(url, postdata);
}
}
