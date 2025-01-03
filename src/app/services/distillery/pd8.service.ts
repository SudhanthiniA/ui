import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
  providedIn: 'root'
})
export class Pd8Service {

  baseURL = environment.distilleryBaseURL;
  authToken = environment.authToken;

  constructor(
    private http: HttpClient
  ) { }


 searchpd8data(data):Observable<any>{
   const url = this.baseURL + apiUrls.pd8lazySearch;
   return this.http.post(url,data);
 }
 getpd8byid(id):Observable<any>{
   const url = this.baseURL + apiUrls.getproductionPD8ById +id;
   return this.http.get(url);
 }
 addpd8data(data):Observable<any>{
   const url = this.baseURL + apiUrls.addproductionPD8;
   return this.http.post(url,data);
 }
 updatepd8data(data):Observable<any>{
   const url = this.baseURL + apiUrls.updateProductionPD8;
   return this.http.put(url,data);
 }
 approvalpd8(data):Observable<any>{ 
  // let data =''
  const url = this.baseURL + apiUrls.approvalProductionPD8 + data;
  return this.http.put(url,data);
}
}
