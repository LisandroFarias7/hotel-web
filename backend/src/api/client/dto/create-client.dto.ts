/* eslint-disable prettier/prettier */

import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";


export class CreateClientDto {

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
    phone: string;
}
