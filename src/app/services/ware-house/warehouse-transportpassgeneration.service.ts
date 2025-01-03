import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { apiUrls } from '@appEnv/apiurls';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WarehouseTrnsportPassGenService {

  constructor(private http: HttpClient) { }
  baseURL = environment.warehouseURL;
  // baseURL1=environment.warehouseURL;
  addtransportdetails(data) {
    const url = this.baseURL + apiUrls.addWarehouseTransportPassGen;
    return this.http.post(url, data)
  }
  updatetransportdetails(data) {
    const url = this.baseURL + apiUrls.updateWarehouseTransportPassGen;
    return this.http.put(url, data)
  }
  getalltransportdetails() {
    const url = this.baseURL + apiUrls.getAllWarehouseTransportPassGen;
    return this.http.get(url);
  }
  getransportdetailstbyid(id) {
    const url = this.baseURL + apiUrls.getWarehouseTransportPassGenById + id;
    return this.http.get(url);
  }
  searchTransportDetails(postParam): Observable<any> {
    const url = this.baseURL + apiUrls.searchWarehouseTransportPassGen;
    return this.http.post(url, postParam);
  }
  addTransportPassGen(data) {
    const url = this.baseURL + apiUrls.addTransportPassGen;
    return this.http.post(url, data)
  }
  getIndentDetails(indentNo,unitName) {
    const url = this.baseURL + 'orderPickUp/getOrderPickUpByIndentNo?indentNo=' + indentNo+'&unitName='+unitName;
    return this.http.get(url);
  }
  getindentbyid(indentNo) {
    const url = this.baseURL + 'orderPickUp/getIndentDetailsByIndentNo?indentNo=' + indentNo;
    return this.http.get(url);
  }
  getransportPassGenbyid(id) {
    const url = this.baseURL + 'transportPassGeneration/getTransportPassGenById?id=' +id;
    return this.http.get(url);
  }

  getAlltransportPassLazySearch(obj): Observable<any> {
    const url = this.baseURL + apiUrls.getAllWarehousetransportPassLazySearch;
    return this.http.post(url, obj);
  }
  getTransportPassGenByTransportNo(id) {
    const url = this.baseURL + apiUrls.getTransportPassGenByTransportNo + '?transportNo=' +id;
    return this.http.get(url);
  }
  
}