import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, of } from 'rxjs';

import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
  })
  export class WarehouseBwfl9Service {
      
    baseURL = environment.warehouseURL;
    constructor( private http: HttpClient) { }
    addBwfl9(data){
        const url = this.baseURL + apiUrls.addBwfl9;
        return this.http.post(url,data)
    }
    updateBwfl9(data){
        const url = this.baseURL + apiUrls.updateBwfl9;
        return this.http.put(url,data)
    }
    getbyid(id){
        const url = this.baseURL + apiUrls.getByIdfl9+ id;
        return this.http.get(url);
    }
    getList(){
        const url = this.baseURL + apiUrls.listBwfl9;
        return this.http.get(url);
    }
    searchBwfl9(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.searchBwfl9;
        return this.http.post(url, postParam);
    }
  }