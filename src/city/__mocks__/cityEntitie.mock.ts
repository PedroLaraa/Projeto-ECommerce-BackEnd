import { stateEntityMock } from '../../state/__mocks__/state.mock';
import { CityEntity } from '../entities/city.entity';

export const cityEntitieMock: CityEntity = {
  id: 2,
  stateId: stateEntityMock.id,
  name: 'cityName',
  created_at: new Date(),
  updated_at: new Date(),
};
