import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { apiUrls } from '@appEnv/apiurls';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DispatchService {
  constructor(private http: HttpClient) { }

  baseURL1 = environment.warehouseURL;
 
  searchDisptch(postParam){
    const url = this.baseURL1 + apiUrls.getAllWarehouseDispatchLazySearch;
    return this.http.post(url, postParam);
  }

  addDispatch(postData) {
    const url = this.baseURL1 + apiUrls.addWarehouseDispatch;
    return this.http.post(url, postData)
  }
  getAllDispatch(){
    const url = this.baseURL1 + apiUrls.getAllWarehouseDispatch;
    return this.http.get(url);
  }
  getDispatchById(id): Observable<any>{
    const url = this.baseURL1+'transportPassGeneration/getTransportPassGenById?id='+id;
    return this.http.get(url);
  }
  
  getIndentbyid(postData): Observable<any> {
    const url = this.baseURL1 + 'transportPassGeneration/getIndentDetailsByTransportNo?transportNo=' +postData.transportNo +'&indentNo=' + postData.indentNo;
    return this.http.get(url);
  }


}
