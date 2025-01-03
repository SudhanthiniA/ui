import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '@appEnv/environment';

@Injectable({
  providedIn: 'root'
})
export class TemplateUploadService {

  constructor(
    private http: HttpClient
  ) { }

  baseURL = environment.licencemanagementURL;

  createTemplate(postData, formdata): Observable<any> {
    const url = this.baseURL + 'bulkUploadTemplate/create?code=' + postData.code + '&name=' + postData.name + '&status=' + postData.status;
    return this.http.post(url, formdata);
  }

  getAllTemplates(postParam): Observable<any> {
    const url = this.baseURL + 'bulkUploadTemplate/lazySearch';
    return this.http.post(url, postParam);
  }

  getPrintData(): Observable<any> {
    const url = 'http://65.0.150.210:3501/printView/getPrintViewById?id=484';
    return this.http.get(url, { responseType: 'blob' });
  }

  uploadBulk(formdata, subUrl): Observable<any> {
    const url = this.baseURL + subUrl;
    return this.http.post(url, formdata);
  }

  getPrintData1(id): Observable<any> {
    const url =
      'https://devapigateway.upexciseonline.co/licensemanagement/v1.0.0/bulkUploadTemplate/getUploadFileById?id=' +
      id;

    return this.http.get(url, {
      responseType: 'blob',
    });
  }

  getPrint(code): Observable<any> {
    const url = this.baseURL + 'bulkUploadTemplate/getUploadFileByCode?code=' + code;
    return this.http.get(url, { responseType: 'blob' });
  }

  viewtempalte(id): Observable<any> {
    const url = this.baseURL + 'bulkUploadTemplate/getUploadViewDataById?id=' + id;
    return this.http.get(url, id);
  }
  updatetemplate(formdata,postData):Observable<any> {
    const { code, name, status, id } = postData;
    const url = this.baseURL + 'bulkUploadTemplate/update?code=' + code + '&name=' + name + '&status=' + status + '&id='+id;
    return this.http.post( url, formdata );
  }

}
