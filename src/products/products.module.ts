/**
 * Módulo responsável pela gestão dos produtos.
 * 
 * Este módulo encapsula o controlador e o serviço relacionados
 * aos produtos, além de fornecer a instância do `PrismaService`
 * para a manipulação do banco de dados.
 */
import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService, PrismaService]
})
export class ProductsModule {}
