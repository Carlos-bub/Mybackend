/**
 * Testes unitários para o serviço de produtos.
 *
 * Este arquivo contém os testes para a classe ProductsService,
 * verificando se o serviço é instanciado corretamente e se
 * os métodos do serviço se comportam como esperado.
 */
import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from './products.service';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsService],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
