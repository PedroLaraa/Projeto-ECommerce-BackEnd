import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AdressEntity } from './entities/adress.entity';
import { Repository } from 'typeorm';
import { CreateAdressDto } from './dtos/createAdress.dto';

@Injectable()
export class AdressService {
  constructor(
    @InjectRepository(AdressEntity)
    private readonly adressRepository: Repository<AdressEntity>,
  ) {}

  async createAdress(
    createAdressdTO: CreateAdressDto,
    userId: number,
  ): Promise<AdressEntity> {
    return this.adressRepository.save({
      ...createAdressdTO,
      userId,
    });
  }
}