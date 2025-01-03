import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
  providedIn: 'root'
})
export class Pd8aWashdetailService {

  baseURL = environment.distilleryBaseURL;

  constructor(
    private http: HttpClient
  ) { }

  // getPd8Awashdetail(): Observable<any> {
  //   const url = this.baseURL + apiUrls.pd8awashdetaillazySearch;
  //   return this.http.get( url );
  // }
  getallpd8approveddata():Observable<any>{
    const url = this.baseURL + apiUrls.approved8Mollases;
    return this.http.get(url);
   }
  getPd8AwashdetailById(id) :Observable<any> {
    const url = this.baseURL + apiUrls.pd8agetById + id;
    return this.http.get(url);
  }
  addPd8Awashdetail(postdata):Observable<any> {
    const url = this.baseURL + apiUrls.pd8acreate;
    return this.http.post(url,postdata);
  }
  updatePd8Awashdetail(postdata):Observable<any> {
    const url = this.baseURL + apiUrls.pd8aupdate;
    return this.http.put(url,postdata);
  }
  searchPd8Awashdetail(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.pd8alazySearch;
    return this.http.post(url,postdata);

  }
  approvalpd8a(data):Observable<any>{ 
    // let data =''
    const url = this.baseURL + apiUrls.pd8aapproval + data;
    return this.http.put(url,data);
  }
}
