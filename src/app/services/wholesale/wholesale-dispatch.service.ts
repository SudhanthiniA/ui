import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrls } from '@appEnv/apiurls';
import { environment } from '@appEnv/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WholesaleDispatchService {

  constructor(private http: HttpClient) { }

  baseURL = environment.wholesaledevURL;

  searchDisptch(postParam): Observable<any> {
    const url = this.baseURL +'transportPassGeneration/transportPassLazySearch';
    return this.http.post(url, postParam);
}
searchDisptchc(postParam): Observable<any> {
  const url = this.baseURL +'dispatch/dispatchLazySearch';
  return this.http.post(url, postParam);
}
adddispatch(postData): Observable<any> {
  const url = this.baseURL + 'dispatch/addDispatch';
  return this.http.post(url, postData)
}
getDispatchById(id): Observable<any>{
  const url = this.baseURL+"transportPassGeneration/getTransportPassGenById?id="+id;
  return this.http.get(url);
}
getDispatchByIdd(id): Observable<any>{
  const url = this.baseURL+"dispatch/getDispatch?id="+id;
  return this.http.get(url);
}
getIndentbyid(postData): Observable<any> {
  const url = this.baseURL + 'transportPassGeneration/getIndentDetailsByTransportNo?transportNo=' +postData.transportNo +'&indentNo=' + postData.indentNo;
  return this.http.get(url);
}

// newly added
getindentbyid(indentNo) {
  const url = this.baseURL + 'orderPickUp/getIndentDetailsByIndentNo?indentNo=' + indentNo;
  return this.http.get(url);
}


}
