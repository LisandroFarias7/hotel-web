import { Component, OnInit } from '@angular/core';
import { TokenService } from '../services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{


  isLogged!: boolean; // Variable para controlar si el usuario está autenticado o no

constructor(
  private tokenService: TokenService, // Servicio para gestionar tokens
  private router: Router // Servicio de enrutamiento
) {}

ngOnInit(): void {
  // Comprueba si el usuario está autenticado utilizando el servicio tokenService
  // Si el usuario está autenticado, se establece isLogged como true; de lo contrario, como false
  this.tokenService.isLogged() ? this.isLogged = true : this.isLogged = false;
}

// Función para cerrar sesión
logOut() {
  this.tokenService.logOut(); // Llama al método logOut del servicio tokenService para cerrar sesión
  this.router.navigate(['/login']); // Redirige al usuario a la página de inicio de sesión después de cerrar sesión
}




}
