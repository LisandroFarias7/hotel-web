/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateClientDto } from './create-client.dto';
import { IsEmail, IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from 'class-validator';

export class UpdateClientDto extends PartialType(CreateClientDto) {
    
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    cardName: string;

    @IsString()
    cardNumber: string;

    @IsNumber()
    cardCode: number;

    @IsString()
    dateCard: string;

    @IsEmail()
    email: string;

    @IsString()
    @MaxLength(10)
    @MinLength(1)
    phone: string;
}
