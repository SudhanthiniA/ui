import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';
@Injectable({
  providedIn: 'root'
})
export class ProductionPlanService {

  constructor(
    private http: HttpClient
  ) { }
  baseURL = environment.distilleryBaseURL;


searchTank(postParam): Observable<any> {
    const url = this.baseURL + apiUrls.searchTank;
    return this.http.post(url, postParam);
  }
}