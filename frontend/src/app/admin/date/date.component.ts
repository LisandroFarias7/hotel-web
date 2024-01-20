import { Component, OnInit } from '@angular/core';
import { Check } from 'src/app/interfaces/check';
import { CheckService } from 'src/app/services/check.service';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit{

  constructor(
    private checkService: CheckService // Servicio para obtener checks
  ) {}
  
  ngOnInit(): void {
    this.getChecks(); // Al iniciar el componente, se obtienen los checks
  }
  
  checks: Check[] = []; // Arreglo para almacenar los checks obtenidos
  
  // Función para obtener los checks
  getChecks() {
    this.checkService.getChecks().subscribe(
      res => {
        this.checks = res; // Asigna los checks obtenidos al arreglo correspondiente
      },
      err => {
        console.log(err); // Muestra el error en la consola si ocurre uno al obtener los checks
      }
    );
  }
  

}
