import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Payment } from 'src/app/interfaces/payment';
import { RoomI } from 'src/app/interfaces/room';
import { ClientDto } from 'src/app/models/client.dto';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {

  // Variables para almacenar información de la habitación
roomId: string = '';
roomTitle: string = '';
roomPrice: number = 0;
roomImage: string = '';

// Objeto para almacenar datos del cliente
client: Payment = {
  name: '',
  email: '',
  phone: '',
  cardName: '',
  cardNumber: '',
  cardCode: 0,
  dateCard: ''
}

constructor(
  private activatedRoute: ActivatedRoute, // Servicio para acceder a los parámetros de la ruta
  private clientService: ClientService, // Servicio para gestionar datos del cliente
  private router: Router, // Servicio de enrutamiento
  private toastr: ToastrService // Servicio para mostrar notificaciones tipo toast
) { }

ngOnInit(): void {
  // Suscripción a los cambios en los parámetros de la URL
  this.activatedRoute.queryParams.subscribe(
    params => {
      // Se asignan los valores de los parámetros a las variables correspondientes
      this.roomId = params['roomId'];
      this.roomTitle = params['roomTitle'];
      this.roomPrice = params['roomPrice'];
      this.roomImage = params['roomImg'];
    }
  );
}

total: number = 0; // Variable para almacenar el total del pago

roomNigth!: number; // Variable para la cantidad de noches

// Función para calcular el total del pago
calcTotal() {
  this.total = this.roomNigth * this.roomPrice; // Calcula el total multiplicando la cantidad de noches por el precio por noche
}

// Función para enviar los datos del cliente al servicio
clientData() {
  console.log(this.client); // Muestra los datos del cliente en la consola
  this.clientService.createClient(this.client).subscribe(
    res => {
      console.log(res); // Muestra la respuesta en la consola
      this.toastr.success('Pago realizado con éxito', 'Éxito'); // Muestra una notificación de éxito
      this.router.navigate(['/home']); // Redirige a la página de inicio
    },
    err => {
      console.log(err); // Muestra el error en la consola
      this.toastr.error('No se pudo completar el pago, intente más tarde', 'ERROR'); // Muestra una notificación de error
    }
  );
}


}
