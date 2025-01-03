import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { Observable, of } from 'rxjs';

import { apiUrls } from '@appEnv/apiurls';

@Injectable({
  providedIn: 'root'
})
export class OutofupbrandService {

  baseURL = environment.warehouseURL;
  masterbaseurl = environment.baseURLMaster;
  userbaseURL = environment.baseURLUser;
  parenturl = environment.parentunit;

  constructor(private http: HttpClient) { }

  getfinanceyear() {
    const url = this.masterbaseurl + apiUrls.fincilayearforbrand;
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

  getcategory() {
    const url = this.masterbaseurl + apiUrls.getAllCategory;
    return this.http.get(url);
  }

  getsupplytype() {
    const url = this.masterbaseurl + apiUrls.getallsupplytype;
    return this.http.get(url);
  }

  getallrawmaterial() {
    const url = this.masterbaseurl + apiUrls.getAllRawMaterial;
    return this.http.get(url);
  }

  addnewbrand(data) {
    const url = this.parenturl + apiUrls.newbrandAdd;
    return this.http.post(url,data);
  }
  updatenewbrand(data) {
    const url = this.baseURL + apiUrls.newbrandUpdate;
    return this.http.put(url, data);
  }
  getoriginlistbyDomainId(id){
    const url = this.masterbaseurl + apiUrls.getoriginbydomainid+ id;
    return this.http.get(url);
  }

  getActiveEntities(): Observable<any> {
    // const url = this.baseURL + apiUrls.getAllEntitys;
    const url = this.userbaseURL + apiUrls.getallentity;
    return this.http.post(url,{ "page": 0,
    "pageSize": 10});
  
  }

  getallbrand(){
    const url = this.parenturl+ apiUrls.newbrandGetAll;
    return this.http.get(url);
  }

  getbyid(id){
    const url = this.parenturl + apiUrls.getBrandById+ id;
    return this.http.get(url);
  }

  getallDistrics() {
    const url = this.masterbaseurl + apiUrls.getAllDistrict;
    return this.http.get(url);
  }

  getallstates() {
    const url = this.masterbaseurl + apiUrls.getAllState;
    return this.http.get(url);
  }

  getallcountries() {
    const url = this.masterbaseurl + apiUrls.getAllCountry;
    return this.http.get(url);
  }

  updatebrand(data){
    const url = this.parenturl + apiUrls.newbrandUpdate;
    return this.http.post(url,data);
  }
  searchBrandreg(postParam): Observable<any> {
    const url = this.parenturl + apiUrls.searchBrandReg;
    return this.http.post(url, postParam);
  }
 }
