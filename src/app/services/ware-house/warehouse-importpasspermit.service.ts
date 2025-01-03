import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
  providedIn: 'root'
})
export class importpasspermitService {

  constructor(private http: HttpClient) { }
  baseURL = environment.warehouseURL;
  parenturl = environment.parentunit;
  // baseURL1=environment.warehouseURL;
  
  addImports(data) {
    const url = this.baseURL + apiUrls.addimport;
    return this.http.post(url, data)
  }
  getAllImports() {
    const url = this.baseURL + apiUrls.createimportspermits;
    return this.http.get(url)
  }
  getImportsbyId(id: any) {
    const url = this.baseURL + apiUrls.getImportById + id;
    return this.http.get(url)
  }
  updateImportById(id: any, Data: any) {
    const url = this.baseURL + apiUrls.updateImportById + id;
    return this.http.put(url, Data)
  }

  getunitdeatails() {
    const url = this.baseURL + apiUrls.unitdetails;
    return this.http.get(url)
  }

  getwarehouse() {
    const url = this.baseURL + apiUrls.warehousedetails;
    return this.http.get(url)
  }

  getimportstatus() {
    const url = this.parenturl + apiUrls.importstatus;
    return this.http.get(url)
  }

  getconsignment() {
    const url = this.baseURL + apiUrls.getcosignment;
    return this.http.get(url)
  }
  importPermitSearch(postParams) {
    const url = this.baseURL + apiUrls.searchpermit;
    return this.http.post(url, postParams);
  }
  // searchImportPermit(postParam): Observable<any> {
  //   const url = this.baseURL + apiUrls.searchreNewBrand;
  //   return this.http.post(url, postParam);
  // }

  getimportstatubyid(id) {
    const url = this.parenturl + apiUrls.getimportstatusbyid + id;
    return this.http.get(url)
  }

  updatestatus(postParams) {
    const url = this.parenturl + apiUrls.updatesatus;
    return this.http.post(url, postParams);
  }
}