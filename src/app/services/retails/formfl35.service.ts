
import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { apiUrls } from '@appEnv/apiurls';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormFl35Service {

  constructor(
    private http: HttpClient
  ) { }
  baseURL = environment.localDBUrl;

  getFormFl35(): Observable<any> {
    const url = this.baseURL  + apiUrls.getFl35;
    return this.http.get(url);
}
addFormFl35(postParam) {
  const url = this.baseURL + apiUrls.getFl35;
  return this.http.post(url, postParam);
}
getFormFl35Id(id): Observable<any> {
  const url = this.baseURL + apiUrls.getFl35 + '/' + id;
  return this.http.get(url);
}

updateFormfl35(id,postParam): Observable<any> {
  const url = this.baseURL + apiUrls.getFl35 + '/' + id;
  return this.http.put(url, postParam);
}
}