import { cityEntitieMock } from '../../city/__mocks__/cityEntitie.mock';
import { CreateAddressDto } from '../dtos/createAddress.dto';
import { addressMock } from './address.mock';

export const createAddressMock: CreateAddressDto = {
  cep: '32900000',
  cityId: cityEntitieMock.id,
  complement: 'casa',
  number: addressMock.number,
};
