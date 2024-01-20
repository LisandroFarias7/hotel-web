/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UpdateClientDto } from './dto/update-client.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from './entities/client.entity';
import { Repository } from 'typeorm';
import { CreateClientDto } from './dto/create-client.dto';

@Injectable()
export class ClientService {

  constructor(
    @InjectRepository(Client)
    private clientRepository: Repository<Client>
  ) {
    
  }
  
  async create(createClientDto: CreateClientDto) {
    const newClient = this.clientRepository.create(createClientDto)
    return this.clientRepository.save(newClient)
  }

  findAll() {
    return this.clientRepository.find()
  }

  findOne(id: string) {
    return this.clientRepository.findOneBy({id})
  }

  update(id: string, updateClientDto: UpdateClientDto) {
    return this.clientRepository.update(id, updateClientDto)
  }

  remove(id: string) {
    return this.clientRepository.delete(id)
  }
}
