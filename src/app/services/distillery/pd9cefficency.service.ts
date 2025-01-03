import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
  providedIn: 'root'
})
export class Pd9cefficencyService {
  baseURL = environment.distilleryBaseURL;
  authToken = environment.authToken;

  constructor(
    private http: HttpClient
  ) { }

  getalldatapd9c(data):Observable<any>{
    const url = this.baseURL + apiUrls.pd9cEfficiencyGetAll;
    return this.http.post(url,data);
  }

  searchdata(data):Observable<any>{
    const url = this.baseURL + apiUrls.pd9cEfficiencylazySearch;
    return this.http.post(url,data);
  }
  getpd9cbyid(id):Observable<any>{
    const url = this.baseURL + apiUrls.pd9cEfficiencyGetbyId + id;
    return this.http.get(url);
  }
  addpd9cdata(data):Observable<any>{
    const url = this.baseURL + apiUrls.pd9cEfficiencyAdd;
    return this.http.post(url,data);
  }
  updatepd9cdata(data):Observable<any>{
    const url = this.baseURL + apiUrls.pd9cEfficiencyUpdate;
    return this.http.put(url,data);
  }
  getreference():Observable<any>{
    const url = this.baseURL + apiUrls.pd9capprovelapi;
    return this.http.get(url);
  }
// need to change the api ***
  approved(data):Observable<any>{ 
    // let data =''
    const url = this.baseURL + apiUrls.pd9capprovel + data;
    return this.http.put(url,data);
  }
}
