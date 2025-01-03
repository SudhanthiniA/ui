import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
  providedIn: 'root'
})
export class BondLicenseService {

  constructor(
    private http: HttpClient
  ) { }

baseURL = environment.licencemanagementURL;

addBondLicense(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.addBondLicense;
    return this.http.post(url,postdata);
}
getById(id): Observable<any> {
  const url = this.baseURL + apiUrls.getBondLicense + id;
  return this.http.get(url);
}

}
