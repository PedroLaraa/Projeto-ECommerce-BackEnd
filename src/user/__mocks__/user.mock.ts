import { UserEntity } from '../../user/entities/user.entity';
import { UserType } from '../../user/enum/user-type.enum';

export const userEntityMock: UserEntity = {
  cpf: '06548275675',
  created_at: new Date(),
  email: 'pedrolara@gmail.com',
  id: 22,
  name: 'nameMock',
  password: 'mockPassword',
  phone: '31992842024',
  typeUser: UserType.User,
  updated_at: new Date(),
};
