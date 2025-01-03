import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrls } from '@appEnv/apiurls';
import { environment } from '@appEnv/environment';
import { Observable } from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class NewlicenseBhangCl8Service {

  constructor(
    private http: HttpClient
  ) { }
  baseURL = environment.licencemanagementURL;
  addbhangcl8(postParam): Observable<any> {
    const url = this.baseURL + apiUrls.addBhangForms;
    return this.http.post(url, postParam);
  }
}
