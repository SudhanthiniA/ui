import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls'
@Injectable({
  providedIn: 'root'
})
export class MolassesAdminService {
  baseURL = environment.sugarmillBaseURL;
  constructor(private http: HttpClient) { }
  getAllMolassesAdmin(): Observable<any> {
    const url = this.baseURL + apiUrls.getAllMolassesAdmin;
    return this.http.get(url);
  }
  getMolassesAdminById(id): Observable<any> {
    const url = this.baseURL + apiUrls.molassesAdminGetById + id;
    return this.http.get(url);
  }
  addMolassesAdmin(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.addMolassesAdmin;
    return this.http.post(url, postdata);
  }
  updateMolassesAdmin(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.updateMolassesAdmin;
    return this.http.put(url, postdata);
  }
  searchMolassesAdmin(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.molassesAdminSearch;
    return this.http.post(url, postdata);
  }
  getDownload(): Observable<any> {
    const url = this.baseURL + apiUrls.allotmentexportExcel;
    return this.http.get(url, { responseType: 'blob' });
  }
  getPrintData(urls:any): Observable<any> {
    const url = this.baseURL + urls;
    return this.http.get(url, { responseType: 'blob' });
  }
  getAdminValues(): Observable<any>
  {
    const url = this.baseURL + apiUrls.getMolassesAdminChargesValue;
    return this.http.get(url);
  }
}
