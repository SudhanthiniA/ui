import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { apiUrls } from '@appEnv/apiurls';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WholesaleStockinService {

  constructor(
    private http: HttpClient
  ) { }
  baseURL = environment.localDBUrl;
  baseURL1 = environment.wholesaledevURL;
  baseURLRETAIL=environment.baseURLRetail
  getAllstcokin(obj): Observable<any> {
    const url = this.baseURL1 + apiUrls.getallstockinbysearch;
    return this.http.post(url,obj);
  }
  getStockbyid(id): Observable<any> {
    // const url = this.baseURL1 + apiUrls.getallstockinbyID;
    // return this.http.get(url);
    const url = this.baseURL1 + apiUrls.getallstockinbyID + id;
    return this.http.get(url);
  }
  addstockin(postData){
    const url = this.baseURL1 +'stockIn/addStockIn' ;
    return this.http.post(url,postData)
  }
//   searchBrandMaster(postParam): Observable<any> {
//     const url = this.baseURL + apiUrls.searchBrandMaster;
//     return this.http.post(url, postParam);
// }
getallDrafttorderpickup(obj){
  const url = this.baseURL1 + apiUrls.getallDraftorderpickup;
  return this.http.post(url,obj);
}
getallSubmittedorderpickup(obj){
  const url = this.baseURL1 + apiUrls.getSubmittedrecords;
  return this.http.post(url,obj);
}
getallAcceptedorderpickup(obj){
  const url = this.baseURL1 + apiUrls.acceptedIndent;
  return this.http.post(url,obj);
}
//view screen api
getbyorderIdd(id){
  const url = this.baseURL1 + apiUrls.getinprogressRecordsbyIndentNo + id;
  return this.http.get(url);
}
getbyorderbyindentIdd(id){
  
  const url = this.baseURLRETAIL + apiUrls.getindentbyindentNumm + id;
  return this.http.get(url);
}
addorderpickup(postdata){
  const url = this.baseURL1 +apiUrls.addorderpickupp ;
  return this.http.post(url,postdata)
}
getorderpickuplogs(data){
  const ids = `?indentNo=${data}`;
  const url = this.baseURL1 + `${apiUrls.getorderpickupllogs}${ids}`;
  return this.http.get(url);
}
getorderpickupByIdforAllLists(data){
  const ids = `?indentNo=${data}`;
  const url = this.baseURL1 + `${apiUrls.getorderpickupAlllists}${ids}`;
  return this.http.get(url);
}
getorderpickuplogsReset(data){
  const ids = `?indentNo=${data}`;
  const url = this.baseURL1 + `${apiUrls.orderpickupreset}${ids}`;
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
