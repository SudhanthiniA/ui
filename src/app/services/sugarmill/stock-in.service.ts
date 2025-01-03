import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls'
import { UrlSegment } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class StockInService {
  baseURL = environment.sugarmillBaseURL;
  constructor(private http: HttpClient) { }
  getAllStockIn(): Observable<any> {
    const url = this.baseURL + apiUrls.stockInList;
    return this.http.get(url);
  }
  getStockInById(id): Observable<any> {
    const url = this.baseURL + apiUrls.getStockById + id;
    return this.http.get(url);
  }
  getMolassesTypeById(id): Observable<any> {
    const url = this.baseURL + apiUrls.getMolassesTypeById + id;
    return this.http.get(url);
  }
  addStockIn(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.addStock;
    return this.http.post(url, postdata);
  }
  updateStockIn(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.updateStock;
    return this.http.put(url, postdata);
  }
  searchStockIn(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.stockinSearch;
    return this.http.post(url, postdata);
  }
  getDownload(): Observable<any> {
    const url = this.baseURL + apiUrls.allotmentexportExcel;
    return this.http.get(url, { responseType: 'blob' });
  }
  getPrintData(urls: any): Observable<any> {
    const url = this.baseURL + urls;
    return this.http.get(url, { responseType: 'blob' });
  }
  searchTanReg(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.searchTankReg;
    return this.http.post(url, postdata);
  }

  gettankbyid(id) {
    const ids = `?tankId=${id}`
    const url = this.baseURL + `${apiUrls.gettankbyid}${ids}`;
    return this.http.get(url);
  }

  gettanksbyid(id) {
    const ids = `?gradeId=${id}`
    const url = this.baseURL + `${apiUrls.gettanksbyid}${ids}`;
    return this.http.get(url);
  }
  gettanksbyproductid(id) {
    const ids = `?productTypeId=${id}`
    const url = this.baseURL + `${apiUrls.gettankbyproductid}${ids}`;
    return this.http.get(url);
  }

  getlatestfortnight() {
    const url = this.baseURL + apiUrls.getlatestfortnight;
    return this.http.get(url);
  }
  getTankDetail(id) {
    const ids = `?tankId=${id}`
    const url = this.baseURL + `${apiUrls.transferTank}${ids}`;
    return this.http.get(url);
  }
  getTanksByGrade(id) {
    const ids = `?gradeId=${id}`
    const url = this.baseURL + `${apiUrls.getTankByGradeId}${ids}`;
    return this.http.get(url);
  }
  getTankDetails(id) {
    const ids = `?id=${id}`
    const url = this.baseURL + `${apiUrls.getTankDetailsTransfer}${ids}`;
    return this.http.get(url);
  }
}
