import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrls } from '@appEnv/apiurls';
import { environment } from '@appEnv/environment';
import { Observable } from 'rxjs/Rx';
@Injectable({
  providedIn: 'root'
})
export class NewlicenceCl10Service {

  constructor(
    private http: HttpClient
  ) { }

  baseURL = environment.licencemanagementURL;

  createClForm(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.addNewLicenceBhangCLForm;
    return this.http.post(url,postdata);
  }
  
  // putCl(postParam): Observable<any> {
  //   const url = this.baseURL + apiUrls.putMolassesTraders;
  //   return this.http.put(url, postParam);
  // }
  // getClById(id): Observable<any> {
  //   const url = this.baseURL + apiUrls.getMolassesTradersById + id;
  //   return this.http.get(url);
  // }

  // getAllCL(): Observable<any> {
  //   const url = this.baseURL + apiUrls.getAllMolassTraders;
  //   return this.http.get(url);
  // }

}
