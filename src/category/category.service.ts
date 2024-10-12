/**
 * Serviço responsável pela lógica de negócios relacionada às categorias.
 * 
 * O `CategoriesService` fornece métodos para criar, recuperar, atualizar e 
 * remover categorias no banco de dados. Ele utiliza o `PrismaService` 
 * para interagir com a camada de persistência de dados.
 */

// categories/categories.service.ts

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoryService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateCategoryDto) {
    return this.prisma.category.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.category.findMany();
  }

  async findOne(id: number) {
    return this.prisma.category.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: CreateCategoryDto) {
    return this.prisma.category.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.category.delete({
      where: { id },
    });
  }
}
