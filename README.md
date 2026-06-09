##  API REST - Sistema de Gerenciamento de Produtos

![GitHub repo size](https://img.shields.io/github/repo-size/Estefanie-08/Trabalho-MVC?style=for-the-badge)
![Node.js](https://img.shields.io/badge/node-%3E%3D18.0.0-6ab04c?style=for-the-badge&logo=node.js)
![Express](https://img.shields.io/badge/Express-framework-000000?style=for-the-badge&logo=express)

API RESTful desenvolvida para gerenciamento de produtos com autenticação de usuários.
Projeto desenvolvido durante as aulas de Back-end.

---

##  Tecnologias Utilizadas

* **Runtime:** Node.js
* **Framework:** Express
* **Banco de Dados:** MySQL
* **Autenticação:** Sessão / JWT
* **Documentação:** Swagger UI

---

##  Funcionalidades

- [x] Autenticação de usuários (Login e Logout)
- [x] Cadastro de produtos
- [x] Listagem de todos os produtos
- [x] Busca de produto por ID
- [x] Atualização de produto
- [x] Exclusão de produto
- [x] Documentação interativa via Swagger

---

##  Como Executar o Projeto

### Pré-requisitos

* [Node.js](https://nodejs.org/) instalado
* [MySQL](https://www.mysql.com/) instalado e rodando
* [Git](https://git-scm.com/) instalado

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/Estefanie-08/Trabalho-MVC.git
```

2. Entre na pasta do projeto:
```bash
cd Trabalho-MVC
```

3. Instale as dependências:
```bash
npm install
```

---
##  Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```env
PORT=3000
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASS=sua_senha
DB_NAME=nome_do_banco
```

---
##  Como Rodar

```bash
node server.js
```

O servidor vai iniciar em: `http://localhost:3000`

---

##  Documentação Swagger

Com o servidor rodando, acesse:

 **http://localhost:3000/api-docs**

---

##  Autora

* **Estefanie Cardozo** — [GitHub](https://github.com/Estefanie-08)