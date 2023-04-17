import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AdressEntity } from './entities/adress.entity';
import { Repository } from 'typeorm';
import { CreateAdressDto } from './dtos/createAdress.dto';
import { UserService } from '../user/user.service';
import { CityService } from '../city/city.service';

@Injectable()
export class AdressService {
  constructor(
    @InjectRepository(AdressEntity)
    private readonly adressRepository: Repository<AdressEntity>,
    private readonly userService: UserService,
    private readonly cityService: CityService,
  ) {}

  async createAdress(
    createAdressdTO: CreateAdressDto,
    userId: number,
  ): Promise<AdressEntity> {
    await this.userService.findUserById(userId);

    await this.cityService.findCityById(createAdressdTO.cityId);

    return this.adressRepository.save({
      ...createAdressdTO,
      userId,
    });
  }
}
