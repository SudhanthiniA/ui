import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { Observable, of } from 'rxjs';

import { apiUrls } from '@appEnv/apiurls';

@Injectable({
  providedIn: 'root'
})
export class WarehouseNewbrandService {

  constructor( private http: HttpClient) { }
  baseURL = environment.baseURLMaster;
  baseURL1=environment.warehouseURL;
  barseurluser = environment.baseURLUser; 
  baseurlworkflow = environment.workflowconfig; 
  getAllState(): Observable<any> {
    const url = this.baseURL + apiUrls.getAllState;
    return this.http.get(url);
 }

 GetAllData(){
    const url = this.baseURL + apiUrls.getAllSubCategory; 
    return this.http.get(url);
 }

}
