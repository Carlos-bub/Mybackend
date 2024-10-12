
# Atividade Backend: Projeto NestJS - TypeScript - Prisma

Este projeto consiste na implementação de um backend utilizando o framework **NestJS** com código fonte em **TypeScript** e o ORM **Prisma**. O modelo de banco de dados foi desenvolvido no **PostgreSQL** e a configuração foi feita para usar **Prisma**. Todo o projeto foi desenvolvido utilizando o **Visual Studio Code (VSCode)**. A atividade inclui a criação e implementação de rotas, conforme especificado na planilha anexa, e as operações de CRUD com base no modelo de banco de dados em anexo.

## Autores
- Carlos Henrique
- Mateus Henrique
- Rithiellen Kariny
- Gustavo Rodrigues

## Requisitos

- Node.js ( v20.11.0 )
- PostgreSQL
- NestJS CLI
- Prisma
- Visual Studio Code (VSCode)
- API Client (Postman)

## Configuração do Banco de Dados

1. Instale o **MySQL** localmente (localhost) ou configure um serviço de banco de dados remoto.
2. Crie um banco de dados para o projeto.
3. Atualize o arquivo `.env` na raiz do projeto com as seguintes configurações:

   ``"DATABASE_URL="postgresql://postgres:1234@localhost:5432/postgres"``

4. Para rodar as migrations do banco de dados, utilize os comandos abaixo:

   ``npx prisma migrate dev --name init``

## Como Executar o Projeto Nest

1. Clone o repositório:

   ``gh repo clone Carlos-bub/Mybackend``

2. Abra o projeto no **VSCode**.

3. Instale as dependências:

   ``npm install``

4. Rode as migrations para configurar o banco de dados:

   ``npx prisma migrate dev``

5. Execute o servidor:

   ``npm run start:dev``

6. O servidor estará rodando localmente (localhost).

## Testando as Rotas

Recomendamos o uso do cliente API **Postman** dentro do **VSCode** para testar as rotas. Siga os seguintes passos:

1. Instale a extensão Postman no VSCode.
2. Abra o projeto no VSCode e use o Postman para enviar requisições HTTP para as rotas definidas no projeto.
3. Exemplo de rotas para testes:
   - `GET /products` - Retorna todos os produtos.
   - `POST /products` - Cria um novo produto (requer JSON no body).
   - `PUT /products/:id` - Atualiza um produto por ID.
   - `DELETE /products/:id` - Exclui um produto por ID.

As rotas são configuradas conforme a planilha anexa.


## Comandos Úteis

- Para acessar o Prisma Studio (interface para visualizar os dados no banco):

   ``npx prisma studio``

- Para rodar testes:

   ``npm run test``

## Considerações Finais

Este projeto foi desenvolvido como parte da disciplina de Backend com NestJS, com foco em práticas modernas de desenvolvimento backend, utilizando **TypeScript**, **Prisma ORM** e **VSCode** como ambiente de desenvolvimento.
