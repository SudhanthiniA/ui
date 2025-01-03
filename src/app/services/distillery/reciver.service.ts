import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
  providedIn: 'root'
})
export class ReciverService {

  baseURL = environment.distilleryBaseURL;
  authToken = environment.authToken;

  constructor(
    private http: HttpClient
  ) { }


 searchpreFermentationdata(data):Observable<any>{
   const url = this.baseURL + apiUrls.prefermentationlazySearch;
   return this.http.post(url,data);
 }
 getpreFermentationbyid(id):Observable<any>{
   const url = this.baseURL + apiUrls.prefermentationgetbyid +id;
   return this.http.get(url);
 }
 addpreFermentationdata(data):Observable<any>{
   const url = this.baseURL + apiUrls.prefermentationcreate;
   return this.http.post(url,data);
 }
 updatepreFermentationdata(data):Observable<any>{
   const url = this.baseURL + apiUrls.prefermentationupdate;
   return this.http.put(url,data);
 }

 getcurrentStockBytankid(id) :Observable<any> {
  const url = this.baseURL + apiUrls.currentstockbytank + id;
  return this.http.get(url);
}

getdistilleytank() :Observable<any> {
  const url = this.baseURL + apiUrls.disttank;
  return this.http.get(url);

}

gettanksbyid(id) {
  const ids = `?gradeId=${id}`
  const url = this.baseURL + `${apiUrls.gettanksbyid}${ids}`;
  return this.http.get(url);
}

getyeaseldata(id):Observable<any>{
  const url = this.baseURL + apiUrls.viewyeastprocess + id;
  return this.http.get(url);
}

getotnumber():Observable<any>{
  const url = this.baseURL + apiUrls.prefermenterGetotnum;
  return this.http.get(url);
}

getotmumberdetails(id):Observable<any>{
  const url = this.baseURL + apiUrls.otdetails + id;
  return this.http.get(url);
}

getprefermentorvessalbyotid(id):Observable<any>{
  const url = this.baseURL + apiUrls.prefermentorvessalbyotid + id;
  return this.http.get(url);

}

getYeastreferenceNo(id):Observable<any>{
  const url = this.baseURL + apiUrls.yeastrefNobyotid + id;
  return this.http.get(url);

}
}
