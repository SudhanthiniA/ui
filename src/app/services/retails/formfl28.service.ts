
import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { apiUrls } from '@appEnv/apiurls';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormFl28Service {

  constructor(
    private http: HttpClient
  ) { }
  baseURL = environment.localDBUrl;

  getFormFl28(): Observable<any> {
    const url = this.baseURL  + apiUrls.getfl28;
    return this.http.get(url);
}
addFormFl28(postParam) {
  const url = this.baseURL + apiUrls.getfl28;
  return this.http.post(url, postParam);
}
getFormFl28Id(id): Observable<any> {
  const url = this.baseURL + apiUrls.getfl28 + '/' + id;
  return this.http.get(url);
}

updateFormfl28(id,postParam): Observable<any> {
  const url = this.baseURL + apiUrls.getfl28 + '/' + id;
  return this.http.put(url, postParam);
}
}