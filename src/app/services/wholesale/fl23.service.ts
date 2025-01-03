import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrls } from '@appEnv/apiurls';
import { environment } from '@appEnv/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Fl23Service {
  constructor(private http: HttpClient) { }

  baseURL = environment.localDBUrl;

  createfl23(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.addfl23;
    return this.http.post(url, postdata);
  }
}