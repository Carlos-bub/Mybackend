/**
 * Serviço de gerenciamento de produtos.
 *
 * Esta classe é responsável por interagir com o banco de dados
 * através do Prisma para realizar operações relacionadas a produtos.
 * 
 * Métodos disponíveis:
 * - create: Cria um novo produto.
 * - findAll: Retorna todos os produtos.
 * - findOne: Retorna um produto específico pelo ID.
 * - update: Atualiza um produto existente.
 * - remove: Remove um produto pelo ID.
 */

// products/products.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Product } from '@prisma/client';

@Injectable()
export class ProductsService {
    constructor(private prisma: PrismaService) { }

    async create(data: { ean: string; name: string; idCategory: number }): Promise<Product> {
        return this.prisma.product.create({ data });
    }

    async findAll(): Promise<Product[]> {
        return this.prisma.product.findMany();
    }

    async findOne(id: number): Promise<Product> {
        return this.prisma.product.findUnique({ where: { id } });
    }

    async update(id: number, data: { ean?: string; name?: string; idCategory?: number }): Promise<Product> {
        return this.prisma.product.update({
            where: { id },
            data,
        });
    }

    async remove(id: number): Promise<Product> {
        return this.prisma.product.delete({ where: { id } });
    }
}
