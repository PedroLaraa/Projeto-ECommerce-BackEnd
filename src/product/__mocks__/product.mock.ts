import { categoryMock } from '../../category/__mocks__/category.mock';
import { ProductEntity } from '../entities/product.entity';

export const productMock: ProductEntity = {
  createdAt: new Date(),
  updatedAt: new Date(),
  id: 432,
  name: 'iPhone 11 Pro',
  categoryId: categoryMock.id,
  price: 2000,
  image: '',
};
