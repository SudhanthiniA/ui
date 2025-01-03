import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {

  constructor(
    private http: HttpClient
  ) { }

  baseURL = environment.helpdeskURL;


  getAllSubcategoryList(): Observable<any> {
    const url = this.baseURL + apiUrls.getAllSubcategoryList;
    return this.http.get(url);
  }
  getByIdSubcategoryList(id): Observable<any> {
    const url = this.baseURL + apiUrls.SubcategorylistgetbyId + id;
    return this.http.get(url);
  }
  addsubcategory(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.addsubcategory;
    return this.http.post(url, postdata);
  }
  getByIdcategory(id): Observable<any> {
    const url = this.baseURL + apiUrls.subcategorybycategoryid + id;
    return this.http.get(url);
  }
  getallcategory(): Observable<any> {
    const url = this.baseURL + apiUrls.getallcategory;
    return this.http.get(url);
  }
  searchsubcategory(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.filtergetsubcategory;
    return this.http.post(url, postdata);
  }
}