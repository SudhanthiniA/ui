import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
  providedIn: 'root'
})
export class Pd10Service {
  baseURL = environment.distilleryBaseURL;
  authToken = environment.authToken;

  constructor(
    private http: HttpClient
  ) { }

  getmf4gatepass():Observable<any>{
    const url = this.baseURL + apiUrls.mf4gatepass;
    return this.http.get(url);
  }
  getmf4data(data):Observable<any>{
    const url = this.baseURL + apiUrls.mf4autopopulatedata +data;
    return this.http.put(url,data);
  }
  createpd10(data):Observable<any>{
    const url = this.baseURL + apiUrls.addPD10;
    return this.http.post(url,data); 
  }
  getPd10all(data):Observable<any>{
    const url = this.baseURL + apiUrls.pd10lazySearch;
    return this.http.post(url,data);
  }
  getpd10byid(id):Observable<any>{
    const url = this.baseURL + apiUrls.pd10Byid +id;
    return this.http.get(url);
  }
  
}
