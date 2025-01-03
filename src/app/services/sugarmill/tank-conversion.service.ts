import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';
@Injectable({
  providedIn: 'root'
})
export class TankConversionService {
  baseURL = environment.sugarmillBaseURL;
  constructor(private http: HttpClient) { }
  getAllTanCon(): Observable<any> {
    const url = this.baseURL + apiUrls.tankConAll;
    return this.http.get(url);
  }
  getTanConById(id): Observable<any> {
    const url = this.baseURL + apiUrls.tankConAddGetById + id;
    return this.http.get(url);
  }
  getTanKDetailsById(id): Observable<any> {
    const url = this.baseURL + apiUrls.tankDetails + id;
    return this.http.get(url);
  }
  addTanCon(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.tankConAdd;
    return this.http.post(url, postdata);
  }
  approveTanCon(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.stockAppRej;
    return this.http.post(url, postdata);
  }
  updateTanCon(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.tankConUpdate;
    return this.http.put(url, postdata);
  }
  searchTanCon(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.searchTankCon;
    return this.http.post(url, postdata);
  }
  getDownload(): Observable<any> {
    const url = this.baseURL + apiUrls.allotmentexportExcel;
    return this.http.get(url, { responseType: 'blob' });
  }
  getPrintData(urls:any): Observable<any> {
    const url = this.baseURL + urls
    return this.http.get(url, { responseType: 'blob' });
  }

  getstockbytank(val) {
    const ids = `?tankId=${val}`
    const url = this.baseURL + `${apiUrls.getstockdetails}${ids}`;
    return this.http.get(url);
  }
  
}
