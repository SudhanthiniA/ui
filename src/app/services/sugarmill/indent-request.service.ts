import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls'
@Injectable({
  providedIn: 'root'
})
export class IndentRequestService {
  baseURL = environment.sugarmillBaseURL;
  constructor(private http: HttpClient) { }
  approveIndent(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.indentApprove;
    return this.http.post(url,postdata);
  }
  searchIndent(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.searchOrderRequest;
    return this.http.post(url,postdata);
  }
  indentGetById(id): Observable<any> {
    const url = this.baseURL + apiUrls.orderRequestGetById + id;
    return this.http.get(url);
  }
}
