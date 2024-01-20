/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateMenuDto } from './create-menu.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateMenuDto extends PartialType(CreateMenuDto) {
    @IsString()
    imageUrl: string;

    @IsString()
    image: string;

    @IsString()
    @IsNotEmpty()
    title: string;
    
    @IsString()
    @IsNotEmpty()
    description: string;  
}
