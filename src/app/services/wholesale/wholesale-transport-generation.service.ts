import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrls } from '@appEnv/apiurls';
import { environment } from '@appEnv/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WholesaleTransportGenerationService {

  constructor(
    private http: HttpClient
  ) { }
  baseURL = environment.wholesaledevURL;
  addtransportenpass(postData): Observable<any> {
    const url = this.baseURL + 'transportPassGeneration/addTransportPassGen';
    return this.http.post(url, postData)
  }
  getAlltransitpass(obj): Observable<any> {
    const url = this.baseURL + 'transportPassGeneration/transportPassLazySearch';
    return this.http.post(url, obj);
  }
  getIndentDetails(indentNo,unitName) {
    const url = this.baseURL + 'orderPickUp/getOrderPickUpByIndentNo?indentNo=' + indentNo+'&unitName='+unitName;
    return this.http.get(url);
  }
  getbyid(id): Observable<any> {
    // const url = this.baseURL1 + apiUrls.getallstockinbyID;
    // return this.http.get(url);
    const url = this.baseURL + 'transportPassGeneration/getTransportPassGenById?id=' + id;
    return this.http.get(url);
  }
  getindentbyid(indentNo) {
    const url = this.baseURL + 'orderPickUp/getIndentDetailsByIndentNo?indentNo=' + indentNo;
    return this.http.get(url);
  }
}
