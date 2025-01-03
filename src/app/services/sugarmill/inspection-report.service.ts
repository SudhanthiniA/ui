import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls'
@Injectable({
  providedIn: 'root'
})
export class InspectionReportService {
  baseURL = environment.sugarmillBaseURL;
  constructor(private http: HttpClient) { }

  getInspectionReport(): Observable<any> {
    const url = this.baseURL + apiUrls.getAllInspectionReport;
    return this.http.get(url);
  }
  getbalancess(id){
    const ids =`?tankNumber=${id}`
    const url = this.baseURL + `${apiUrls.getbalancedbytankid}${ids}`;
    return this.http.get(url);
  }
  getInspectionReportId(id): Observable<any> {
    const url = this.baseURL + apiUrls.inspectionReportGetById + id;
    return this.http.get(url);
  }
  addInspectionReport(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.createInspectionReport;
    return this.http.post(url, postdata);
  }
  updateInspectionReport(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.updateInspectionReport;
    return this.http.post(url, postdata);
  }
  searchInspectionReport(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.inspectionReportSearch;
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
    const url = this.baseURL + apiUrls.tankRegLazySearch;
    return this.http.post(url, postdata);
  }
}
