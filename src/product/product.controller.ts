import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { ReturnProduct } from './dtos/returnProduct.dto';
import { CreateProduct } from './dtos/create-product.dto';
import { Roles } from 'src/decorators/roles.decorator';
import { UserType } from 'src/user/enum/user-type.enum';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Roles(UserType.User, UserType.Admin)
  @Get()
  async getAllProducts(): Promise<ReturnProduct[]> {
    return (await this.productService.findAllProducts()).map(
      (product) => new ReturnProduct(product),
    );
  }

  @Roles(UserType.User, UserType.Admin)
  @Get('/search')
  async getProductByName(
    @Body() product: CreateProduct,
  ): Promise<ReturnProduct[]> {
    return this.productService.findAllProductByName(product.name);
  }

  @Roles(UserType.Admin)
  @UsePipes(ValidationPipe)
  @Post()
  async createProduct(@Body() product: CreateProduct): Promise<ReturnProduct> {
    return this.productService.createProduct(product);
  }
}
