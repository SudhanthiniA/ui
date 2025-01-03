import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls' 
@Injectable({
  providedIn: 'root'
})
export class TankRemovelService {

  baseURL = environment.sugarmillBaseURL;
  constructor(private http: HttpClient) { }
  getAllTankremovel(): Observable<any> {
    const url = this.baseURL + apiUrls.getalltankremovel;
    return this.http.get(url);
  }
  getTankremovelById(id): Observable<any> {
    const url = this.baseURL + apiUrls.gettankremovebyId + id;
    return this.http.get(url);
  }
  addTankremovel(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.addtankremovel;
    return this.http.post(url, postdata);
  }
  approveTankremovel(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.approvetankremovel;
    return this.http.post(url, postdata);
  }
  updateTankremovel(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.updatetankremovel;
    return this.http.put(url, postdata);
  }
  searchTankremovel(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.searchtankremovellist;
    return this.http.post(url, postdata);
  }
  getDownloadtankremovel(): Observable<any> {
    const url = this.baseURL + apiUrls.exporttankremovelexcell;
    return this.http.get(url, { responseType: 'blob' });
  }
  getPrintData(urls:any): Observable<any> {
    const url = this.baseURL + urls;
    return this.http.get(url, { responseType: 'blob' });
  }
}
