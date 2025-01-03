import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';


@Injectable({
  providedIn: 'root'
})
export class BreweryRegistrationService {

  constructor(
    private http: HttpClient
  ) { }

baseURL = environment.licencemanagementURL;

addBreweryRegistration(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.addBreweryRegistration;
    return this.http.post(url,postdata);
}
getByIdbeware(id): Observable<any> {
  const url = this.baseURL + apiUrls.getBreweryRegistration + id;
  return this.http.get(url);
}
}
