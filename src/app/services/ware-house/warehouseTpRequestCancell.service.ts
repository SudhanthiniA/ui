import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { apiUrls } from '@appEnv/apiurls';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WarehouseTrnsportPassCancellService {

  constructor(private http: HttpClient) { }
  baseURL = environment.warehouseURL;
  // baseURL1=environment.warehouseURL;
  getAllTransportCancell(data) {
    const url = this.baseURL + apiUrls.transportPassCancell;
    return this.http.post(url, data)
  }

  getByIdTranCancellation(id): Observable<any> {
    const url = this.baseURL + apiUrls.getTransCancelationByid + id;
    return this.http.get(url);
  }

  addTransportpassCancell(postData) {
    const url = this.baseURL + apiUrls.addTransportpassCancell;
    return this.http.post(url, postData);
  }

  getTransportPassDetails(indentNo) {
    const url = this.baseURL + apiUrls.getTpDetailsByTranspotNumber + indentNo;
    return this.http.get(url);
  }
  getIndentbyid(postData): Observable<any> {
    const url = this.baseURL + 'transportPassGeneration/getIndentDetailsByTransportNo?transportNo=' + postData.transportNo + '&indentNo=' + postData.indentNo;
    return this.http.get(url);
  }
  // newly added
  getindentbyid(indentNo) {
    const url = this.baseURL + 'orderPickUp/getIndentDetailsByIndentNo?indentNo=' + indentNo;
    return this.http.get(url);
  }
}