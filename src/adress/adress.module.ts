import { Module } from '@nestjs/common';
import { AdressController } from './adress.controller';
import { AdressService } from './adress.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdressEntity } from './entities/adress.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AdressEntity])],
  controllers: [AdressController],
  providers: [AdressService],
})
export class AdressModule {}
