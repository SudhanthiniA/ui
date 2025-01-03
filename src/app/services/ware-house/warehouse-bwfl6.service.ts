import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, of } from 'rxjs';

import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
  })
  export class WarehouseBwfl6Service {
      
    baseURL = environment.warehouseURL;
    constructor( private http: HttpClient) { }
    addBfwfl6(data){
        const url = this.baseURL + apiUrls.addBwfl6;
        return this.http.post(url,data)
    }
    updateBfwfl6(data){
        const url = this.baseURL + apiUrls.updateBwfl6;
        return this.http.put(url,data)
    }
    getbyid(id){
        const url = this.baseURL + apiUrls.getByIdfl6+ id;
        return this.http.get(url);
    }
    getList(){
        const url = this.baseURL + apiUrls.listBwfl6;
        return this.http.get(url);
    }
    searchBwfl6(postParam): Observable<any>{
        const url = this.baseURL + apiUrls.searchBwfl6;
        return this.http.post(url, postParam);
    }
  }