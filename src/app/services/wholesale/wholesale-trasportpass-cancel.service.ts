import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrls } from '@appEnv/apiurls';
import { environment } from '@appEnv/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WholesaleTrasportpassCancelService {
  constructor(private http: HttpClient) { }
  baseURL = environment.localDBUrl;
   baseURL1 = environment.wholesaledevURL;
  createTransportPass(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.addTransportPassCancel;
    return this.http.post(url, postdata);
  }

  gettransportpassbyid(id): Observable<any> {
    const url = this.baseURL1 + apiUrls.gettransportcancelpass + id;
    return this.http.get(url);
  }
  createtransportpasscancel(postdata): Observable<any> {
    const url = this.baseURL1 + apiUrls.createtransportpasscancellation;
    return this.http.post(url,postdata);
  }
  getAllTransporCanctPassByRevBack(postdata){
    const url = this.baseURL1 + apiUrls.wholesaletransportcancel;
    return this.http.post(url,postdata)
  }
  getAllTransportPass(): Observable<any> {
    const url = this.baseURL + apiUrls.addTransportPassCancel;
    return this.http.get(url);
  }
  getByIdTransportPass(id): Observable<any> {
    const url = this.baseURL1 + apiUrls.getbyidd +id;
    return this.http.get(url);
}
updateTransportPass(postdata,id): Observable<any> {
  const url = this.baseURL + apiUrls.addTransportPassCancel +'/'+id;
  return this.http.put(url, postdata);
}
}
