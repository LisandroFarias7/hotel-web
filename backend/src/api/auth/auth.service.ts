/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {

  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService) { }

  async login(loginDto: LoginDto) {

    const user = await this.usersService.findByEmailWithPassword(loginDto.email);
    if (!user) {
      throw new UnauthorizedException('email is wrong');
    }
    const IsPasswordValid = await bcrypt.compare(loginDto.password, user.password)
    if (!IsPasswordValid) {
      throw new UnauthorizedException('password is wrong')
    }

    const payload = { username: user.username, rol: user.rol };

    const token = await this.jwtService.signAsync(payload)

    return {
      token
    }
  }


  async register({username, email, password}: RegisterDto) {

    return this.usersService.create(
      {
        username,
        email,
        password: await bcrypt.hash(password, 10)
      }
    )

  }

  // create(createAuthDto: CreateAuthDto) {
  //   return 'This action adds a new auth';
  // }

  // findAll() {
  //   return `This action returns all auth`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} auth`;
  // }

  // update(id: number, updateAuthDto: UpdateAuthDto) {
  //   return `This action updates a #${id} auth`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} auth`;
  // }
}
