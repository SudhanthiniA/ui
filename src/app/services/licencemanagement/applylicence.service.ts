import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
  providedIn: 'root'
})
export class LicenceApplyService {

  constructor(
    private http: HttpClient
  ) { }

  baseURL = environment.jsonBaseURL;

  getBranchs(): Observable<any> {
    const url = this.baseURL + apiUrls.getBranchs;
    return this.http.get(url);
  }

  getTypes(): Observable<any> {
    const url = this.baseURL + apiUrls.getTypes;
    return this.http.get(url);
  }

  addLicenceType(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.addLicenceType;
    return this.http.post(url, postdata);
  }
}
