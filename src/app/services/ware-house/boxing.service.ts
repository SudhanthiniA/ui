import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
  providedIn: 'root'
})
export class BoxingService {

  baseURL1 = environment.warehouseURL;
  constructor(private http: HttpClient) { }

  getallboxes() {
    const url = this.baseURL1 + apiUrls.getallboxing;
    return this.http.get(url);
  }

  addboxingplan(data) {
    const url = this.baseURL1 + apiUrls.addboxing;
    return this.http.post(url, data);
  }

  upDateBoxingData(data) {
    const url = this.baseURL1 + apiUrls.updateBoxing;
    return this.http.put(url, data);
  }
  //   updateBwfl9(data){
  //     const url = this.baseURL + apiUrls.updateBwfl9;
  //     return this.http.put(url,data)
  // }
  getplan() {
    const url = this.baseURL1 + apiUrls.getallplans;
    return this.http.get(url);
  }

  searchBoxingData(postParam): Observable<any> {
    const url = this.baseURL1 + apiUrls.searchBoxing;
    return this.http.post(url, postParam);
  }
  getbyid(id) {
    const url = this.baseURL1 + apiUrls.getboxingplaneById + id;
    return this.http.get(url);
  }

  getMeasurement() {
    const url = this.baseURL1 + apiUrls.measurement;
    return this.http.get(url);
  }
}
