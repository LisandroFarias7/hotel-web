/* eslint-disable prettier/prettier */

import { IsNotEmpty, IsString } from "class-validator";


export class CreateMenuDto {
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
