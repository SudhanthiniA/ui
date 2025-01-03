import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
  })
  export class LicencemanagementService {

    constructor(
        private http: HttpClient
      ) { }
  
    baseURL = environment.jsonBaseURL;

       get(): Observable<any> {
        const url = this.baseURL + apiUrls.getlicencelist;
        return this.http.get(url);
    }
    getAll(): Observable<any> {
        const url = this.baseURL + apiUrls.getrenewallist;
        return this.http.get(url);
    }
    getmodeofpay(id): Observable<any> {
        const url = this.baseURL + apiUrls.getmodeofpay+id;
        return this.http.get(url);
    }
    add(postdata):Observable<any> {
        const url = this.baseURL + apiUrls.addlicencelist;
        return this.http.post(url,postdata);
      }

      getByid1(id): Observable<any> {
        const url = this.baseURL + apiUrls.getByid1+id;
        return this.http.get(url);
    }
    getByid2(id): Observable<any> {
        const url = this.baseURL + apiUrls.getByid2+id;
        return this.http.get(url);
    }
    getlicencdetails(id): Observable<any> {
        const url = this.baseURL + apiUrls.getlicencdetails+id;
        return this.http.get(url);
    }
    getByid(id): Observable<any> {
        const url = this.baseURL + apiUrls.getByid+id;
        return this.http.get(url);
    }
    getBranch(): Observable<any> {
        const url = this.baseURL + apiUrls.getBranch;
        return this.http.get(url);
    }
    getType(): Observable<any> {
        const url = this.baseURL + apiUrls.getType;
        return this.http.get(url);
    }
    getDistrict(): Observable<any> {
        const url = this.baseURL + apiUrls.getDistrict;
        return this.http.get(url);
    }
    getState(): Observable<any> {
        const url = this.baseURL + apiUrls.getState;
        return this.http.get(url);
    }
  }