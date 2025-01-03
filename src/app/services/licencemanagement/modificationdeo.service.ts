import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
  providedIn: 'root'
})
export class ModificationDEOService {

  constructor(
    private http: HttpClient
  ) { }

  baseURL = environment.jsonBaseURL;

  getAllLicenceModification():Observable<any> {
    const url = this.baseURL + apiUrls.licenceModificationExciseCommissionerAssignedGetAll;
    return this.http.get(url);
  }
  editModification(postdata,id):Observable<any> {
    const url = this.baseURL + apiUrls.licenceModificationExciseCommissionerAssignedEdit + id;
    return this.http.patch(url,postdata);
  } 
  getByIdModification(id):Observable<any> {
    const url = this.baseURL + apiUrls.licenceModificationExciseCommissionerAssignedEdit + id;
    return this.http.get(url);
  }
}
