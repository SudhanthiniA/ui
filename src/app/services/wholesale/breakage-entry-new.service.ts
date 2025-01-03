import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrls } from '@appEnv/apiurls';
import { environment } from '@appEnv/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreakageEntryNewService {
  constructor(private http: HttpClient) { }

  baseURL = environment.wholesaledevURL;


  searchBreakageEntry(postParam): Observable<any> {
    const url = this.baseURL +'breakageEntry/breakageEntryGenLazySearch';
    return this.http.post(url, postParam);
}

}
