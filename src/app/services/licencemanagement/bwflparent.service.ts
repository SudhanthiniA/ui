import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class BWFLParentLicenseService {

    constructor(
        private http: HttpClient
    ) { }

    baseURL = environment.licencemanagementIPURL;

    createLicense(postdata) {
        const url = this.baseURL + apiUrls.createUpdateBWFLLicense;
        return this.http.post(url, postdata);
    }

    getApplicationNo(licenseCode) {
        const url = this.baseURL + apiUrls.getApplicationNo + '?licenseCategory=' + licenseCode;
        return this.http.post(url, {}).toPromise();
    }
}
