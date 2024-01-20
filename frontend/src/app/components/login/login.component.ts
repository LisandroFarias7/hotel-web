import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';
import { LoginDto } from 'src/app/models/login.dto';
import { ToastrService } from 'ngx-toastr';
import { RegisterDto } from 'src/app/models/register.dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  register!: RegisterDto; // Variable para almacenar datos de registro
  usuario!: LoginDto; // Variable para almacenar datos de inicio de sesión
  
  username!: string; // Nombre de usuario
  email!: string; // Correo electrónico
  password!: string; // Contraseña
  
  constructor(
    private authService: AuthService, // Servicio de autenticación
    private tokenService: TokenService, // Servicio para gestionar tokens
    private toastr: ToastrService, // Servicio para notificaciones tipo toast
    private router: Router // Servicio de enrutamiento
  ) {}
  
  ngOnInit(): void {
    // Esta función se ejecuta cuando el componente se inicia
    // Actualmente está vacía
  }
  
  // Función para realizar el inicio de sesión
  onLogin() {
    // Se crea un objeto 'usuario' con los datos de inicio de sesión
    this.usuario = new LoginDto(this.email, this.password);
  
    // Se llama al método 'login' del servicio de autenticación
    this.authService.login(this.usuario).subscribe(
      data => {
        console.log(data.token); // Se muestra el token en la consola
        this.tokenService.setToken(data.token); // Se guarda el token en el servicio correspondiente
        this.router.navigate(['/admin']); // Se redirige a la página de administrador
      },
      err => {
        this.toastr.warning('Cuenta incorrecta'); // Se muestra un mensaje de advertencia si hay un error en el inicio de sesión
        console.log(err); // Se muestra el error en la consola
      }
    );
  }
  
  // Función para realizar el registro de un nuevo usuario
  onRegister() {
    // Se crea un objeto 'register' con los datos para el registro
    this.register = new RegisterDto(this.username, this.email, this.password);
  
    // Se llama al método 'register' del servicio de autenticación
    this.authService.register(this.register).subscribe(
      res => {
        console.log(res); // Se muestra la respuesta en la consola
        this.toastr.success('Usuario Creado', 'Successfully'); // Se muestra un mensaje de éxito de registro
        this.router.navigate(['/login']); // Se redirige a la página de inicio de sesión
      },
      err => {
        this.toastr.error('Campos incorrectos'); // Se muestra un mensaje de error si los campos son incorrectos
      }
    );
  }
  

}
