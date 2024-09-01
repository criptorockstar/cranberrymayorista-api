import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './entities/product.entity';
import { Category } from './entities/category.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<ProductEntity>,
  ) {}

  async findAll() {
    return this.productRepository.find();
  }

  async findFeatured() {
    return this.productRepository.find({ where: { featured: true } });
  }

  async findAllCategories() {
    return this.categoryRepository.find();
  }
}
