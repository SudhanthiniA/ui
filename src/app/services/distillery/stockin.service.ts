import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls'

@Injectable({
  providedIn: 'root'
})
export class StockinService {

  baseURL = environment.distilleryBaseURL;
  sugermillbaseURL = environment.sugarmillBaseURL;

  constructor(private http: HttpClient) { }
  getAllStockIn(): Observable<any> {
    const url = this.baseURL + apiUrls.getAllStock;
    return this.http.get(url);
  }
  getStockInById(id): Observable<any> {
    const url = this.baseURL + apiUrls.distillerygetStockById + id;
    return this.http.get(url);
  }
  distilleryaddStockIn(postdata): Observable<any> {
    // debugger;
    const url = this.baseURL + apiUrls.distilleryaddStock;
    return this.http.post(url, postdata);
  }
  updateStockIn(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.distilleryupdateStock;
    return this.http.put(url, postdata);
  }
  distillerysearchStockIn(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.distillerystockInLazySearch;
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
  searchTanReg(postdata): Observable<any> {
    const url = this.sugermillbaseURL + apiUrls.searchTankReg;
    return this.http.post(url, postdata);
  }

  gettankbyid(id) {
    const ids = `?tankId=${id}`
    const url = this.sugermillbaseURL + `${apiUrls.gettankbyid}${ids}`;
    return this.http.get(url);
  }
}
