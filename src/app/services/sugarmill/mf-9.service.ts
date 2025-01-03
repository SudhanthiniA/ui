import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls'
@Injectable({
  providedIn: 'root'
})
export class Mf9Service {
  baseURL = environment.sugarmillBaseURL;
  constructor(private http: HttpClient) { }
  getAllMf9(): Observable<any> {
    const url = this.baseURL + apiUrls.getAllMf9;
    return this.http.get(url);
  }
  getMf9ById(id): Observable<any> {
    const url = this.baseURL + apiUrls.mf9GetById + id;
    return this.http.get(url);
  }
  getMf9FortnightById(id): Observable<any> {
    const url = this.baseURL + apiUrls.mf9FortnightById + id;
    return this.http.get(url);
  }
  addMf9(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.addMf9;
    return this.http.post(url, postdata);
  }
  addMf9FortNight(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.addMf9FortNight;
    return this.http.post(url, postdata);
  }
  updateMf9(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.updateMf9;
    return this.http.put(url, postdata);
  }
  searchMf9(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.mf9Search;
    return this.http.post(url, postdata);
  }
  searchMf9Fortnight(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.fortnightSearch;
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

  getmf9details(): Observable<any> {
    const url = this.baseURL + apiUrls.getmf9details;
    return this.http.get(url);
  }

  getmf9Forecastdetails(): Observable<any> {
    const url = this.baseURL + apiUrls.getmf9Forecasedetails;
    return this.http.get(url);
  }

  gettanktypes(pid,gid?: any) {
    let ids;
    if(gid) {
      ids = `?productTypeId=${pid}&gradeId=${gid}`
    } else {
      ids =`?productTypeId=${pid}`
    }
    const url = this.baseURL + `${apiUrls.gettankbyproducttype}${ids}`;
    return this.http.get(url);
  }
}
