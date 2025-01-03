import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
  providedIn: 'root'
})
export class WarehouseMasterDropdownService {

  constructor(
    private http: HttpClient
  ) { }

  masterURL = environment.baseURLMaster;
  parentunitURL = environment.parentunit;

  findBrandDropdowns(postParam): Observable<any> {
    const url = this.parentunitURL + apiUrls.findBrandDropdown;
    return this.http.post(url, postParam);
  }

  findLabelDetails(postParam): Observable<any> {
    const url = this.parentunitURL + apiUrls.findLabelDetails;
    return this.http.post(url, postParam);
  }

  findBrand(postParam): Observable<any> {
    const url = this.parentunitURL + apiUrls.postBrandDetails;
    return this.http.post(url, postParam);
  }

  getTempLicense(): Observable<any> {
    const url = this.parentunitURL + apiUrls.getTempLicense;
    return this.http.get(url);
  }

}
