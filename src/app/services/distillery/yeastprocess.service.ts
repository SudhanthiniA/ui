import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
  providedIn: 'root'
})
export class YeastprocessService {

  baseURL = environment.distilleryBaseURL;
  authToken = environment.authToken;

  constructor(
    private http: HttpClient
  ) { }


 searchpd8data(data):Observable<any>{
   const url = this.baseURL + apiUrls.pd8lazySearch;
   return this.http.post(url,data);
 }
 getvessalbyotplanid(id):Observable<any>{
   const url = this.baseURL + apiUrls.otplanbyyeastvesal +id;
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

createdata(data):Observable<any>{
  const url = this.baseURL + apiUrls.yeastcreate;
  return this.http.post(url,data);
}

updateyeastdata(data):Observable<any>{
  const url = this.baseURL + apiUrls.yeastupdate;
  return this.http.put(url,data);
}

getotnumber():Observable<any>{
  const url = this.baseURL + apiUrls.otnumber;
  return this.http.get(url);
}
getyeastveesel(id):Observable<any>{
  const url = this.baseURL + apiUrls.yeastnumber + id;
  return this.http.get(url);
}

gettanksbyid(id) {
  const ids = `?gradeId=${id}`
  const url = this.baseURL + `${apiUrls.gettanksbyid}${ids}`;
  return this.http.get(url);
}


yeastprocesslist(data):Observable<any>{
  const url = this.baseURL + apiUrls.yeastprocesslist;
  return this.http.post(url,data);
}
getyeaseldata(id):Observable<any>{
  const url = this.baseURL + apiUrls.viewyeastprocess + id;
  return this.http.get(url);
}
}
