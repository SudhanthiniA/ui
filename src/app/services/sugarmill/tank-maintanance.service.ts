import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls' 
@Injectable({
  providedIn: 'root'
})
export class TankMaintananceService {

  
  baseURL = environment.sugarmillBaseURL;
  constructor(private http: HttpClient) { }
  getAllTanmaintanance(): Observable<any> {
    const url = this.baseURL + apiUrls.getalltankmaintanance;
    return this.http.get(url);
  }
  getTankById(id): Observable<any> {
    const url = this.baseURL + apiUrls.getbyid + id;
    return this.http.get(url);
  }
  addTanmaintanance(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.addtankmaintanance;
    return this.http.post(url, postdata);
  }
  approveTanReg(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.approvetank;
    return this.http.post(url, postdata);
  }
  updateTank(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.updateTankmaintanance;
    return this.http.put(url, postdata);
  }
  searchTan(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.searchtankmaintanancelist;
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
