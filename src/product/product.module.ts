import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './entities/product.entity';
import { CategoryEntity } from '../category/entities/category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity, CategoryEntity])],
  providers: [ProductService],
  controllers: [ProductController],
})
export class ProductModule {}
