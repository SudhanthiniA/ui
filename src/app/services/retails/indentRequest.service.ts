
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { apiUrls } from '@appEnv/apiurls';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndentRequestService {

  constructor(
    private http: HttpClient
  ) { }
  baseURL = environment.baseURLRetail;

  get(): Observable<any> {
    const url = this.baseURL + apiUrls.retailIndent;
    return this.http.get(url);
  }

  addIndent(postParam): Observable<any> {
    const url = this.baseURL + apiUrls.addIndentretail;
    return this.http.post(url, postParam);
  }

  searchIndent(postParam): Observable<any> {
    const url = this.baseURL + apiUrls.searchIndent;
    return this.http.post(url, postParam);
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
