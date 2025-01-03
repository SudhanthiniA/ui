import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls'
@Injectable({
  providedIn: 'root'
})
export class FortnightyStatementService {
  baseURL = environment.sugarmillBaseURL;
  constructor(private http: HttpClient) { }
  getFortnighty(): Observable<any> {
    const url = this.baseURL + apiUrls.getAllMf7;
    return this.http.get( url );
  }
  getFortnightyId(id) :Observable<any> {
    const url = this.baseURL + apiUrls.mf7GetById + id;
    return this.http.get(url);
  }
  addFortnighty(postdata):Observable<any> {
    const url = this.baseURL + apiUrls.addMf7;
    return this.http.post(url,postdata);
  }
  updateFortnighty(postdata):Observable<any> {
    const url = this.baseURL + apiUrls.mf7Update;
    return this.http.put(url,postdata);
  }
  searchFortnighty(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.mf7Search;
    return this.http.post(url,postdata);
  }
  getDownload():Observable<any> {
      const url = this.baseURL + apiUrls.allotmentexportExcel;
      return this.http.get(url,{responseType: 'blob'});
  }
  getPrintData(urls:any):Observable<any> {
    const url = this.baseURL + urls;
    return this.http.get(url,{responseType: 'blob'});
}
}
