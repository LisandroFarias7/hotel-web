import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RoomI } from 'src/app/interfaces/room';
import { RoomDto } from 'src/app/models/room.dto';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit {

  roomGroup: FormGroup; // FormGroup para gestionar los datos del formulario

  constructor(
    private roomService: RoomService, // Servicio para manipular habitaciones
    private router: Router, // Servicio de enrutamiento
    private toastr: ToastrService, // Servicio para mostrar notificaciones tipo toast
    private fb: FormBuilder // Constructor de formularios reactivos
  ) {
    // Se crea el FormGroup y se definen los campos con sus valores por defecto
    this.roomGroup = this.fb.group({
      title: '',
      description: '',
      price: 0,
      imageUrl: ''
    });
  }
  
  ngOnInit(): void {
    // Código para ejecutar al inicializar el componente (actualmente vacío)
  }
  
  // Función para crear una habitación
  createRoom() {
    console.log(this.roomGroup.value); // Muestra los valores del formulario en la consola
  
    // Llama al método createRoom del servicio RoomService para crear una habitación
    this.roomService.createRoom(this.roomGroup.value).subscribe(
      res => {
        console.log(res);
        this.toastr.success('Habitación creada con éxito', 'Éxito'); // Muestra una notificación de éxito
        this.router.navigate(['/admin/rooms']); // Redirige a la lista de habitaciones después de crear una nueva
      },
      err => {
        console.log(err);
        this.toastr.error('Error al crear la habitación', 'Error'); // Muestra una notificación de error
      }
    );
  }
  


}
