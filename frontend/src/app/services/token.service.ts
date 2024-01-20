import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  isLogged(): boolean {
    if(this.getToken()){
      return true;
    }

    return false;
  }

  setToken(token: string): void {
    localStorage.setItem('token', token)
  }

  getToken() {
    return localStorage.getItem('token')
  }

  logOut(): void {
    localStorage.clear()
  }


}
