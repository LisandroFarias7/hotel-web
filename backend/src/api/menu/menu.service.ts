/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Menu } from './entities/menu.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MenuService {

  constructor(
    @InjectRepository(Menu)
    private readonly menuRepository: Repository<Menu>
  ) {}

  
  create(createMenuDto: CreateMenuDto) {
    const newMenu = this.menuRepository.create(createMenuDto)
    return this.menuRepository.save(newMenu)
  }

  async findAll() {
    return this.menuRepository.find();
  }

  async findOne(id: string) {
    return this.menuRepository.findOneBy({id})
  }

  update(id: string, updateMenuDto: UpdateMenuDto) {
    return this.menuRepository.update(id, updateMenuDto)
  }

  remove(id: string) {
    return this.menuRepository.delete(id)
  }
}
