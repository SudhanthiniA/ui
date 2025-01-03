import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls'

@Injectable({
  providedIn: 'root'
})
export class Mf5Part2Service {
  baseURL = environment.sugarmillBaseURL;
  constructor(private http: HttpClient) { }
  getAllMf5Part2(): Observable<any> {
    const url = this.baseURL + apiUrls.getAllMf5Part2;
    return this.http.get(url);
  }
  getMf5Part2ById(id): Observable<any> {
    const url = this.baseURL + apiUrls.mf5Part2GetById + id;
    return this.http.get(url);
  }
  addMf5Part2(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.addMf5Part2;
    return this.http.post(url, postdata);
  }
  updateMf5Part2(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.updateMf5Part2;
    return this.http.put(url, postdata);
  }
  searchMf5Part2(postdata): Observable<any> {
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
