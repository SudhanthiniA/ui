import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
  providedIn: 'root'
})
export class Pd11IssuesService {

  baseURL = environment.distilleryBaseURL;

  constructor(
    private http: HttpClient
  ) { }

  getPd11issues(): Observable<any> {
    const url = this.baseURL + apiUrls.getAllPD11RegisterOfIssuespirit;
    return this.http.get( url );
  }
  getPd11issuesById(id) :Observable<any> {
    const url = this.baseURL + apiUrls.getPD11RegisterOfIssuespiritById + id;
    return this.http.get(url);
  }
  addPd11issues(postdata):Observable<any> {
    const url = this.baseURL + apiUrls.addPD11RegisterOfIssuespirit;
    return this.http.post(url,postdata);
  }
  updatePd11issues(postdata):Observable<any> {
    const url = this.baseURL + apiUrls.updatePD11RegisterOfIssuespirit;
    return this.http.put(url,postdata);
  }
  // searchPd11issues(postdata): Observable<any> {
  //   const url = this.baseURL + apiUrls.LazySearch;
  //   return this.http.post(url,postdata);

  // }
}
