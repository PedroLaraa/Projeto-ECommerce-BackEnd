import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { CityService } from './city.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CityEntity } from './entities/city.entity';
import { CityController } from './city.controller';

@Module({
  imports: [
    CacheModule.register({
      ttl: 9000000,
    }),
    TypeOrmModule.forFeature([CityEntity]),
  ],
  controllers: [CityController],
  providers: [CityService],
})
export class CityModule {}
