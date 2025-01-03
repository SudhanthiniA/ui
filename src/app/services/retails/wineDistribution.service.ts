
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class WineDistruibutionService {

    constructor(
        private http: HttpClient
    ) { }
    baseURL = environment.localDBUrl;

    get(): Observable<any> {
        const url = this.baseURL + apiUrls.addWineDistribution;
        return this.http.get(url);
    }

    addWineDistribution(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.addWineDistribution;
        return this.http.post(url, postParam);
    }

    getWineDistributionId(id): Observable<any> {
        const url = this.baseURL + apiUrls.addWineDistribution + '/' + id;
        return this.http.get(url);
      }
};