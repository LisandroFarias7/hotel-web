/* eslint-disable prettier/prettier */
import { IsNumber, IsString, MaxLength, MinLength } from "class-validator";


export class CreateCheckDto {
    
    @MaxLength(10)
    @MinLength(8)
    checkIn: Date;

    @IsString()
    @MaxLength(10)
    @MinLength(8)
    checkOut: Date;

    @IsNumber()
    @MaxLength(6)
    @MinLength(1)
    guests: number;

    @IsString()
    @MaxLength(10)
    @MinLength(1)
    phone: string;
}
