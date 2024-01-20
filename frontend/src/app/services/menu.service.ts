import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MenuI } from '../interfaces/menu';
import { MenuDto } from '../models/menu.dto';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menuURL = environment.menuURL

  constructor(
    private http: HttpClient
  ) { }


  getMenu(): Observable<MenuI[]> {
    return this.http.get<MenuI[]>(this.menuURL)
  }

  getMenuId(id: string): Observable<MenuDto> {
    return this.http.get<MenuDto>(`${this.menuURL}/${id}`)
  }

  createMenu(menu: MenuI): Observable<MenuI> {
    return this.http.post<MenuI>(`${this.menuURL}`, menu)
  }

  deleteMenu(id: string): Observable<MenuI> {
    return this.http.delete<MenuI>(`${this.menuURL}/${id}`)
 }

  updateMenu(menu: MenuI, id: string): Observable<MenuI> {
    return this.http.patch<MenuI>(`${this.menuURL}/${id}`, menu)
  }
}
