import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
  })
  export class ExportsOfNarcoticDrugsService {

    constructor(
        private http: HttpClient
      ) { }
  
    baseURL = environment.licencemanagementURL;

    ExportsOfNarcoticDrugs(postdata): Observable<any> {
        const url = this.baseURL + apiUrls.ExportsOfNarcoticDrugs;
        return this.http.post(url,postdata);
    }

}