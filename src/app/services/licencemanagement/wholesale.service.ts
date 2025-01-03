import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
  providedIn: 'root'
})
export class WholesaleService {
  constructor(
    private http: HttpClient
  ) { }

baseURL = environment.licencemanagementURL;

addRegistration(postdata):Observable<any> {
    const url = this.baseURL + apiUrls.addWholeSaleRegistration;
    return this.http.post(url,postdata);
  }

}