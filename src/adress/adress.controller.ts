import {
  Body,
  Controller,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AdressService } from './adress.service';
import { CreateAdressDto } from './dtos/createAdress.dto';
import { AdressEntity } from './entities/adress.entity';
import { Roles } from 'src/decorators/roles.decorator';
import { UserType } from 'src/user/enum/user-type.enum';

@Controller('adress')
export class AdressController {
  constructor(private readonly adressService: AdressService) {}

  @Roles(UserType.User)
  @Post('/:userId')
  @UsePipes(ValidationPipe)
  async createAdress(
    @Body() createAdressDto: CreateAdressDto,
    @Param('userId') userId: number,
  ): Promise<AdressEntity> {
    return this.adressService.createAdress(createAdressDto, userId);
  }
}
