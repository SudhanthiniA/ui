import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';
@Injectable({
  providedIn: 'root'
})
export class TankReapirService {

  constructor(
    private http: HttpClient
  ) { }
  baseURL = environment.distilleryBaseURL;

  get(): Observable<any> {
    const url = this.baseURL + apiUrls.listTankRepair;
    return this.http.get(url);
  }

}