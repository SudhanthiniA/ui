import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrls } from '@appEnv/apiurls';
import { environment } from '@appEnv/environment';
import { Observable } from 'rxjs/Rx';
@Injectable({
  providedIn: 'root'
})
export class NewlicenceMolassestradersService {

 
  constructor(
    private http: HttpClient
  ) { }
  baseURL = environment.licencemanagementURL;

  addMolassesTraers(postParam): Observable<any> {
    const url = this.baseURL + apiUrls.addMolassesTraders;
    return this.http.post(url, postParam);
  }
  
  putMolassesTraders(postParam): Observable<any> {
    const url = this.baseURL + apiUrls.putMolassesTraders;
    return this.http.put(url, postParam);
  }
  getMolassesTraders(id): Observable<any> {
    const url = this.baseURL + apiUrls.getMolassesTradersById + id;
    return this.http.get(url);
  }

  getAllMolassesTraders(): Observable<any> {
    const url = this.baseURL + apiUrls.getAllMolassTraders;
    return this.http.get(url);
  }


};
