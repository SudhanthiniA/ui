import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { Observable, of } from 'rxjs';

import { apiUrls } from '@appEnv/apiurls';

@Injectable({
  providedIn: 'root'
})
export class WarehouseBwfl4Service {

    constructor( private http: HttpClient) { }
    baseURL = environment.warehouseURL;
    AddBwfl4(data){
        const url = this.baseURL + apiUrls.AddBwfl4;
        return this.http.post(url,data)
    }
    UpdateBwfl4(data){
        const url = this.baseURL + apiUrls.UpdateBwfl4;
        return this.http.put(url,data)
    }
    getbyid(id){
        const url = this.baseURL + apiUrls.GetByIdBwfl4+ id;
        return this.http.get(url);
    }
    GetList(){
        const url = this.baseURL + apiUrls.ListBwfl4;
        return this.http.get(url);
    }
    searchBwfl4(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.searchBwfl4;
        return this.http.post(url, postParam);
    }
}