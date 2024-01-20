import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { RoomI } from '../interfaces/room';
import { HttpClient } from '@angular/common/http';
import { RoomDto } from '../models/room.dto';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  URLRooms = environment.roomsURL


  constructor(
    private http: HttpClient
  ) { }

  getRooms(): Observable<RoomI[]> {
    return this.http.get<RoomI[]>(this.URLRooms)
  }

  getRoom(id: string): Observable<RoomDto> {
    return this.http.get<RoomDto>(`${this.URLRooms}/${id}`)
  }

  createRoom(room: RoomI): Observable<RoomI> {
    return this.http.post<RoomI>(`${this.URLRooms}`, room)
  }

  updateRoom(room: RoomDto, id: string): Observable<RoomDto>{
    return this.http.patch<RoomDto>(`${this.URLRooms}/${id}`, room) 
  }

  deleteRoom(id: string): Observable<RoomI> {
    return this.http.delete<RoomI>(`${this.URLRooms}/${id}`)
  }
}
