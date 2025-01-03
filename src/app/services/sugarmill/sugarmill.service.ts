import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
  providedIn: 'root'
})
export class SugarmillService {

  baseURL = environment.sugarmillBaseURL;

  constructor(private http: HttpClient) { }

  getMf5PartOne(): Observable<any> {
    const url = this.baseURL + apiUrls.getAllMF5Part1Register;
    return this.http.get(url);
  }

  getMf5PartOneById(id): Observable<any> {
    const url = this.baseURL + apiUrls.getMF5Part1RegisterById + id;
    return this.http.get(url);
  }

  addMf5PartOne(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.addMf5PartOne;
    return this.http.post(url, postdata);
  }

  updateMf5PartOne(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.updateMf5PartOne;
    return this.http.put(url, postdata);
  }

  searchMf5PartOne(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.mf5Part1Search;
    return this.http.post(url, postdata);
  }

  getDownload(): Observable<any> {
    const url = this.baseURL + apiUrls.allotmentexportExcel;
    return this.http.get(url, { responseType: 'blob' });
  }

  getPrintData(): Observable<any> {
    const url = this.baseURL + apiUrls.transportGenPrint;
    return this.http.get(url, { responseType: 'blob' });
  }
}
