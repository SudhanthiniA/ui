import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrls } from '@appEnv/apiurls';
import { environment } from '@appEnv/environment';
import { Observable } from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class NewlicenceBelowgradeService {

  
  constructor(
    private http: HttpClient
  ) { }

  baseURL = environment.licencemanagementURL;

  addBelowGrade(postParam): Observable<any> {
    const url = this.baseURL + apiUrls.addBelowGrade;
    return this.http.post(url, postParam);
  }
  
  putBelowGrade(postParam): Observable<any> {
    const url = this.baseURL + apiUrls.putBelowGrade;
    return this.http.put(url, postParam);
  }
  getBelowGradeById(id): Observable<any> {
    const url = this.baseURL + apiUrls.getBelowGradeById + id;
    return this.http.get(url);
  }

  getAllBelowGrade(): Observable<any> {
    const url = this.baseURL + apiUrls.getAllBelowGrade;
    return this.http.get(url);
  }


  //baseURL = environment.localDBUrl;

  // get(url) {
  //   const requestURL = this.baseURL + url;
  //   const promise = new Promise((resolve, reject) => {
  //     this.http.get(requestURL).toPromise()
  //       .then(res => { // Success
  //         resolve(res);
  //       }, msg => { // Error
  //         reject(msg);
  //       });
  //   });
  //   return promise;
  // }

  // post(url, data) {
  //   const requestURL = this.baseURL + url;
  //   const promise = new Promise((resolve, reject) => {
  //     this.http.post(requestURL, data).toPromise()
  //       .then(res => { // Success
  //         resolve(res);
  //       }, msg => { // Error
  //         reject(msg);
  //       });
  //   });
  //   return promise;
  // }

  // patch(url, data) {
  //   const requestURL = this.baseURL + url;
  //   const promise = new Promise((resolve, reject) => {
  //     this.http.patch(requestURL, data).toPromise()
  //       .then(res => { // Success
  //         resolve(res);
  //       }, msg => { // Error
  //         reject(msg);
  //       });
  //   });
  //   return promise;
  // }

  // put(url, data) {
  //   const requestURL = this.baseURL + url;
  //   const promise = new Promise((resolve, reject) => {
  //     this.http.put(requestURL, data).toPromise()
  //       .then(res => { // Success
  //         resolve(res);
  //       }, msg => { // Error
  //         reject(msg);
  //       });
  //   });
  //   return promise;
  // }
}
