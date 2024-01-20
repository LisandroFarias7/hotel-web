/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateCheckDto } from './create-check.dto';
import { IsDate, IsNumber, IsString, MaxLength, MinLength } from 'class-validator';

export class UpdateCheckDto extends PartialType(CreateCheckDto) {
    @IsDate()
    @MaxLength(10)
    @MinLength(8)
    checkIn: Date;

    @IsDate()
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
