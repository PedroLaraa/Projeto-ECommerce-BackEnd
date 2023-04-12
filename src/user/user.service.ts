import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserEntity } from './interfaces/user.entity';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  private users: UserEntity[] = [];

  async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    const saltRounds = 10;

    const passwordHashed = await hash(createUserDto.password, saltRounds);

    const user: UserEntity = {
      ...createUserDto,
      id: this.users.length + 1,
      password: passwordHashed,
    };

    this.users.push(user);

    return user;
  }

  async getAllUsers(): Promise<UserEntity[]> {
    return this.users;
  }
}
