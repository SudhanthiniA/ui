
import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { apiUrls } from '@appEnv/apiurls';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormFl25bService {

  constructor(
    private http: HttpClient
  ) { }
  baseURL = environment.localDBUrl;

  getFormFl25B(): Observable<any> {
    const url = this.baseURL  + apiUrls.getFl25B;
    return this.http.get(url);
}
addFormFl25B(postParam) {
  const url = this.baseURL + apiUrls.getFl25B;
  return this.http.post(url, postParam);
}
getFormFl25BId(id): Observable<any> {
  const url = this.baseURL + apiUrls.getFl25B + '/' + id;
  return this.http.get(url);
}

updateFormfl25B(id,postParam): Observable<any> {
  const url = this.baseURL + apiUrls.getFl25B + '/' + id;
  return this.http.put(url, postParam);
}
}