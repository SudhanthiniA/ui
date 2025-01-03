import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { Observable, of } from 'rxjs';

import { apiUrls } from '@appEnv/apiurls';
@Injectable({
    providedIn: 'root'
  })
  export class rolloverService {
  
    constructor( private http: HttpClient) { }
    baseURL = environment.warehouseURL;
      getallrollover(){
        const url = this.baseURL + apiUrls.getallrollover;
        return this.http.get(url);
      }
      addrolloverprevious(data){
        const url = this.baseURL + apiUrls.addrollover;
        return this.http.post(url,data)
      }
  }