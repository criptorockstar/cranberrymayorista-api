import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './entities/product.entity';
import { Category } from './entities/category.entity';
import { Color } from './entities/color.entity';
import { Size } from './entities/size.entity';
import { ProductImage } from './entities/image.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<ProductEntity>,
    @InjectRepository(Color)
    private readonly colorRepository: Repository<Color>,
    @InjectRepository(Size)
    private readonly sizeRepository: Repository<Size>,
  ) {}

  async findAll() {
    return this.productRepository.find({
      relations: ['images', 'colors', 'sizes', 'categories'],
    });
  }

  async findAllCategories() {
    return this.categoryRepository.find();
  }

  async findAllColors() {
    return this.colorRepository.find();
  }

  async findAllSizes() {
    return this.sizeRepository.find();
  }

  async findAllProductColors() {}

  async findAllProductSizes() {}
}
