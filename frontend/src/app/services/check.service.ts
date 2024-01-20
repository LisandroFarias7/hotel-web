import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Check } from '../interfaces/check';

@Injectable({
  providedIn: 'root'
})
export class CheckService {

  checkURL = environment.checkURL

  constructor(
    private http: HttpClient
  ) { }

  getChecks(): Observable<Check[]> {
    return this.http.get<Check[]>(this.checkURL)
  }

  getCheck(id: string): Observable<Check> {
    return this.http.get<Check>(`${this.checkURL}/${id}`)
  }

  createCheck(check: Check): Observable<Check>{
    return this.http.post<Check>(this.checkURL, check)
  }

  deleteCheck(id: string): Observable<Check>{
    return this.http.delete<Check>(`${this.checkURL}/${id}`)
  }
 

}
