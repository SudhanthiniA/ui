import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, of } from 'rxjs';

import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
  })
  export class WarehouseBwfl7Service {
      
    baseURL = environment.warehouseURL;
    constructor( private http: HttpClient) { }
    addBfwfl7(data){
        const url = this.baseURL + apiUrls.addBwfl7;
        return this.http.post(url,data)
    }
    updateBfwfl7(data){
        const url = this.baseURL + apiUrls.updateBwfl7;
        return this.http.put(url,data)
    }
    getbyid(id){
        const url = this.baseURL + apiUrls.getByIdfl7+ id;
        return this.http.get(url);
    }
    getList(){
        const url = this.baseURL + apiUrls.listBwfl7;
        return this.http.get(url);
    }
    searchBwfl7(postParam): Observable<any>{
        const url = this.baseURL + apiUrls.searchBwfl7;
        return this.http.post(url, postParam);
    }
  }