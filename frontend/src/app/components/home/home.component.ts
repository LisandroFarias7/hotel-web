import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  isMenuOpen = false; // Variable para controlar si el menú está abierto o cerrado

  // Función para alternar el estado del menú (abrir/cerrar)
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen; // Cambia el estado del menú (true/false)
  }
  
  constructor() {} // Constructor vacío
  
  ngOnInit(): void {
    // Función que se ejecuta al inicializar el componente (actualmente está vacía)
  }
  

}

