import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls'
@Injectable({
  providedIn: 'root'
})
export class Mf5Part3Service {
  baseURL = environment.sugarmillBaseURL;
  constructor(private http: HttpClient) { }
  getAllMf5Part3(): Observable<any> {
    const url = this.baseURL + apiUrls.mfpart3GetAll;
    return this.http.get(url);
  }
  getMf5Part3ById(id): Observable<any> {
    const url = this.baseURL + apiUrls.mfpart3GetById + id;
    return this.http.get(url);
  }
  addMf5Part3(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.mfpart3Add;
    return this.http.post(url, postdata);
  }
  updateMf5Part3(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.mfpart3GetUpdate;
    return this.http.put(url, postdata);
  }
  searchMf5Part3(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.molassesFormatSearch;
    return this.http.post(url, postdata);
  }
  getDownload(): Observable<any> {
    const url = this.baseURL + apiUrls.allotmentexportExcel;
    return this.http.get(url, { responseType: 'blob' });
  }
  getPrintData(urls:any): Observable<any> {
    const url = this.baseURL + urls;
    return this.http.get(url, { responseType: 'blob' });
  }
}
