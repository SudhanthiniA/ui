import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';
@Injectable({
  providedIn: 'root'
})
export class ModificationExciseOfficerAssignedService {
  constructor(
    private http: HttpClient
  ) { }

  baseURL = environment.jsonBaseURL;

  getAllLicenceModificationExciseOfficer():Observable<any> {
    const url = this.baseURL + apiUrls.licenceModificationExciseAssignedAdd;
    return this.http.get(url);
  }
  editModificationExciseOfficer(postdata,id):Observable<any> {
    const url = this.baseURL + apiUrls.licenceModificationExciseAssignedEdit + id;
    return this.http.patch(url,postdata);
  } 
  getByIdModificationExciseOfficer(id):Observable<any> {
    const url = this.baseURL + apiUrls.licenceModificationExciseAssignedEdit + id;
    return this.http.get(url);
  }
}
