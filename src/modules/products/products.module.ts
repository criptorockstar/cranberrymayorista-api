import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { ProductEntity } from './entities/product.entity';
import { Color } from './entities/color.entity';
import { Size } from './entities/size.entity';
import { Category } from './entities/category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity, Color, Size, Category])],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
