import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity } from './entities/category.entity';
import { Repository } from 'typeorm';
import { CreateCategory } from './dtos/create-category.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryEntity>,
  ) {}

  async findAllCategories(): Promise<CategoryEntity[]> {
    const categories: CategoryEntity[] = await this.categoryRepository.find();

    if (!categories || categories.length === 0) {
      throw new NotFoundException(`Categories empty.`);
    }

    return categories;
  }

  async findCategoryByName(categoryName: string): Promise<CategoryEntity> {
    const category = await this.categoryRepository.findOne({
      where: {
        name: categoryName,
      },
    });

    if (!category) {
      throw new NotFoundException(`Category name ${categoryName} not found`);
    }

    return category;
  }

  async findCategoryById(categoryId: number): Promise<CategoryEntity> {
    const category = await this.categoryRepository.findOne({
      where: {
        id: categoryId,
      },
    });

    if (!category) {
      throw new NotFoundException(`Category ID ${categoryId} not found`);
    }

    return category;
  }

  async createCategory(
    createCategory: CreateCategory,
  ): Promise<CategoryEntity> {
    const categoryExists = await this.findCategoryByName(
      createCategory.name,
    ).catch(() => undefined);

    if (categoryExists) {
      throw new BadRequestException(`${createCategory.name} already exists`);
    }

    return await this.categoryRepository.save(createCategory);
  }
}
