import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrls } from '@appEnv/apiurls';
import { environment } from '@appEnv/environment';

@Injectable({
  providedIn: 'root'
})
export class NewlicenceB4Service {
  constructor(
    private http: HttpClient
  ) { }
  baseURL = environment.licencemanagementURL;

  
  addmb4(data){
    const url = this.baseURL + apiUrls.mb4reg;
    return this.http.post(url,data);
  }
}
