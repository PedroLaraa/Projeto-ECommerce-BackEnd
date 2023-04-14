import { AdressEntity } from '../entities/adress.entity';

export class ReturnAdressDto {
  complement: string;
  numberAdress: number;
  cep: string;
  city?: any;

  constructor(adress: AdressEntity) {
    this.complement = adress.complement;
    this.numberAdress = adress.number;
    this.cep = adress.cep;
    // this.city = adress.cityId;
  }
}
