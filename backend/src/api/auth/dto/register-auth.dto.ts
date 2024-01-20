/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { LoginDto } from './login.dto';
import { IsNotEmpty } from 'class-validator';

export class RegisterAuthDto extends PartialType(LoginDto) {
    @IsNotEmpty()
    username: string;
}
