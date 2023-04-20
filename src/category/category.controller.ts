import { Controller, Get } from '@nestjs/common';
import { CategoryEntity } from './entities/category.entity';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async getAllCategories(): Promise<CategoryEntity[]> {
    return await this.categoryService.findAllCategories();
  }
}
