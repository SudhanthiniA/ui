import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
  providedIn: 'root'
})
export class Pd9arawmetirialService {
  baseURL = environment.distilleryBaseURL;
  authToken = environment.authToken;

  constructor(
    private http: HttpClient
  ) { }

  getpd9aalldata(data):Observable<any>{
    const url = this.baseURL + apiUrls.lazysearchpd9a;
    return this.http.post(url,data);
  }
  searchpd9A(data):Observable<any>{
    const url = this.baseURL + apiUrls.pd9aRawmateriallazySearch;
    return this.http.post(url,data);
  }
  getpd9abyid(id):Observable<any>{
    const url = this.baseURL + apiUrls.pd9aRwamaterialGetbyId +id;
    return this.http.get(url);
  }
  addpd9adata(data):Observable<any>{
    const url = this.baseURL + apiUrls.pd9aRwamaterialAdd;
    return this.http.post(url,data);
  }
  updatepd9adata(data):Observable<any>{
    const url = this.baseURL +apiUrls.pd9aRwamaterialUpdate;
    return this.http.post(url,data);
  }
  getreferenceno():Observable<any>{
    const url = this.baseURL + apiUrls.pd9asectionIref;
    return this.http.get(url);
  }
  approved(data):Observable<any>{
    const url = this.baseURL +apiUrls.approvedpd9a + data;
    return this.http.put(url,data);
  }


  createsectionI(data):Observable<any>{
    const url = this.baseURL + apiUrls.sectionIcreate;
    return this.http.post(url,data)
  }

  updatesectionI(data):Observable<any>{
    const url = this.baseURL + apiUrls.sectionIupdate;
    return this.http.put(url,data);
  }
  createsectionII(data):Observable<any>{
    const url = this.baseURL + apiUrls.sectionIIcreate;
    return this.http.post(url,data)
  }

  createsectionIII(data):Observable<any>{
    const url = this.baseURL + apiUrls.sectionIIIcreate;
    return this.http.post(url,data)
  }


  createsectionIV(data):Observable<any>{
    const url = this.baseURL + apiUrls.sectionIVcreate;
    return this.http.post(url,data)
  }
  createsectionV(data):Observable<any>{
    const url = this.baseURL + apiUrls.sectionVcreate;
    return this.http.post(url,data)
  }
}
