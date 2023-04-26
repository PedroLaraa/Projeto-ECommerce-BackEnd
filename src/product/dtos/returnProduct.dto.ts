import { ProductEntity } from '../entities/product.entity';

export class ReturnProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  createdAt: Date;
  updatedAt: Date;
  categoryId: number;

  constructor(productEntity: ProductEntity) {
    this.id = productEntity.id;
    this.name = productEntity.name;
    this.price = productEntity.price;
    this.image = productEntity.image;
    this.createdAt = productEntity.createdAt;
    this.updatedAt = productEntity.updatedAt;
    this.categoryId = productEntity.categoryId;
  }
}
