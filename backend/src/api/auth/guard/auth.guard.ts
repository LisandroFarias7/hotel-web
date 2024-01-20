/* eslint-disable prettier/prettier */
import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { jwtConstants } from '../constants/constansts';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';



@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  // Método 'canActivate' que se ejecuta al validar si la solicitud puede continuar
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest(); // Obtiene la solicitud HTTP

    const token = this.extractTokenFromHeader(request); // Extrae el token del encabezado de la solicitud

    if (!token) {
      throw new UnauthorizedException(); // Lanza una excepción si no hay token
    }

    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: jwtConstants.secret, // Verifica y decodifica el token utilizando la clave secreta
      });
      request['user'] = payload; // Almacena la información del usuario en la solicitud ('user' en este caso)
    } catch {
      throw new UnauthorizedException(); // Captura cualquier error en la verificación y lanza una excepción de no autorizado
    }
    
    return true; // Devuelve verdadero si la validación es exitosa y la solicitud puede continuar
  }

  // Método privado para extraer el token del encabezado de la solicitud
  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? []; // Obtiene el token de autorización del encabezado

    return type === 'Bearer' ? token : undefined; // Devuelve el token si el tipo de autorización es 'Bearer'
  }
}
