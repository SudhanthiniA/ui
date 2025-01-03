import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrls } from '@appEnv/apiurls';
import { environment } from '@appEnv/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WholesaleIndentRequestService {

  constructor(private http: HttpClient) { }

  baseURL = environment.wholesaleURL;
  baseURLLM = environment.licencemanagementIPURL
  masterURL = environment.devisionUrl


  addIndent(postData): Observable<any> {
    const url = this.baseURL + 'indentRequest/addIndentRequest';
    return this.http.post(url, postData)
  }
  searchIndentRequest(postParam): Observable<any> {
    const url = this.baseURL + 'indentRequest/indentRequestLazySearch';
    return this.http.post(url, postParam);
  }
  getIndent(id): Observable<any> {
    const url = this.baseURL + 'indentRequest/getIndentRequest?id=' + id;
    return this.http.get(url)
  }
  getIndentReqById(id): Observable<any> {
    const url = this.baseURL + 'indentRequest/getIndentRequest?id=' + id;
    return this.http.get(url);
  }

  unitLicenseTypes(): Observable<any> {
    const url = this.baseURLLM + "license/category/WHOLESALE";
    return this.http.get(url)
  }
  unitLicenseTypesByOfficer(lmmnumber): Observable<any> {
    const url = this.baseURLLM + "license/category/WHOLESALE?licenseNumber=" + lmmnumber;
    return this.http.get(url)
  }
  getIndtReqStatusList() {
    const url = this.baseURL + apiUrls.acceptanceStatusList;
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

  getUnitName(postParam) {
    const data = `/${postParam.category}/subCategory/${postParam.subCategory}?size=${postParam.size}`;
    const url = this.baseURLLM + `${apiUrls.getLicenseUniName}${data}`;
    return this.http.get(url);
  }

  findLicenseMapping(data, data2) {
    const ids = `?licenseCategoryCode=${data}&licenseType=${data2}`;
    const url = this.masterURL + `${apiUrls.findLicenseMapping}${ids}`;
    return this.http.get(url);
  }

}
