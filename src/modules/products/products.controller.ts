import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getAllProducts() {
    return this.productsService.findAll();
  }

  @Get('/featured')
  getFeaturedProducts() {
    return this.productsService.findFeatured();
  }

  @Get('/categories/')
  getAllCategories() {
    return this.productsService.findAllCategories();
  }
}
