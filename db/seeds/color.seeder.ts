import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Color } from '../../src/modules/products/entities/color.entity';

@Injectable()
export class ColorSeeder implements OnModuleInit {
  constructor(
    @InjectRepository(Color)
    private readonly colorRepository: Repository<Color>,
  ) {}

  async onModuleInit() {
    await this.seedColors();
  }

  async seedColors() {
    const count = await this.colorRepository.count();
    if (count > 0) {
      console.log('Los colores ya están insertados.');
      return;
    }

    const colors = [
      'Rojo',
      'Verde',
      'Azul',
      'Amarillo',
      'Negro',
      'Blanco',
      'Gris',
      'Naranja',
      'Marrón',
      'Rosa',
    ].map((name) => ({
      name,
    }));

    await this.colorRepository.save(colors);
    console.log('Colores insertados');
  }
}
