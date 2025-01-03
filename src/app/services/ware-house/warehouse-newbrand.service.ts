import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { Observable, of } from 'rxjs';

import { apiUrls } from '@appEnv/apiurls';

@Injectable({
  providedIn: 'root'
})
export class WarehouseNewbrandService {

  constructor(private http: HttpClient) { }
  baseURL = environment.baseURLMaster;
  baseURL1 = environment.warehouseURL;
  barseurluser = environment.baseURLUser;
  baseurlworkflow = environment.workflowconfig;
  getAllState(): Observable<any> {
    const url = this.baseURL + apiUrls.getAllState;
    return this.http.get(url);
  }
  getunitlicensetype() {
    const url = this.baseURL1 + apiUrls.getunitlicencename;
    return this.http.get(url);
  }
  getAllSubCategory() {
    const url = this.baseURL + apiUrls.getAllSubCategory;
    return this.http.get(url);
  }
  getAllpackageType() {
    const url = this.baseURL + apiUrls.getAllpackageType;
    return this.http.get(url);
  }
  getAllLiquorType() {
    const url = this.baseURL + apiUrls.getAllLiquorType;
    return this.http.get(url);
  }
  getAllDomain() {
    const url = this.baseURL + apiUrls.getAllDomain;
    return this.http.get(url);
  }
  getallmeasurement() {
    const url = this.baseURL + apiUrls.getallmeasurement;
    return this.http.get(url);
  }
  getbyid(id) {
    const url = this.baseURL1 + apiUrls.getBrandById + id;
    return this.http.get(url);
  }
  getoriginlistbyDomainId(id) {
    const url = this.baseURL1 + apiUrls.getoriginbydomainid + id;
    return this.http.get(url);
  }
  addbranddetails(data) {
    const url = this.baseURL1 + apiUrls.newbrandAdd;
    return this.http.post(url, data)
  }
  updatebranddetails(data) {
    const url = this.baseURL1 + apiUrls.newbrandUpdate;
    return this.http.put(url, data)
  }
  getallbrand() {
    const url = this.baseURL + apiUrls.getAllBrandMaster;
    return this.http.get(url);
  }
  getEntityName() {
    const url = this.baseURL1 + apiUrls.newbrandBondDetails;
    return this.http.get(url);
  }

  approvalAllotment(data) {
    const url = this.baseURL1 + apiUrls.approvalbrand;
    return this.http.post(url, data)
  }
  getAllcart() {
    const url = this.baseURL + apiUrls.getAllcart;
    return this.http.get(url);
  }

  getuserbyid(id) {
    const ids = `?id=${id}`;
    const url = this.barseurluser + `${apiUrls.getuserbyid}${ids}`;
    return this.http.get(url);
  }

  getworkflowbydesignation(data) {
    const ids = `?workFlowName=${data.workflowname}&designation=${data.design}`;
    const url = this.baseurlworkflow + `${apiUrls.getworkflowbydesign}${ids}`;
    return this.http.get(url);
  }
  getdetailsbytransportNo(id) {
    const ids = `?gatePassNo=${id}`;
    const url = this.baseURL1 + `${apiUrls.getdetailsbytransportno}${ids}`;
    return this.http.get(url);

  }
  addstockin(data) {
    const url = this.baseURL1 + apiUrls.addstockinn;
    return this.http.post(url, data)
  }
  getallstockiin() {
    const url = this.baseURL1 + apiUrls.getallstock;
    return this.http.get(url);

  }

  searchRenewBrand(postParam): Observable<any> {
    const url = this.baseURL + apiUrls.searchreNewBrand;
    return this.http.post(url, postParam);
  }
}
