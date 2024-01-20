/* eslint-disable prettier/prettier */

import { Transform } from "class-transformer";
import { IsEmail, IsString, MinLength } from "class-validator";


export class LoginDto {

 // Decorador para validar que el campo es un correo electrónico
@IsEmail()
email: string;

// Decorador para transformar el valor eliminando espacios en blanco alrededor
@Transform(({value}) => value.trim())
// Decorador para validar que el campo es un string
@IsString()
// Decorador para especificar la longitud mínima del campo
@MinLength(4)
password: string;

    
}
