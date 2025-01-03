import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
  providedIn: 'root'
})
export class TankregistartionService {

  baseURL = environment.distilleryBaseURL;
  constructor(private http: HttpClient) { }

  getvessaltypes(): Observable<any> {
    const url = this.baseURL + apiUrls.vesseltype;
    return this.http.get(url);

  }
  getTanRegById(id): Observable<any> {
    const url = this.baseURL + apiUrls.getTankRegById + id;
    return this.http.post(url, id);
  }
  addTanReg(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.addTankReg;
    return this.http.post(url, postdata);
  }
  approveTanReg(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.addTankReg;
    return this.http.post(url, postdata);
  }
  updateTanReg(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.addTankReg;
    return this.http.post(url, postdata);
  }
  searchTanReg(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.tankRegLazySearch;
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
  searchTanRegs(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.tankRegLazySearch;
    return this.http.post(url, postdata);
  }
  getTankGrade(id): Observable<any> {
    const url = this.baseURL + apiUrls.getTankGrade + id;
    return this.http.get(url);
  }
  getAllTanReg(): Observable<any> {
    const url = this.baseURL + apiUrls.getdistAllTankReg;
    return this.http.get(url);
  }

  getapplicationnumbers(data): Observable<any> {
    const url = this.baseURL + apiUrls.gettankregapplicationnum + data;
    return this.http.post(url, data);
  }
  getlabledata(): Observable<any> {
    const url = this.baseURL + apiUrls.getlabledata;
    return this.http.get(url);
  }

  gettankviewlist(data, listtype): Observable<any> {
    const url = this.baseURL + apiUrls.gettankviewlist + listtype;
    return this.http.post(url, data);
  }
}
