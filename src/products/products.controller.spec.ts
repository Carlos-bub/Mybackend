/**
 * Testes para o `ProductsController`.
 * 
 * Este conjunto de testes verifica a definição e a configuração do 
 * `ProductsController`. Utiliza o framework de testes do NestJS para 
 * criar um módulo de teste e garantir que o controlador está 
 * devidamente instanciado.
 */
import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './products.controller';

describe('ProductsController', () => {
  let controller: ProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
    }).compile();

    controller = module.get<ProductsController>(ProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
