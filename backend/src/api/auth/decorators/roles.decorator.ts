/* eslint-disable prettier/prettier */
import { SetMetadata } from '@nestjs/common';
import { Rol } from '../../common/enums/rol.enum';

// Clave para almacenar información sobre roles
export const ROLES_KEY = 'roles';

// Decorador 'Roles' que asigna roles a controladores o métodos
export const Roles = (role: Rol) => SetMetadata(ROLES_KEY, role);
