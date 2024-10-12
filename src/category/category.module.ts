/**
 * Módulo responsável pela gestão das categorias.
 * 
 * O `CategoriesModule` agrega o `CategoriesController` e o 
 * `CategoriesService`, bem como o `PrismaService` para acesso ao 
 * banco de dados. Este módulo organiza a funcionalidade relacionada 
 * às categorias, permitindo a injeção de dependências e 
 * encapsulando a lógica de negócios e os manipuladores de 
 * rotas associados.
 */

import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [CategoryService],
  controllers: [CategoryController],
})
export class CategoryModule {}
