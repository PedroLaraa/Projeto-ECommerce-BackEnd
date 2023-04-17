import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AdressService } from './adress.service';
import { CreateAdressDto } from './dtos/createAdress.dto';
import { AdressEntity } from './entities/adress.entity';
import { Roles } from 'src/decorators/roles.decorator';
import { UserType } from 'src/user/enum/user-type.enum';
import { UserId } from 'src/decorators/user-id.decorator';

@Roles(UserType.User)
@Controller('adress')
export class AdressController {
  constructor(private readonly adressService: AdressService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async createAdress(
    @Body() createAdressDto: CreateAdressDto,
    @UserId() userId: number,
  ): Promise<AdressEntity> {
    return this.adressService.createAdress(createAdressDto, userId);
  }
}
