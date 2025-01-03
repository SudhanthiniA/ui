import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, of } from 'rxjs';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
  providedIn: 'root'
})
export class OrderpickupService {

  baseURL=environment.warehouseurl;
  constructor( private http: HttpClient) { }

  getallorderpickup(data) {

    const url = this.baseURL + apiUrls.getallorderpickup;
    return this.http.post(url,data);
  }

  getindentbyindnum(obj) {
    const url = this.baseURL + apiUrls.getwharehouseindentbyid + obj ;
    return this.http.get(url);
  }
  updateOrderPickUp(obj) {
    const url = this.baseURL + apiUrls.updateOrderPickup ;
    return this.http.post(url, obj);
  }
  getOrderPickUpLogs(id) {
    const url = this.baseURL + apiUrls.getOrderPickUpLogs + '?indentNo=' + id ;
    return this.http.get(url);
  }
  getorderpickuplogs(data){
    const ids = `?indentNo=${data}`;
    const url = this.baseURL + `${apiUrls.getOrderPickLogs}${ids}`;
    return this.http.get(url);
  }
  resetOrderPickUp(id) {
    const url = this.baseURL + apiUrls.resetOrderPickUp + '?indentNo=' + id ;
    return this.http.get(url);
  }
}
