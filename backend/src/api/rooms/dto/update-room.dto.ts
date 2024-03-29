/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateRoomDto } from './create-room.dto';

export class UpdateRoomDto extends PartialType(CreateRoomDto) {

    id: string;

    title: string;

    description: string;

    
    imageUrl: string;

    price: number;
    
}
