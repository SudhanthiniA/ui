import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrls } from '@appEnv/apiurls';
import { environment } from '@appEnv/environment';

@Injectable({
  providedIn: 'root'
})
export class Newlicencev2Service {
  constructor(
    private http: HttpClient
  ) { }
  baseURL = environment.licencemanagementURL;

  
  addv2(data){
    const url = this.baseURL + apiUrls.v2reg;
    return this.http.post(url,data);
  }
}
