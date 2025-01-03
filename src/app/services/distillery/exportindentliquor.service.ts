import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';
@Injectable({
  providedIn: 'root'
})
export class ExportIndentLiquorService {

  constructor(
    private http: HttpClient
  ) { }
  baseURL = environment.distilleryBaseURL;
  
  searchTankConversion(postParam): Observable<any> {
    const url = this.baseURL + apiUrls.searchTankConversion;
    return this.http.post(url, postParam);
  }
}