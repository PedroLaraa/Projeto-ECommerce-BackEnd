import { cityEntitieMock } from '../../city/__mocks__/cityEntitie.mock';
import { CreateAdressDto } from '../dtos/createAdress.dto';
import { adressMock } from './adress.mock';

export const createAdressMock: CreateAdressDto = {
  cep: '32900000',
  cityId: cityEntitieMock.id,
  complement: 'casa',
  number: adressMock.number,
};
