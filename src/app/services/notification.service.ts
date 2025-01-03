import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  baseURL = environment.notificationURL;

  constructor(
    private http: HttpClient
  ) { }

  findAllNotification(payload): Observable<any> {
    const url = this.baseURL + apiUrls.findAllNotification;
    return this.http.post(url, payload);
  }


}
