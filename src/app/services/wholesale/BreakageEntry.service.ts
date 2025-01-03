
import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Return } from '@app/models/retails';

@Injectable({
  providedIn: 'root'
})
export class BreakageEntryService {

  constructor(
    private http: HttpClient
  ) { }
  baseURL = environment.localDBUrl;
  baseUrl = environment.wholesaledevURL


  getAllStockinAvail(){
    const requestURL = this.baseUrl + "stockInHand/getAllStockInAvailableBottles";
    return this.http.get(requestURL)
  }
  getAllAvaiBottles(data){
    const requestURL = this.baseUrl + "stockInHand/getAvailableBottles?"
    +"brandNameCode="+data.brandNameCode+"&liquorTypeCode="+data.liquorTypeCode
    +"&liquorSubTypeCode="+data.liquorSubTypeCode+"&packageTypeCode="
    +data.packageTypeCode+"&packageSizeCode="+data.packageSizeCode;

    return this.http.get(requestURL)
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