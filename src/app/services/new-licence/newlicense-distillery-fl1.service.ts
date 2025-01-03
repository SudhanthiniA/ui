import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrls } from '@appEnv/apiurls';
import { environment } from '@appEnv/environment';

@Injectable({
  providedIn: 'root'
})
export class NewlicenseDistilleryFl1Service {
  constructor(
    private http: HttpClient
  ) { }
  baseURL = environment.licencemanagementURL;

  addFl1(data){
    const url = this.baseURL + apiUrls.Distillery_fl1;
    return this.http.post(url,data);
  }
}
