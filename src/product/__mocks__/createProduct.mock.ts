import { categoryMock } from '../../category/__mocks__/category.mock';
import { CreateProduct } from '../dtos/create-product.dto';

export const createProduct: CreateProduct = {
  name: 'iPhone 11 Pro',
  categoryId: categoryMock.id,
  price: 2000,
  image: '',
};
