import { ReturnCityDto } from '../../city/dtos/returnCity.dto';
import { AdressEntity } from '../entities/adress.entity';

export class ReturnAdressDto {
  complement: string;
  numberAdress: number;
  cep: string;
  city?: ReturnCityDto;

  constructor(adress: AdressEntity) {
    this.complement = adress.complement;
    this.numberAdress = adress.number;
    this.cep = adress.cep;
    this.city = adress.city ? new ReturnCityDto(adress.city) : undefined;
  }
}
