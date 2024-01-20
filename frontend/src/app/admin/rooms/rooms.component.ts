import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RoomI } from 'src/app/interfaces/room';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit{

  constructor(
    private roomService: RoomService, // Servicio para manipular habitaciones
    private toastr: ToastrService // Servicio para mostrar notificaciones tipo toast
  ) {}
  
  ngOnInit(): void {
    this.getRooms(); // Al iniciar el componente, se obtienen las habitaciones
  }
  
  rooms: RoomI[] = []; // Variable para almacenar las habitaciones obtenidas
  
  // Función para obtener las habitaciones
  getRooms() {
    this.roomService.getRooms().subscribe(
      res => {
        this.rooms = res; // Se asignan las habitaciones obtenidas a la variable correspondiente
      }
    );
  }
  
  // Función para eliminar una habitación por su ID
  deleteRoom(id: string) {
    // Se muestra un cuadro de confirmación antes de eliminar la habitación
    if (confirm('¿Estás seguro de que deseas eliminar esta habitación?')) {
      this.roomService.deleteRoom(id).subscribe(
        res => {
          this.getRooms(); // Se vuelven a cargar las habitaciones después de eliminar
          this.toastr.success('Habitación eliminada con éxito', 'Éxito'); // Se muestra una notificación de éxito
        },
        err => {
          console.error(err); // Muestra el error en la consola
          this.toastr.error('Error al eliminar la habitación', 'Error'); // Muestra una notificación de error
        }
      );
    }
  }
  
}
