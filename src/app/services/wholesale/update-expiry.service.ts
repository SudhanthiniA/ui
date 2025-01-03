import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrls } from '@appEnv/apiurls';
import { environment } from '@appEnv/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateExpiryService {
  constructor(private http: HttpClient) { }

  baseURL = environment.localDBUrl;

  getAllexpiry(paramsUrl): Observable<any> {
    const url = this.baseURL +paramsUrl ;
    return this.http.get(url);
  }
}
