import { UserEntity } from '../../user/entities/user.entity';
import { UserType } from '../../user/enum/user-type.enum';

export const userEntityMock: UserEntity = {
  cpf: '06548275675',
  created_at: new Date(),
  email: 'pedrolara@gmail.com',
  id: 4,
  name: 'nameMock',
  password: '$2b$10$CRyG5wcwk6hBw5F1F68uG.uftrTq78RZmRQ4R073QL/m9MJPbFdSq',
  phone: '31992842024',
  typeUser: UserType.User,
  updated_at: new Date(),
};
