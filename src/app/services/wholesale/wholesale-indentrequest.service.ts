
import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { Observable, of } from 'rxjs';

import { apiUrls } from '@appEnv/apiurls';

@Injectable({
  providedIn: 'root'
})
export class WholeSaleIndentRequestService {

  constructor(
    private http: HttpClient
  ) { }
  baseURL = environment.wholesaleURL;
  baseURL1 = environment.localDBUrl;
  masterbaserurl = environment.baseURLUser;
  // baseURL1 = environment.wholesaleURL;
  indentreqBaseUrl = environment.indentrequsetURL;
 
  getAllBrand(): Observable<any> {
    const url = this.masterbaserurl + apiUrls.getAllBrandMaster;
    return this.http.get(url);
}
getAllEntity(): Observable<any> {
  const url = this.masterbaserurl + apiUrls.getalldistwarehousentitytype;
  return this.http.get(url);
}
getallentityNames(){
  const url = this.masterbaserurl + apiUrls.getallentitynames;
  return this.http.get(url);
}

indentgetbyid(id){
const ids = `?id=${id}`;
const url = this.baseURL + `${apiUrls.getwholesaleindentbyid}${ids}`;
return this.http.get(url);
}

gettransportpass(id){
  const ids = `?gatePassNo=${id}`;
  const url = this.baseURL + `${apiUrls.gettarnsportpassbyid}${ids}`;
  return this.http.get(url);
}

getallstockin(){
  const url = this.baseURL + apiUrls.getallstockin;
  return this.http.get(url);
}

approvalAllotment(obj){
  const url = this.baseURL + apiUrls.approvewholesaleindent;
  return this.http.put(url,obj);
}
getAllIndent(): Observable<any> {
  const url = this.baseURL1 + apiUrls.getAllIndentRequest;
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
  postIndentrequst(url, data) {
    const requestURL = this.indentreqBaseUrl + url;
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