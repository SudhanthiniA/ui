import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
  providedIn: 'root'
})
export class ModificationExCommissionerService {

  constructor(
    private http: HttpClient
  ) { }

  baseURL = environment.jsonBaseURL;

  getAllLicenceModificationExciseCommissioner():Observable<any> {
    const url = this.baseURL + apiUrls.licenceModificationExciseCommissionerAssignedGetAll;
    return this.http.get(url);
  }
  editModificationExciseCommissioner(postdata,id):Observable<any> {
    const url = this.baseURL + apiUrls.licenceModificationExciseCommissionerAssignedEdit + id;
    return this.http.patch(url,postdata);
  } 
  getByIdModificationExciseCommissioner(id):Observable<any> {
    const url = this.baseURL + apiUrls.licenceModificationExciseCommissionerAssignedEdit + id;
    return this.http.get(url);
  }
}
