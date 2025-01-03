import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
  providedIn: 'root'
})
export class Pd9Service {

  baseURL = environment.distilleryBaseURL;
  
  constructor(
    private http: HttpClient
  ) { }

  addpd9data(data):Observable<any>{
    const url = this.baseURL + apiUrls.pd9create;
    return this.http.post(url,data);
  }
  updatedata(data):Observable<any>{
    const url = this.baseURL + apiUrls.updatepd9;
    return this.http.post(url,data);
  }
  getreferenceno():Observable<any>{
    const url = this.baseURL + apiUrls.getreferenceno;
    return this.http.get(url);
  }
  pd9gebyid(data):Observable<any>{
    const url = this.baseURL + apiUrls.getbyiddata + data;
    return this.http.get(url);
  }
  listdata(data):Observable<any>{
    const url = this.baseURL + apiUrls.listdata;
    return this.http.post(url,data);
  }
  approved(data):Observable<any>{ 
    // let data =''
    const url = this.baseURL + apiUrls.approved + data;
    return this.http.put(url,data);
  }
}
