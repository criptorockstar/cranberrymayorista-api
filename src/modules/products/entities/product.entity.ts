import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Timestamp,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Color } from './color.entity';
import { Size } from './size.entity';
import { Category } from './category.entity';

@Entity('products')
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  slug: string;

  @Column()
  image: string;

  @Column()
  description: string;

  @Column()
  stock: number;

  @Column()
  price: number;

  @Column()
  discount: number;

  @Column({ default: false })
  featured: boolean;

  @ManyToMany(() => Color, (color) => color.products)
  @JoinTable({
    name: 'product_colors',
    joinColumn: { name: 'product_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'color_id', referencedColumnName: 'id' },
  })
  colors: Color[];

  @ManyToMany(() => Size, (size) => size.products)
  @JoinTable({
    name: 'product_sizes',
    joinColumn: { name: 'product_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'size_id', referencedColumnName: 'id' },
  })
  sizes: Size[];

  @ManyToMany(() => Category, (category) => category.products)
  @JoinTable({
    name: 'product_categories',
    joinColumn: { name: 'product_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'category_id', referencedColumnName: 'id' },
  })
  categories: Category[];

  @CreateDateColumn()
  createdAt: Timestamp;

  @UpdateDateColumn()
  updatedAt: Timestamp;
}
