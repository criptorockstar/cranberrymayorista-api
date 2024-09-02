import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getAllProducts() {
    return this.productsService.findAll();
  }

  @Get('/categories/')
  getAllCategories() {
    return this.productsService.findAllCategories();
  }

  @Get('/colors')
  getAllColors() {
    return this.productsService.findAllColors();
  }

  @Get('sizes')
  getAllSizes() {
    return this.productsService.findAllSizes();
  }

  @Get('product-colors')
  getAllProductColors() {
    return this.productsService.findAllProductColors();
  }

  @Get('product-sizes')
  getAllProductSizes() {
    return this.productsService.findAllProductSizes();
  }
}
