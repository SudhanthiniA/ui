import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrls } from '@appEnv/apiurls';
import { environment } from '@appEnv/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Fl7cService {
  constructor(private http: HttpClient) { }

  baseURL = environment.localDBUrl;

  createfl7c(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.addfl7c;
    return this.http.post(url, postdata);
  }
}
