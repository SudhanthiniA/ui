import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { Observable, of } from 'rxjs';

import { apiUrls } from '@appEnv/apiurls';

@Injectable({
  providedIn: 'root'
})
export class ImportPermitService {

  baseURL = environment.warehouseURL;
  masterbaseurl = environment.baseURLMaster;
  userbaseURL = environment.baseURLUser;
  parenturl = environment.parentunit;

  constructor(private http: HttpClient) { }
  addImport(data) {
    const url = this.baseURL + apiUrls.addimportpermit;
    return this.http.post(url, data);
  }
  getImportPermitById(id) {
    const url = this.baseURL + apiUrls.getimportpermitById + '?id=' + id;
    return this.http.get(url);
  }

  getbrandddetails(parentEtion,licencenumber) {
    const url = this.parenturl + apiUrls.getBrandDetailsByparentetin + '?parentEtin=' + parentEtion+ '&licenseNumber=' + licencenumber;
    return this.http.get(url);
  }

  getLicenseDetails(){
    const url = this.baseURL + 'license/category/BOND_WAREHOUSE';
    return this.http.get(url)
  }
  
 }
