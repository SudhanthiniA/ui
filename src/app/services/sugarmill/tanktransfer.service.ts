import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls'

@Injectable({
  providedIn: 'root'
})
export class TanktransferService {

  baseURL = environment.sugarmillBaseURL;
  constructor(private http: HttpClient) { }
  getAllTanReg(): Observable<any> {
    const url = this.baseURL + apiUrls.getAllTankReg;
    return this.http.get(url);
  }
  getTanRegById(id): Observable<any> {
    const url = this.baseURL + apiUrls.tankRegGetById + id;
    return this.http.get(url);
  }
  addTantransfer(postdata): Observable<any> {
    console.log(postdata)
    const url = this.baseURL + apiUrls.addtanktransfer;
    return this.http.post(url, postdata);
  }
  approveTanReg(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.trankRegApprove;
    return this.http.post(url, postdata);
  }
  updateTanReg(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.tankRegUpdate;
    return this.http.put(url, postdata);
  }
  searchTanReg(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.searchTankReg;
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
