import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { Observable, of } from 'rxjs';

import { apiUrls } from '@appEnv/apiurls';
@Injectable({
  providedIn: 'root'
})
export class WarehouseStockInService {

  constructor(private http: HttpClient) { }
  baseURL = environment.warehouseURL;
  baseUrl = environment.parentunit;
  // baseURL1=environment.warehouseURL;
  addStockIndetails(data) {
    const url = this.baseURL + apiUrls.addStockinDetails;
    return this.http.post(url, data)
  }
  updateStockIndetails(data) {
    const url = this.baseURL + apiUrls.updateStockDetails;
    return this.http.put(url, data)
  }
  getallStockIndetails() {
    const url = this.baseURL + apiUrls.getAllStockInDetails;
    return this.http.get(url);
  }
  getStockdetailstbyid(id) {
    const url = this.baseURL + apiUrls.getWStockById + id;
    return this.http.get(url);
  }
  searchStockInDetails(postParam): Observable<any> {
    const url = this.baseURL + apiUrls.searchStockIndetails;
    return this.http.post(url, postParam);
  }
  getAllstockInLazySearch(obj): Observable<any> {
    const url = this.baseURL + apiUrls.getAllstockInLazySearch;
    return this.http.post(url, obj);
  }
  getAllStockinDetails(licenseNumber) {
    const url = this.baseUrl + 'temp/getTransportPass?licenseNumber=' + licenseNumber;
    return this.http.get(url);
  }
addStockin(data):Observable<any> {
  const url = "http://65.0.150.210:3508/" + apiUrls.addStockin;
  return this.http.post(url, data)
}

}