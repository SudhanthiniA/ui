import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
  })
  export class WarehouseService {

    constructor(
        private http: HttpClient
      ) { }
  
    baseURL = environment.licencemanagementURL;

    addRegistration(postdata): Observable<any> {
        const url = this.baseURL + apiUrls.addWarehouseRegistration;
        return this.http.post(url, postdata);
      }
      getAllWarehouseList(): Observable<any> {
        const url = this.baseURL + apiUrls.getAllWarehouseList;
        return this.http.get(url);
      }

      getByIdWarehouse(id): Observable<any> {
        const url = this.baseURL + apiUrls.warehouseListgetbyid + id;
        return this.http.get(url);
      }
  }