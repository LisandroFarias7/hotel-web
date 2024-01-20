import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RoomI } from 'src/app/interfaces/room';
import { RoomService } from 'src/app/services/room.service';
import { trigger, style, animate, transition, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css'],
  animations: [
    // Definición de una animación llamada 'fadeInCards'
    trigger('fadeInCards', [
      // Transición para cualquier cambio de estado
      transition('* => *', [
        // Busca elementos con la clase 'room__card'
        query('.room__card', [
          // Establece un estilo inicial de opacidad cero y una traslación hacia abajo
          style({ opacity: 0, transform: 'translateY(100px)' }),
          // Realiza una animación con un retraso entre cada elemento
          stagger(100, [
            // Anima la opacidad a 1 y vuelve a la posición original
            animate('0.5s ease-out', style({ opacity: 1, transform: 'none' }))
          ])
        ])
      ])
    ])
  ]})
  export class RoomComponent implements OnInit {
  
    constructor(
      private roomService: RoomService, // Servicio para obtener habitaciones
      private toastr: ToastrService, // Servicio para mostrar notificaciones
      private router: Router // Servicio de enrutamiento
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
  }
  
