import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Check } from 'src/app/interfaces/check';
import { CheckService } from 'src/app/services/check.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
  animations: [
    // Definición de una animación llamada 'slideInOut'
    trigger('slideInOut', [
      state('in', style({
        opacity: 1,
        transform: 'translateY(0)',
      })),
      // Animación al entrar al estado
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(-100%)',
        }),
        animate('0.6s ease-out')
      ]),
      // Animación al salir del estado
      transition(':leave', [
        animate('0.6s ease-in', style({
          opacity: 0,
          transform: 'translateY(-100%)',
        }))
      ])
    ])
  ]}
  )


  export class BookingComponent implements OnInit {
  
    checkForm!: FormGroup; // Variable para almacenar el formulario de verificación
  
    constructor(
      private checkService: CheckService, // Servicio para realizar comprobaciones
      private toastr: ToastrService, // Servicio para mostrar notificaciones
      private activatedRoute: ActivatedRoute, // Servicio para acceder a la ruta activa
      private formBuilder: FormBuilder // Constructor de formularios reactivos
    ) {}
  
    ngOnInit(): void {
      // Se inicializa el formulario de verificación con validaciones
      this.checkForm = this.formBuilder.group({
        checkIn: ['', Validators.required],
        checkOut: ['', Validators.required],
        guests: ['', Validators.required],
        phone: ['', Validators.required]
      });
    }
  
    // Función para crear una verificación
    createCheck() {
      this.checkService.createCheck(this.checkForm.value).subscribe(
        res => {
          console.log(res); // Se muestra la respuesta en la consola
          this.toastr.show('Fecha enviada, le llegará un mensaje por WhatsApp para darle más información'); // Se muestra una notificación de éxito
        },
        err => {
          this.toastr.error('Fecha Ocupada'); // Se muestra una notificación de fecha ocupada en caso de error
          console.log(err); // Se muestra el error en la consola
        }
      );
    }
  }
  

