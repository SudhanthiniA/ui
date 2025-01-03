import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrls } from '@appEnv/apiurls';
import { environment } from '@appEnv/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WholesaleLicenseRenewalService {

  constructor(private http: HttpClient) { }
  baseURL = environment.localDBUrl;

  createlicense(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.addLicenseRenewal;
    return this.http.post(url, postdata);
  }
  getAlllicense(): Observable<any> {
    const url = this.baseURL + apiUrls.addLicenseRenewal;
    return this.http.get(url);
  }
  getByIdlicense(id): Observable<any> {
    const url = this.baseURL + apiUrls.addLicenseRenewal +'/'+id;
    return this.http.get(url);
}
updatelicense(postdata,id): Observable<any> {
  const url = this.baseURL + apiUrls.addLicenseRenewal +'/'+id;
  return this.http.put(url, postdata);
}
}
