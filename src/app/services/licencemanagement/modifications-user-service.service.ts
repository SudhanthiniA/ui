import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';


@Injectable({
  providedIn: 'root'
})
export class ModificationsUserService {

  constructor(
    private http: HttpClient
  ) { }

  baseURL = environment.jsonBaseURL;

  getAllLicenceModificationUser():Observable<any> {
      const url = this.baseURL + apiUrls.licenceModificationUserGetAll;
      return this.http.get(url);
    }
    addModificationUser(postdata):Observable<any> {
      const url = this.baseURL + apiUrls.licenceModificationUserAdd;
      return this.http.post(url,postdata);
    }  
    editModificationUser(postdata,id):Observable<any> {
      const url = this.baseURL + apiUrls.licenceModificationUserEdit + id;
      return this.http.patch(url,postdata);
    }  
    getByIdModificationUser(id):Observable<any> {
      const url = this.baseURL + apiUrls.licenceModificationUserEdit + id;
      return this.http.get(url);
    }  
}
