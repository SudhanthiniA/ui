import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrls } from '@appEnv/apiurls';
import { environment } from '@appEnv/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReturnWorklistService {
  constructor(private http: HttpClient) { }

  baseURL = environment.localDBUrl;

  createreturn(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.addreturnworklist;
    return this.http.post(url, postdata);
  }
  getAllretrn(): Observable<any> {
    const url = this.baseURL + apiUrls.addreturnworklist;
    return this.http.get(url);
  }
  getById(id): Observable<any> {
    const url = this.baseURL + apiUrls.addreturnworklist +'/'+id;
    return this.http.get(url);
}
updatereturn(postdata,id): Observable<any> {
  const url = this.baseURL + apiUrls.addreturnworklist +'/'+id;
  return this.http.put(url, postdata);
}
}
