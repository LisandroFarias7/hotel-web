import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RoomDto } from 'src/app/models/room.dto';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-edit-room',
  templateUrl: './edit-room.component.html',
  styleUrls: ['./edit-room.component.css']
})
export class EditRoomComponent implements OnInit {


  room!: RoomDto; // Objeto que contiene información de la habitación

id: string = '';
title: string = '';
description: string = '';
price: number = 0;
imageUrl: string = '';
image: string = '';

constructor(
  private roomService: RoomService, // Servicio para manipular habitaciones
  private router: Router, // Servicio de enrutamiento
  private toastr: ToastrService, // Servicio para mostrar notificaciones tipo toast
  private activatedRoute: ActivatedRoute // Servicio para acceder a los parámetros de la ruta
) { }

ngOnInit(): void {
  const id = this.activatedRoute.snapshot.params['id']; // Obtiene el ID de la habitación desde la URL
  this.roomService.getRoom(id).subscribe(
    res => {
      this.room = res;
      // Asigna los valores de la habitación a las propiedades del componente.
      this.id = this.room.id;
      this.title = this.room.title;
      this.description = this.room.description;
      this.price = this.room.price;
      this.imageUrl = this.room.imageUrl;
      this.image = this.room.image;
    }
  );
}

// Función para actualizar la habitación
updateRoom() {
  const id = this.activatedRoute.snapshot.params['id']; // Obtiene el ID de la habitación desde la URL
  // Crea un nuevo objeto RoomDto con los datos actualizados
  this.room = new RoomDto(this.id, this.title, this.description, this.imageUrl, this.image, this.price);
  this.roomService.updateRoom(this.room, id).subscribe(
    res => {
      console.log(res);
      this.toastr.success('Habitación actualizada con éxito', 'Éxito'); // Muestra una notificación de éxito
      this.router.navigate(['/admin/rooms']); // Redirige al usuario a la lista de habitaciones después de la actualización
    },
    err => {
      console.log(err);
      this.toastr.error('Error al actualizar la habitación'); // Muestra una notificación de error
    }
  );
}



}
