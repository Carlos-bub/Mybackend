/**
 * Serviço principal da aplicação (AppService).
 * 
 * Este serviço contém a lógica de negócios principal da aplicação.
 * Atualmente, possui um método simples que retorna uma mensagem de saudação.
 */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
