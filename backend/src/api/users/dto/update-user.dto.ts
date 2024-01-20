/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { Transform } from 'class-transformer';
import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsString()
    @Transform(({value}) => value.trim())
    @MaxLength(15)
    @MinLength(4)
    username: string;

    @IsEmail()
    email: string;

    @IsString()
    @Transform(({value}) => value.trim())
    @MaxLength(10)
    @MinLength(3)
    password: string;
}
