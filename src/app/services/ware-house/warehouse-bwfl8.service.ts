import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, of } from 'rxjs';

import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
  })
  export class WarehouseBwfl8Service {
      
    baseURL = environment.warehouseURL;
    constructor( private http: HttpClient) { }
    addBfwfl8(data){
        const url = this.baseURL + apiUrls.addBwfl8;
        return this.http.post(url,data)
    }
    updateBfwfl8(data){
        const url = this.baseURL + apiUrls.updateBwfl8;
        return this.http.put(url,data)
    }
    getbyid(id){
        const url = this.baseURL + apiUrls.getByIdfl8+ id;
        return this.http.get(url);
    }
    getList(){
        const url = this.baseURL + apiUrls.listBwfl8;
        return this.http.get(url);
    }
    searchBwfl8(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.searchBwfl8;
        return this.http.post(url, postParam);
    }
  }