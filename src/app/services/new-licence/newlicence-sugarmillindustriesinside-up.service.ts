import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrls } from '@appEnv/apiurls';
import { environment } from '@appEnv/environment';
import { Observable } from 'rxjs-compat';

@Injectable({
  providedIn: 'root'
})
export class NewlicenceSugarmillindustriesinsideUPService {
  constructor(
    private http: HttpClient
  ) { }

baseURL = environment.licencemanagementURL;

  createSugarMill(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.newlicenceSugarMillINdustriesInsideUP;
    return this.http.post(url,postdata);
}

}
