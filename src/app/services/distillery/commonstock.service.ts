import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';
@Injectable({
  providedIn: 'root'
})
export class CommonStockServices {

  constructor(
    private http: HttpClient
  ) { }
  baseURL = environment.distilleryBaseURL;

  getTanById(takeRegId): Observable<any> {
    const url = this.baseURL + apiUrls.stockGetById +takeRegId;
    return this.http.get(url);
  }}