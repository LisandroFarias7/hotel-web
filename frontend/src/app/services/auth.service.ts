import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http'
import { LoginDto } from '../models/login.dto';
import { Observable } from 'rxjs';
import { Login } from '../interfaces/login';
import { RegisterDto } from '../models/register.dto';
import { Register } from '../interfaces/register';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = environment.authURL

  constructor(private http: HttpClient) { }


  

  login(dto: LoginDto): Observable<any> {
    return this.http.post<any>(this.authURL + 'login', dto)
  }

  register(dto: RegisterDto): Observable<Register>{
    return this.http.post<Register>(this.authURL + 'register', dto)
  }

}
