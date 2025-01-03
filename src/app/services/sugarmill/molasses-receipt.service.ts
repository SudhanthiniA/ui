import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls'
import { UrlSegment } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class MolassesReceiptService {
  baseURL = environment.sugarmillBaseURL;
  constructor(private http: HttpClient) { }
  getAllMolassesReceipt(): Observable<any> {
    const url = this.baseURL + apiUrls.getAllMolassesRecieptReg;
    return this.http.get(url);
  }
  getMolassesReceiptById(id): Observable<any> {
    const url = this.baseURL + apiUrls.getMolassesRecieptRegById + id;
    return this.http.get(url);
  }
  addMolassesReceipt(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.addMolassesRecieptReg;
    return this.http.post(url, postdata);
  }
  updateMolassesReceipt(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.updateMolassesRecieptReg;
    return this.http.put(url, postdata);
  }
  searchMolassesReceipt(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.molassesReceiptSearch;
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
