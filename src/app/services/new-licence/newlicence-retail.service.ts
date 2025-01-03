import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrls } from '@appEnv/apiurls';
import { environment } from '@appEnv/environment';

@Injectable({
  providedIn: 'root'
})
export class NewlicenceRetailService {

  constructor(
    private http: HttpClient
  ) { }
  baseURL = environment.licencemanagementURL;
  
  addfl9(data){
    const url = this.baseURL + apiUrls.fl9reg;
    return this.http.post(url,data);
  }
  addfl9a(data){
    const url = this.baseURL + apiUrls.fl9Areg;
    return this.http.post(url,data);
  }
}
