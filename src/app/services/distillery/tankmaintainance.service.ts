import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';
@Injectable({
  providedIn: 'root'
})
export class TankMaintainancesService {

  constructor(
    private http: HttpClient
  ) { }
  baseURL = environment.distilleryBaseURL;

  getTanById(id): Observable<any> {
    const url = this.baseURL + apiUrls.tankGetById +id;
    return this.http.get(url);
  }
  addTank(postParam): Observable<any> {
    const url = this.baseURL + apiUrls.addTank;
    return this.http.post(url, postParam);
  }
  getAllTank(): Observable<any> {
    const url = this.baseURL + apiUrls.getdistAllTankReg;
    return this.http.get(url);
  }
  
  // updateTan(postParam): Observable<any> {
  //   const url = this.baseURL + apiUrls.tankUpdate;
  //   return this.http.put(url, postParam);
  // }
  searchTank(postParam): Observable<any> {
    const url = this.baseURL + apiUrls.searchTank;
    return this.http.post(url, postParam);
  }
  approveTank(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.approveTankMaintain;
    return this.http.post(url, postdata);
  }
}