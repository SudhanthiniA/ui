import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrls } from '@appEnv/apiurls';
import { environment } from '@appEnv/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WholesaleImportPermitService {

  constructor(private http: HttpClient) { }
  baseURL = environment.wholesaledevURL;
  baseURLLM= environment.licencemanagementIPURL
  masterURL = environment.devisionUrl

  addImport(postData): Observable<any> {
    const url = this.baseURL +'importPermit/addImportPermit' ;
    return this.http.post(url,postData)
  }
  getImportbyid(id): Observable<any> {
    const url = this.baseURL +'importPermit/getImportPermitById?id='+id;
    return this.http.get(url)
  }
  searchImportpermit(postParam): Observable<any> {
    const url = this.baseURL +'importPermit/importPermitLazySearch';
    return this.http.post(url, postParam);
}
getImportPemitById(id): Observable<any> {
  const url = this.baseURL +'importPermit/getImportPermitById?id=' + id;
  return this.http.get(url);
}
unitLicenseTypes(): Observable<any> {
  const url = this.baseURLLM+"license/category/WHOLESALE";
  return this.http.get(url)
}
unitLicenseTypeByOfficer(lmmnumber): Observable<any> {
  const url = this.baseURLLM+"license/category/WHOLESALE?licenseNumber="+lmmnumber;
  return this.http.get(url)
}
getStatusMasters() {
  const url = this.masterURL + "api/masterValues/findDropDownMaster?dropDownKey=WHOLESALE_STATUS_INDENTREQ"
  return this.http.get(url)
}
daterange(fromDate, toDate) {
  console.log(fromDate)
  let url = '';
  if (fromDate=="Invalid date" && toDate=="Invalid date") {
    url = this.baseURL + "indentRequest/getIndentStatusCount";
  } else {
   
    url = this.baseURL + "indentRequest/getIndentStatusCount?fromDate=" + fromDate + "&toDate=" + toDate;
  }
  return this.http.get(url)
}

}
