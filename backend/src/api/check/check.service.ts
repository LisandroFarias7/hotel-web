/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateCheckDto } from './dto/create-check.dto';
import { UpdateCheckDto } from './dto/update-check.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Check } from './entities/check.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CheckService {

  constructor(
    @InjectRepository(Check)
    private readonly checkRepository: Repository<Check>
  ) {}

  create(createCheckDto: CreateCheckDto) {
    const newDate = this.checkRepository.create(createCheckDto)
    return this.checkRepository.save(newDate)
  }

  findAll() {
    return this.checkRepository.find()
  }

  findOne(id: string) {
    return this.checkRepository.findOneBy({id})
  }

  update(id: string, updateCheckDto: UpdateCheckDto) {
    return this.checkRepository.update(id, updateCheckDto)
  }

  remove(id: string) {
    return this.checkRepository.delete(id)
  }
}
