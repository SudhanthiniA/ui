import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
  providedIn: 'root'
})
export class PurchagerequestService {
  baseURL = environment.distilleryBaseURL;
  authToken = environment.authToken;

  constructor(
    private http: HttpClient
  ) { }

  getallpurchage():Observable<any>{
    const url = this.baseURL + apiUrls.purchaserequestgetAllIndent;
    return this.http.get(url);
  }
  exceldownload():Observable<any>{
    const url = this.baseURL + apiUrls.purchaseexceldownload;
    return this.http.get(url)
  }
  searchpurchage(data):Observable<any>{
    const url = this.baseURL + apiUrls.searchpurchase;
    return this.http.post(url,data)
  }
  getpurchagebyid(id):Observable<any>{
    const url = this.baseURL + apiUrls.purchaserequestgetIndentById +id;
    return this.http.get(url);
  }

  addpurchange(data):Observable<any>{
    const url = this.baseURL + apiUrls.purchaserequestaddIndent;
    return this.http.post(url,data);
  }
  updatepurchange(data):Observable<any>{
    const url = this.baseURL + apiUrls.purchaserequestupdateIndent;
    return this.http.put(url,data);
  }

}
