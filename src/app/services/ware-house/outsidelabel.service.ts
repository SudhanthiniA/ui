import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
// newly added
import { forkJoin } from 'rxjs';
import { Observable, of } from 'rxjs';

import { apiUrls } from '@appEnv/apiurls';

@Injectable({
  providedIn: 'root'
})
export class OutsidelabelService {
  baseURL = environment.warehouseURL;
  masterbaseurl = environment.baseURLMaster;
  userbaseURL = environment.baseURLUser;
  parenturl = environment.parentunit;

  constructor(private http: HttpClient) { }

  getBrandapplicationum(): Observable<any> {
    const url = this.baseURL + apiUrls.getapplicationnum;
    return this.http.get(url);
  }

  getbyapplicationnumber(id) {
    const url = this.baseURL + apiUrls.getbyapplicationnum + id;
    return this.http.get(url);
  }
  getBrandMaster(): Observable<any> {
    const url = this.masterbaseurl + apiUrls.getAllBrandMaster;
    return this.http.get(url);
  }

  getLiquorType(): Observable<any> {
    const url = this.masterbaseurl + apiUrls.getAllLiquorType;
    return this.http.get(url);
  }

  getallliquorcategory() {
    const url = this.masterbaseurl + apiUrls.getAllLiquor;
    return this.http.get(url);
  }

  getAllDomain(){
    const url = this.masterbaseurl + apiUrls.getAllDomain;
    return this.http.get(url);
  }

  getallsubliquor() {
    const url = this.masterbaseurl + apiUrls.getallsubliquortype;
    return this.http.get(url);
  }

  getsupplytype() {
    const url = this.masterbaseurl + apiUrls.getallsupplytype;
    return this.http.get(url);
  }

  getallmeasurement(){
    const url = this.masterbaseurl + apiUrls.getallmeasurement;
    return this.http.get(url);
  }

  getAllpackageType(){
    const url = this.masterbaseurl + apiUrls.getAllpackageType;
    return this.http.get(url);
  }

  
  addlabel(data) {
    const url = this.parenturl + apiUrls.addlabel;
    return this.http.post(url,data);
  }
//  Changed baseURL-->parenturl
  getalllabels() {
    const url = this.parenturl + apiUrls.getalllabel;
    return this.http.get(url);
  }

//  Changed baseURL-->parenturl
  getLabelRegbyid(id){
    const url = this.parenturl + apiUrls.getLabelRegbyId+ id;
    return this.http.get(url);
  }
  // search operation
  searchLabelReg(postParam): Observable<any>{
    const url = this.parenturl + apiUrls.searchLabelReg;
    return this.http.post(url, postParam);
  }
// calling Brand service 
// Changed baseURL-->parenturl
  getallbrand(){
    const url = this.parenturl+ apiUrls.newbrandGetAll;
    return this.http.get(url);
  }
}
