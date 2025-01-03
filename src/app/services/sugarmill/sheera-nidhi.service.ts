import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls'
@Injectable({
  providedIn: 'root'
})
export class SheeraNidhiService {
  baseURL = environment.sugarmillBaseURL;
  constructor(private http: HttpClient) { }
  getAllMolassesRegister(): Observable<any> {
    const url = this.baseURL + apiUrls.molassesRegGetAll;
    return this.http.get(url);
  }
  getMolassesRegisterById(id): Observable<any> {
    const url = this.baseURL + apiUrls.molassesRegGetById + id;
    return this.http.get(url);
  }
  addMolassesRegister(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.molassesRegAdd;
    return this.http.post(url, postdata);
  }
  updateMolassesRegister(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.molassesRegUpdate;
    return this.http.put(url, postdata);
  }
  searchMolassesRegister(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.molassesFundSearch;
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
