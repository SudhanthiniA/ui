import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
  providedIn: 'root'
})
export class BrandlabelregService {

  constructor(
    private http: HttpClient
  ) { }
  baseURL = environment.parentunit;
  baseurl =environment.parentUnit;
  licenseURL = environment.licencemanagementIPURL;

  getdetails(): Observable<any> {
    const url = this.licenseURL + 'license/category/Distillery';
    return this.http.get(url);
  }
  addetails(data): Observable<any> {
    const url = this.baseURL + 'brandLabel';
    return this.http.post(url, data);
  }
  getapplicationnumbers(data): Observable<any> {
    const url = this.baseURL + 'generateApplicationNumber?registrationType=' + data;
    return this.http.post(url, data);
  }
  search(payload): Observable<any> {
    const url = this.baseURL + 'brandLabel/brandLabelLazySearch';
    return this.http.post(url, payload);
  }
  getById(id): Observable<any> {
    const url = this.baseURL + 'brandLabel?id=' + id;
    return this.http.get(url);
  }
  workflow(postParam): Observable<any> {
    const url = this.baseURL + 'brandLabel/updateBrandLabelRequestStatusForWorkFLow';
    return this.http.post(url, postParam);
  }
  brandLabelExisting(): Observable<any> {
    const url = this.baseURL + 'brandLabel/existing';
    return this.http.get(url);
  }
  getbrandlabelcount(): Observable<any> {
    const url = this.baseurl + 'brandLabel/getBrandLabelStatusCount';
    return this.http.get(url);
  }
  getBrands(){
    const url = "http://65.0.150.210:3503/masterData/brand/getAllBrand";
    return this.http.get(url)
  }

}

