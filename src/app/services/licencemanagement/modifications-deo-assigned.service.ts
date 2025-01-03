import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';


@Injectable({
  providedIn: 'root'
})
export class ModificationsDeoAssignedService {
  constructor(
    private http: HttpClient
  ) { }

  baseURL = environment.jsonBaseURL;

  getAllLicenceModificationDeo():Observable<any> {
    const url = this.baseURL + apiUrls.licenceModificationDEOassignedGetAll;
    return this.http.get(url);
  }
  editModificationDeo(postdata,id):Observable<any> {
    const url = this.baseURL + apiUrls.licenceModificationDEOassignedEdit + id;
    return this.http.patch(url,postdata);
  } 
  getByIdModificationDeo(id):Observable<any> {
    const url = this.baseURL + apiUrls.licenceModificationDEOassignedEdit + id;
    return this.http.get(url);
  }

}
