import { cityEntitieMock } from '../../city/__mocks__/cityEntitie.mock';
import { AddressEntity } from '../entities/address.entity';
import { userEntityMock } from '../../user/__mocks__/user.mock';

export const addressMock: AddressEntity = {
  cep: '32900000',
  cityId: cityEntitieMock.id,
  complement: 'casa',
  created_at: new Date(),
  id: 4352,
  number: 296,
  updated_at: new Date(),
  userId: userEntityMock.id,
};
