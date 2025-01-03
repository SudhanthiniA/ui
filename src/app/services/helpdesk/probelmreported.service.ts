import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
  providedIn: 'root'
})
export class ProbelmReportedService {

  constructor(
    private http: HttpClient
  ) { }

  baseURL = environment.helpdeskURL;


  getAllProbelmReportedList(): Observable<any> {
    const url = this.baseURL + apiUrls.getAllProbelmReportedList;
    return this.http.get(url);
  }
  getByIdProbelmReportedList(id): Observable<any> {
    const url = this.baseURL + apiUrls.ProbelmReportedlistgetbyId + id;
    return this.http.get(url);
  }
  addproblemreported(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.problemreportadd;
    return this.http.post(url, postdata);
  }
  searchproblem(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.filterproblems;
    return this.http.post(url, postdata);
  }

}