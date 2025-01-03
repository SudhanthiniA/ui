import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrls } from '@appEnv/apiurls';
import { environment } from '@appEnv/environment';

@Injectable({
  providedIn: 'root'
})
export class NewlicenceB1Service {
  constructor(
    private http: HttpClient
  ) { }
  baseURL = environment.licencemanagementURL;

  addb1(data){
    const url = this.baseURL + apiUrls.b1reg;
    return this.http.post(url,data);
  }
  addmb1(data){
    const url = this.baseURL + apiUrls.mb1reg;
    return this.http.post(url,data);
  }
  addmb3(data){
    const url = this.baseURL + apiUrls.mb3reg;
    return this.http.post(url,data);
  }
  addmb5(data){
    const url = this.baseURL + apiUrls.mb5reg;
    return this.http.post(url,data);
  }
  addv1(data){
    const url = this.baseURL + apiUrls.v1reg;
    return this.http.post(url,data);
  }
  addmb7(data){
    const url = this.baseURL + apiUrls.mb7reg;
    return this.http.post(url,data);
  }
}
