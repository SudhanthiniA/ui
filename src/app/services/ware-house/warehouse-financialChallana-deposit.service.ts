import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, of } from 'rxjs';

import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
  })
  export class WarehouseFinancialChallanaDepositService {

    baseURL = environment.warehouseURL;
    baseURLOne = environment.baseURLMaster;

    constructor( private http: HttpClient) { }
    addChallanaDeposit(data){
        const url = this.baseURL + apiUrls.challanaDepAdd;
        return this.http.post(url,data)
    }
    getbyidChallanaDeposit(id){
        const url = this.baseURL + apiUrls.getByIdChallanaDep+ id;
        return this.http.get(url);
    }
    getListChallanaDeposit(){
        const url = this.baseURL + apiUrls.listChallanaDep;
        return this.http.get(url);
    }

    getAllDevision(){
        const url = this.baseURLOne + apiUrls.listDevisionData;
        return this.http.get(url);
    }

    getAllFeetype(){
        const url = this.baseURLOne + apiUrls.listfeetype;
        return this.http.get(url);
    }

    getHeadCodeByFid(){
        const url = this.baseURLOne + apiUrls.getHeadcodeByfeeId;
        return this.http.get(url);
    }

    getAllTrasuryById(){
        const url = this.baseURLOne + apiUrls.getAllTrasuryById;
        return this.http.get(url);
    }

    getAllTrasury(){
        const url = this.baseURLOne + apiUrls.getAlltreasure;
        return this.http.get(url);
    }

    getDescriptionByTypeCodeId(id, feeid){
        const url = this.baseURLOne + apiUrls.getTypeCodeDescriptionByid + '?feeid=' + feeid + '&headid='  +id;
        return this.http.get(url);
    }

    // change service for treasure
    getTreasuryByDevisionId(id){
        const url = this.baseURLOne + apiUrls.getAllTrasuryById  + '?divisionid=' + id;
        return this.http.get(url);
    }

    // change event service for headccode
    getHeadcodeByfeeType(id){
        const url = this.baseURLOne + apiUrls.getHeadcodeByfeeId  + '?feeid=' + id;
        return this.http.get(url);
    }

    // search operation
    searchChallana(postParam): Observable<any>{
        const url = this.baseURL + apiUrls.searchChallana;
        return this.http.post(url, postParam);
    }
  }