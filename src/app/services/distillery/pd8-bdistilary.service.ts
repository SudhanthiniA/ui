import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
  providedIn: 'root'
})
export class Pd8BdistilaryService {
  baseURL = environment.distilleryBaseURL;
  authToken = environment.authToken;

  constructor(
    private http: HttpClient
  ) { }

  get8aApprovedlist():Observable<any>{
   const url = this.baseURL + apiUrls.pd8aapprovedlist;
   return this.http.get(url);
  }
 searchpd8data(data):Observable<any>{
   const url = this.baseURL + apiUrls.pd8blazySearch;
   return this.http.post(url,data);
 }
 getpd8bbyid(id):Observable<any>{
   const url = this.baseURL + apiUrls.getproductionPD8bById+id;
   return this.http.get(url);
 }
 addpd8data(data):Observable<any>{
   const url = this.baseURL + apiUrls.addProductionPD8b;
   return this.http.post(url,data);
 }
 updatepd8bdata(data):Observable<any>{
   const url = this.baseURL + apiUrls.updateProductionPD8b;
   return this.http.put(url,data);
 }

 approvalpd8b(data):Observable<any>{ 
  // let data =''
  const url = this.baseURL + apiUrls.pd8bapproval + data;
  return this.http.put(url,data);
}
}
