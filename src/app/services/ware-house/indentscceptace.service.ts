import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { Observable, of } from 'rxjs';

import { apiUrls } from '@appEnv/apiurls';
@Injectable({
  providedIn: 'root'
})
export class IndentscceptaceService {

  constructor( private http: HttpClient) { }
  baseURL = environment.baseURLMaster;
  baseURL1=environment.warehouseurl;
  baseurlwhole = environment.wholesaleURL

  getallindentaccept(obj) {
    const url = this.baseurlwhole + apiUrls.getallindentbysearch;
    return this.http.post(url,obj);
  }

  indentgetbyid(id){
    const ids = `?id=${id}`;
    const url = this.baseurlwhole + `${apiUrls.getwholesaleindentbyid}${ids}`;
    return this.http.get(url);
    }

    indentbyid(id) {
      const ids = `?id=${id}`;
    const url = this.baseurlwhole + `${apiUrls.getindentbyid}${ids}`;
    return this.http.get(url);
    }
    
    indentaccept(obj){
      const url = this.baseURL1 + apiUrls.indentacceptance;
      return this.http.post(url,obj);
    }

    indentacceptance(obj) {
      const url = this.baseURL1 + apiUrls.indentacceptbyid;
      return this.http.post(url,obj);
    }

    getsearch(data) {
      const url = this.baseURL1 + apiUrls.getsearchindent;
      return this.http.post(url,data);
    }
    // indent request Data search
    indentRequstsearch(postParam): Observable<any> {
      const url = this.baseurlwhole + apiUrls.indReqSearch;
      return this.http.post(url, postParam);
    }
}
