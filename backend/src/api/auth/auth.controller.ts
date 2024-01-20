/* eslint-disable prettier/prettier */
import { Controller,
        Get, 
        Post, 
        Body,  
        HttpCode, 
        HttpStatus, 
      } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { Rol } from '../common/enums/rol.enum';
import { Auth } from './decorators/auth.decorator';
import { ActiveUser } from '../common/decorators/active.user.decorator';
import { ActiveUserI } from '../common/interfaces/active-user.interface';




@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Get('profile')
  @Auth(Rol.Admin)
  getProfile(@ActiveUser() user: ActiveUserI) {
    return user;
  }

  @Post('register')
  register(@Body() registerDto: RegisterDto) {
    console.log(registerDto)
    this.authService.register(registerDto)
    return console.log({message: 'Success'})
  }
}
