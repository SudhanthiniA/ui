import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls'
@Injectable({
  providedIn: 'root'
})
export class TransportGenService {
  baseURL = environment.sugarmillBaseURL;
  constructor(private http: HttpClient) { }
  getAllTransGen(): Observable<any> {
    const url = this.baseURL + apiUrls.getAllTransportGen;
    return this.http.get(url);
  }
  getAllSugarMilllName(): Observable<any> {
    const url = this.baseURL + apiUrls.sugarmillNameTransGen;
    return this.http.get(url);
  }
  getTransGenById(id): Observable<any> {
    const url = this.baseURL + apiUrls.transportGenGetById + id;
    return this.http.get(url);
  }
  addTransGen(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.createMf4;
    return this.http.post(url, postdata);
  }
  approveTransGen(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.approveTransGen;
    return this.http.post(url, postdata);
  }
  updateTransGen(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.updateTransportGeneration;
    return this.http.post(url, postdata);
  }
  searchTransGen(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.transportSearch;
    return this.http.post(url, postdata);
  }
  getDownload(): Observable<any> {
    const url = this.baseURL + apiUrls.allotmentexportExcel;
    return this.http.get(url, { responseType: 'blob' });
  }
  getPrintData(): Observable<any> {
    const url = this.baseURL + apiUrls.transportGenPrint;
    return this.http.get(url, { responseType: 'blob' });
  }
  approvedIndent(id): Observable<any> {
    const url = this.baseURL + apiUrls.approvedIndent + id;
    return this.http.get(url);
  }
  getOutwardIndent(id): Observable<any> {
    const url = this.baseURL + apiUrls.outwardIndentDetails + id;
    return this.http.get(url);
  }
  getMf4Tanks(id,gradeId): Observable<any> {
    const url = `${this.baseURL}${apiUrls.getTanks}?productTypeId=${id}&gradeId=${gradeId}`;
    return this.http.get(url);
  }

  getTankDetails(id): Observable<any> {
    const url = this.baseURL + apiUrls.getMf4TankDetails + id;
    return this.http.get(url);
  }
  getcurrentseason(){
    const url = this.baseURL + apiUrls.currentSeason;
    return this.http.get(url);
  }
}
