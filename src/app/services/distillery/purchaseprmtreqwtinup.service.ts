import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
  providedIn: 'root'
})
export class PurchaseprmtreqwtinupService {
  baseURL = environment.distilleryBaseURL;
  authToken = environment.authToken;

  constructor(
    private http: HttpClient
  ) { }

  getallpurchasedata():Observable<any>{
   const url = this.baseURL + apiUrls.indentPurchasePermitRequestGelAll;
   return this.http.get(url);
  }
  searchdata(data):Observable<any>{
  const url = this.baseURL + apiUrls.indentPurchasePermitRequestSearch;
  return this.http.post(url,data);
  }

  getpurmitreq(id):Observable<any>{
   const url = this.baseURL + apiUrls.indentPurchasePermitRequestGetbyId + id;
   return this.http.get(url)
  }
  addpermitreqdata(data):Observable<any>{
    const url = this.baseURL + apiUrls.indentPurchasePermitRequestAdd;
    return this.http.post(url,data);
  }

  updatepurmitdata(data):Observable<any>{
    const url = this.baseURL + apiUrls.indentPurchasePermitRequestUpdate;
    return this.http.put(url,data);
  }
}
