import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';
import { ReturnProduct } from './dtos/returnProduct.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getAllProducts(): Promise<ReturnProduct[]> {
    return (await this.productService.findAllProducts()).map(
      (product) => new ReturnProduct(product),
    );
  }
}
