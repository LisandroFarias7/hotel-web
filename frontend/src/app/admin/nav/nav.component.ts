import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
  isLogged!: boolean; // Variable para verificar si el usuario está autenticado

  isMenuOpen = false; // Variable para controlar el estado del menú
  
  // Función para alternar el estado del menú (abrir/cerrar)
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen; // Cambia el estado del menú (true/false)
  }
    
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
