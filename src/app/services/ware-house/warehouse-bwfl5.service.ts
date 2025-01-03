import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, of } from 'rxjs';

import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
  })
  export class WarehouseBwfl5Service {
    baseURL = environment.warehouseURL;
    constructor( private http: HttpClient) { }
    addBfwfl5(data){
        const url = this.baseURL + apiUrls.addbwfl5;
        return this.http.post(url,data)
    }
    updateBfwfl5(data){
        const url = this.baseURL + apiUrls.updatebwfl5;
        return this.http.put(url,data)
    }
    getbyid(id){
        const url = this.baseURL + apiUrls.getbyidbwfl5+ id;
        return this.http.get(url);
    }
    getList(){
        const url = this.baseURL + apiUrls.listbwlf5;
        return this.http.get(url);
    }
    searchBwfl5(postParam): Observable<any>{
        const url = this.baseURL + apiUrls.searchBwfl5;
        return this.http.post(url, postParam);
    }
    
  }