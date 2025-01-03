import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrls } from '@appEnv/apiurls';
import { environment } from '@appEnv/environment';
import { Observable } from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class NewlicenceIndustriesOutsideupService {
  constructor(
    private http: HttpClient
  ) { }
  baseURL = environment.licencemanagementURL;

  addoutsideup(data){
    const url = this.baseURL + apiUrls.addindustrialoutsideup;
    return this.http.post(url,data);
  }
}
