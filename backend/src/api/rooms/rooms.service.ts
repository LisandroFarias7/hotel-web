/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Room } from './entities/room.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RoomsService {
  constructor(
    @InjectRepository(Room)
    private roomsRepository: Repository<Room>
  ) {}


  create(createRoomDto: CreateRoomDto) {
    const newRoom = this.roomsRepository.create(createRoomDto);
    return this.roomsRepository.save(newRoom)
  }

  findAll() {
    return this.roomsRepository.find()
  }

  findOne(id: string) {
    return this.roomsRepository.findOneBy({id});
  }

  update(id: string, updateRoomDto: UpdateRoomDto) {
    return this.roomsRepository.update(id, updateRoomDto)
  }

  remove(id: string) {
    return this.roomsRepository.delete(id);
  }
}
