import { ReturnAdressDto } from '../../adress/dtos/returnAdress.dto';
import { UserEntity } from '../entities/user.entity';

export class ReturnUserDto {
  id: number;
  name: string;
  email: string;
  phone: string;
  cpf: string;
  adresses?: ReturnAdressDto[];

  constructor(userEntity: UserEntity) {
    this.id = userEntity.id;
    this.name = userEntity.name;
    this.email = userEntity.email;
    this.phone = userEntity.phone;
    this.cpf = userEntity.cpf;

    this.adresses = userEntity.adresses
      ? userEntity.adresses.map((adress) => new ReturnAdressDto(adress))
      : undefined;
  }
}
