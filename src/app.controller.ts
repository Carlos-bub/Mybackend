/**
 * Controlador principal da aplicação (AppController).
 * 
 * Este controlador gerencia as requisições relacionadas à raiz da aplicação,
 * fornecendo um endpoint que retorna uma mensagem de saudação.
 */
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
