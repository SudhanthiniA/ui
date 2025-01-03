import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
  })
  export class SugarmillRegistrationService {

    constructor(
        private http: HttpClient
      ) { }
  
    baseURL = environment.licencemanagementURL

    addsugarmill(postdata): Observable<any> {
        const url = this.baseURL + apiUrls.addsugarmill;
        return this.http.post(url,postdata);
    }

}