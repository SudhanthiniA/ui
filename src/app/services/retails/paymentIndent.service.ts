
import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { apiUrls } from '@appEnv/apiurls';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentIndentService {

  constructor(
    private http: HttpClient
  ) { }
  baseURL = environment.localDBUrl;

  getAllPayments(): Observable<any> {
    const url = 'http://65.0.150.210:3503/' + apiUrls.getAllPayments;
    return this.http.get(url);
}
}
