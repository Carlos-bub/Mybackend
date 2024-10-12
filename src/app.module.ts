/**
 * Módulo principal da aplicação (AppModule).
 * 
 * Este módulo é responsável por agregar todos os módulos da aplicação,
 * incluindo o módulo de categorias, usuários e produtos.
 * Ele também define os controladores e serviços utilizados em toda a aplicação.
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { CategoryModule } from './category/category.module'; 
import { UsersModule } from './users/users.module'

@Module({
  imports: [PrismaModule, CategoryModule,  UsersModule], 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
