import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { Observable, of } from 'rxjs';

import { apiUrls } from '@appEnv/apiurls';

@Injectable({
  providedIn: 'root'
})
export class LabelregestrationService {
  baseURL=environment.warehouseURL;
  constructor( private http: HttpClient) { }
  addlabell(data){
    const url = this.baseURL + apiUrls.addlabledata;
    return this.http.post(url,data);
  }
  getliquortype(){ 
    const url = this.baseURL + apiUrls.liquortypeforlabel;
    return this.http.get(url);
  }
  getlablebyid(id){
    const url = this.baseURL + apiUrls.getlabelbyid+id;
      return this.http.get(url);
  }
  getunitdetails(){
    const url = this.baseURL + apiUrls.getunitdetails;
    return this.http.get(url);
  }

  getalllabelrequest() {
    const url = this.baseURL + apiUrls.getalllabelrequest;
    return this.http.get(url);
  }

  addlabeldetails(obj){
    const url = this.baseURL + apiUrls.addlabelregester;
    return this.http.post(url,obj);
  }

  getallpayments(){
    const url = this.baseURL + apiUrls.getallpaymentreq;
    return this.http.get(url);
  }
  addmakepayment(obj){
    const url = this.baseURL + apiUrls.makepayment;
     return this.http.post(url,obj)
  }
}
