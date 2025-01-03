import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrls } from '@appEnv/apiurls';
import { environment } from '@appEnv/environment';

@Injectable({
  providedIn: 'root'
})
export class NewlicenceB6Service {
  constructor(
    private http: HttpClient
  ) { }
  baseURL = environment.licencemanagementURL;

  
  addmb6(data){
    const url = this.baseURL + apiUrls.mb6reg;
    return this.http.post(url,data);
  }
}
