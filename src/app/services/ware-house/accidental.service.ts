import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { apiUrls } from '@appEnv/apiurls';
@Injectable({
  providedIn: 'root'
})
export class AccidentalService {

  constructor(private http: HttpClient) { }

  baseURL = environment.warehouseURL;

  getallaccedents() {
    const url = this.baseURL + apiUrls.getallaccident;
    return this.http.get(url);
  }

  addaccident(data) {
    const url = this.baseURL + apiUrls.addaccident;
    return this.http.post(url, data);
  }

  updateAccident(data) {
    const url = this.baseURL + apiUrls.upDateAccident;
    return this.http.put(url, data);
  }

  getbyaccid(id) {
    const url = this.baseURL + apiUrls.getaccidentbyid + id;
    return this.http.get(url);
  }
}

