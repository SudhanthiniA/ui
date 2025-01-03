import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';
@Injectable({
  providedIn: 'root'
})
export class TankConversionService {

  constructor(
    private http: HttpClient
  ) { }
  baseURL = environment.distilleryBaseURL;
  url = environment.devisionUrl;

  get(): Observable<any> {
    const url = this.baseURL + apiUrls.listTankConversion;
    return this.http.get(url);
  }

  searchTankConversion(postParam): Observable<any> {
    const url = this.baseURL + apiUrls.searchTankConversion;
    return this.http.post(url, postParam);
  }

  addTankConversion(postParam): Observable<any> {
    const url = this.baseURL + apiUrls.addTankConversion;
    return this.http.post(url, postParam);
  }
  
  updateTankCon(postParam): Observable<any> {
    const url = this.baseURL + apiUrls.putTankConversion;
    return this.http.post(url, postParam);
  }

  getAllTank(): Observable<any> {
    const url = this.url + apiUrls.getallTanks;
    return this.http.get(url);
  }

  getTankConversionById(id): Observable<any> {
    const url = this.baseURL + apiUrls.getByTankConversionId + id;
    return this.http.get(url);
  }

  approveTankTransfer(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.approveTankTransfer;
    return this.http.post(url, postdata);
  }

  approveTankCon(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.approveTankCon;
    return this.http.post(url, postdata);
  }

}