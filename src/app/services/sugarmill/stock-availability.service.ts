import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls'
@Injectable({
  providedIn: 'root'
})
export class StockAvailabilityService {
  baseURL = environment.sugarmillBaseURL;
  constructor(private http: HttpClient) { }
}
