import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './entities/product.entity';
import { Repository } from 'typeorm';
import { CreateProduct } from './dtos/create-product.dto';
import { CategoryService } from 'src/category/category.service';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
    private readonly categoryService: CategoryService,
  ) {}

  async findAllProducts(): Promise<ProductEntity[]> {
    const products: ProductEntity[] = await this.productRepository.find({
      relations: {
        category: true,
      },
    });

    if (products.length === 0) {
      throw new NotFoundException(`Products are empty`);
    }

    return products;
  }

  async findProductByName(productName: string): Promise<ProductEntity> {
    const product = await this.productRepository.findOne({
      where: {
        name: productName,
      },
    });

    if (!product) {
      throw new NotFoundException(`Product ${productName} not found`);
    }

    return product;
  }

  async createProduct(createProduct: CreateProduct) {
    const categoryExists = await this.categoryService.findCategoryById(
      createProduct.categoryId,
    );

    // if (!categoryExists) {
    //   throw new BadRequestException(
    //     `Category ${createProduct.categoryId} not found`,
    //   );
    // }

    const productExists = await this.findProductByName(
      createProduct.name,
    ).catch(() => undefined);

    if (productExists) {
      throw new BadRequestException(`${createProduct.name} already exists`);
    }

    return await this.productRepository.save(createProduct);
  }
}
