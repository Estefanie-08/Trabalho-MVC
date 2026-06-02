const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'API de Produtos',
    description: `
# API REST - Trabalho MVC

Esta API permite gerenciar produtos e autenticar usuários.

## Como usar
1. Faça login na rota **/login** para criar uma sessão
2. Use as rotas de Produtos para gerenciar o catálogo
3. Faça logout na rota **/logout** quando terminar

## Credenciais de teste
- **Email:** admin@email.com
- **Senha:** 1234
    `,
    version: '1.0.0',
  },
  host: 'localhost:3000',
  schemes: ['http'],
  tags: [
    {
      name: 'Autenticação',
      description: 'Rotas para login e logout de usuários',
    },
    {
      name: 'Produtos',
      description: 'Rotas para gerenciamento completo de produtos (CRUD)',
    },
    {
      name: 'Páginas',
      description: 'Rotas de páginas da aplicação (requerem autenticação)',
    },
  ],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./server.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);