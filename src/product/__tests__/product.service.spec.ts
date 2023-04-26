import { Test, TestingModule } from '@nestjs/testing';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ProductService } from '../product.service';
import { ProductEntity } from '../entities/product.entity';
import { productMock } from '../__mocks__/product.mock';
import { CategoryEntity } from '../../category/entities/category.entity';
import { categoryMock } from '../../category/__mocks__/category.mock';

describe('CategoryService', () => {
  let service: ProductService;

  let productRepository: Repository<ProductEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductService,
        {
          provide: getRepositoryToken(CategoryEntity),
          useValue: {
            findCategoryById: jest.fn().mockResolvedValue([categoryMock]),
          },
        },
        {
          provide: getRepositoryToken(ProductEntity),
          useValue: {
            findOne: jest.fn().mockResolvedValue(productMock),
            find: jest.fn().mockResolvedValue([productMock]),
          },
        },
      ],
    }).compile();

    service = module.get<ProductService>(ProductService);
    productRepository = module.get<Repository<ProductEntity>>(
      getRepositoryToken(ProductEntity),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(productRepository).toBeDefined();
  });

  it('should return list products', async () => {
    const products = await service.findAllProducts();

    expect(products).toEqual([productMock]);
  });

  it('should return error if product is empty', async () => {
    jest.spyOn(productRepository, 'find').mockResolvedValue([]);

    expect(service.findAllProducts).rejects.toThrowError();
  });
});
