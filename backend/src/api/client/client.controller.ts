/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe } from '@nestjs/common';
import { ClientService } from './client.service';
import { UpdateClientDto } from './dto/update-client.dto';
import { CreateClientDto } from './dto/create-client.dto';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post()
  createClient(@Body(new ValidationPipe) createClientDto: CreateClientDto) {
    return this.clientService.create(createClientDto);
  }

  @Get()
  findAllClients() {
    return this.clientService.findAll();
  }

  @Get(':id')
  findOneClient(@Param('id') id: string) {
    return this.clientService.findOne(id);
  }

  @Patch(':id')
  updateClient(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto) {
    return this.clientService.update(id, updateClientDto);
  }

  @Delete(':id')
  removeClient(@Param('id') id: string) {
    return this.clientService.remove(id);
  }
}
