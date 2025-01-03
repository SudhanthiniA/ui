import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { apiUrls } from '@appEnv/apiurls';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WarehousebottlingplanService {
 
  constructor( private http: HttpClient) { }
 
  baseURL = environment.warehouseURL;
  baseURL1 = environment.baseURLMaster;

  getallbotlingplan() {
    const url = this.baseURL + apiUrls.getallbotlingplan;
        return this.http.get(url);
  }

  postbottlingplan(data) {
    const url = this.baseURL + apiUrls.addbottlingplan;
    return this.http.post(url,data)
  }

  updateplan(data) {
    const url = this.baseURL + apiUrls.updatebottlingplan;
    return this.http.put(url,data)
  }

  getplanbyid(id) {
    const url = this.baseURL + apiUrls.getpalnbyid +id;
    return this.http.get(url);
  }

  searchBottlingData(postParam): Observable<any> {
    const url = this.baseURL + apiUrls.searchBottling;
    return this.http.post(url, postParam);
  }
  
  getQrcodeMapping() {
    const url = this.baseURL1 + apiUrls.qrCodeMapping;
        return this.http.get(url);
  }
}
