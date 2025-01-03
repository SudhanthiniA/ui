import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
  providedIn: 'root'
})
export class Pd9bproducationService {
  baseURL = environment.distilleryBaseURL;
  authToken = environment.authToken;

  constructor(
    private http: HttpClient
  ) { }

  getallpd9bdata():Observable<any>{
    const url = this.baseURL + apiUrls.PD9bProductionSumgetAll;
    return this.http.get(url);
  }
  searchpd9bdata(data):Observable<any>{
    const url = this.baseURL + apiUrls.PD9bProductionSumgetAll;
    return this.http.post(url,data)
  }

  // getpd9bbyid(id):Observable<any>{
  //   const url = this.baseURL + apiUrls.PD9bProductionSumGetbyId +id;
  //   return this.http.get(url);
  // }
  addpd9bdata(data):Observable<any>{
    const url = this.baseURL + apiUrls.PD9bProductionSumAdd;
    return this.http.post(url,data);
  }
  updatepd9bdata(data):Observable<any>{
    const url = this.baseURL + apiUrls.PD9bProductionSumUpdate;
    return this.http.put(url,data);
  }
  getreference():Observable<any>{
    const url = this.baseURL + apiUrls.getpd9breferenceno;
    return this.http.get(url);
  }
  getpd9bbyid(id):Observable<any>{
    const url = this.baseURL + apiUrls.PD9bProductionSumGetbyId +id;
    return this.http.get(url);
  }

  approved(data):Observable<any>{
    const url = this.baseURL +apiUrls.pd9bapprovel + data;
    return this.http.put(url,data);
  }
}
