import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, of } from 'rxjs';

import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
  })
  export class WarehouseBwfl10Service {
      
    baseURL = environment.warehouseURL;
    constructor( private http: HttpClient) { }
    addBfwfl10(data){
        const url = this.baseURL + apiUrls.addBwfl10;
        return this.http.post(url,data)
    }
    updateBfwfl10(data){
        const url = this.baseURL + apiUrls.updateBwfl10;
        return this.http.put(url,data)
    }
    getbyid(id){
        const url = this.baseURL + apiUrls.getByIdfl10+ id;
        return this.http.get(url);
    }
    getList(){
        const url = this.baseURL + apiUrls.listBwfl10;
        return this.http.get(url);
    }
    searchBwfl10(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.searchBwfl10;
        return this.http.post(url, postParam);
    }
  }