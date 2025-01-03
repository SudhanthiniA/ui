import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
  })
  export class ElotteryUserRegistrationService {

    constructor(
        private http: HttpClient
      ) { }
  
    baseURL = environment.licencemanagementURL;

    add(postdata): Observable<any> {
        const url = this.baseURL + apiUrls.addUserRegistrationElottery;
        return this.http.post(url,postdata);
    }

}