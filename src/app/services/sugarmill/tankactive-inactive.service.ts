import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls'
@Injectable({
  providedIn: 'root'
})
export class TankactiveInactiveService {

  
  baseURL = environment.sugarmillBaseURL;
  constructor(private http: HttpClient) { }
  getAllTanActiveInactive(): Observable<any> {
    const url = this.baseURL + apiUrls.getalltankactiveinactive;
    return this.http.get(url);
  }
  getTankaciveInById(id): Observable<any> {
    const url = this.baseURL + apiUrls.gettankactivebyid + id;
    return this.http.get(url);
  }
  addTankactiveInactive(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.addtankactiveinactive;
    return this.http.post(url, postdata);
  }
  approveTankactiveIn(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.tankactiveapprove;
    return this.http.post(url, postdata);
  }
  updateTankactiveIn(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.updatetankactiveinactive;
    return this.http.put(url, postdata);
  }
  approvetankactivein(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.tankactiveapprove;
    return this.http.put(url, postdata);
  }
  searchTan(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.searchtankactivelist;
    return this.http.post(url, postdata);
  }
  getDownloadExcell(): Observable<any> {
    const url = this.baseURL + apiUrls.exportExcell;
    return this.http.get(url, { responseType: 'blob' });
  }
  getPrintData(urls:any): Observable<any> {
    const url = this.baseURL + urls;
    return this.http.get(url, { responseType: 'blob' });
  }

}
