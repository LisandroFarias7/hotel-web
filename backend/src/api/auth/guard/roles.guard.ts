/* eslint-disable prettier/prettier */
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/roles.decorator';
import { Rol } from '../../common/enums/rol.enum';


@Injectable()
export class RolesGuard implements CanActivate {

  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    // Obtiene el rol definido en los decoradores a nivel de método o controlador
    const role = this.reflector.getAllAndOverride<Rol>(ROLES_KEY, [
      context.getHandler(), // Método
      context.getClass(), // Controlador
    ]);

    // Si no se define ningún rol, se permite el acceso
    if (!role) {
      return true;
    }

    // Obtiene la información del usuario desde la solicitud HTTP
    const { user } = context.switchToHttp().getRequest();

    // Verifica si el usuario tiene el rol de administrador, permitiendo el acceso si es así
    if (user.rol === Rol.Admin) {
      return true;
    }

    // Verifica si el rol del usuario coincide con el rol permitido
    return role === user.rol;
  }
}
