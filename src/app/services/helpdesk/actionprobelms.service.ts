import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "@appEnv/environment";
import { apiUrls } from "@appEnv/apiurls";

@Injectable({
  providedIn: "root",
})
export class ActualProbelmService {
  constructor(private http: HttpClient) { }

  baseURL = environment.helpdeskURL;

  getAllActualProbelmList(): Observable<any> {
    const url = this.baseURL + apiUrls.getAllActualProbelmList;
    return this.http.get(url);
  }
  getByIdActualProbelmList(id): Observable<any> {
    const url = this.baseURL + apiUrls.actualprobelmlistgetbyId + id;
    return this.http.get(url);
  }
  createproblem(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.addproblem;
    return this.http.post(url, postdata);
  }
  searchactualproblem(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.filteractualproblem;
    return this.http.post(url, postdata);
  }
}
