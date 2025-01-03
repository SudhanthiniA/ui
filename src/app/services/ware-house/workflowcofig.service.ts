import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { Observable, of } from 'rxjs';

import { apiUrls } from '@appEnv/apiurls';
@Injectable({
  providedIn: 'root'
})
export class WorkflowcofigService {

  constructor( private http: HttpClient) { }

  baseURL = environment.workflowconfig;

  addworkflow(data){
    const url = this.baseURL + apiUrls.addworkflowmanagement;
    return this.http.post(url,data)
  }
 
  getallworkflow(data): Observable<any> {
    const url = this.baseURL + apiUrls.getallworkflow;
    return this.http.post(url,data);
}

getworkflowbysubmodule(data,data2){
  const ids = `?moduleNameCode=${data}&subModuleCode=${data2}`;
  const url = this.baseURL + `${apiUrls.getworkflowbysubmodulw}${ids}`;
  return this.http.get(url);
}

checkworkflow(data,data2): Observable<any> {
  const ids = `?moduleNameCode=${data}&subModuleCode=${data2}`;
  const url = this.baseURL + `${apiUrls.checkworkflowexist}${ids}`;
  return this.http.get(url);
}

getworkflowbydesignation(data,data2) {
  const ids = `?moduleNameCode=${data}&subModuleCode=${data2}`;
  const url = this.baseURL + `${apiUrls.getworkflowbydesignation}${ids}`;
  return this.http.get(url);
}

getapprovallogs(id){
  const url = this.baseURL + apiUrls.getapprovalloags + id;
  return this.http.get(url);
}
}
