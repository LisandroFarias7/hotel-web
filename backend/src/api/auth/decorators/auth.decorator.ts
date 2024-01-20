/* eslint-disable prettier/prettier */
import { UseGuards, applyDecorators } from "@nestjs/common";
import { Rol } from "../../common/enums/rol.enum";
import { Roles } from "./roles.decorator";
import { AuthGuard } from "../guard/auth.guard";
import { RolesGuard } from "../guard/roles.guard";

// Función 'Auth' que combina decoradores para autenticación y roles
export function Auth(rol: Rol) {
    return applyDecorators(
        Roles(rol), // Aplica el decorador 'Roles' con el rol proporcionado
        UseGuards(AuthGuard, RolesGuard) // Utiliza los guards 'AuthGuard' y 'RolesGuard'
    );
}
