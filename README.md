📦 API de Gerenciamento de Usuários e Produtos
CRUD completo com Node.js + Express + SQLite seguindo arquitetura Routes → Controllers → Services

Este projeto implementa uma API simples e funcional para gerenciar Usuários e Produtos, com persistência em SQLite e estrutura modularizada para facilitar manutenção, estudo e evolução.

📑 Índice

✨ Funcionalidades

🚀 Tecnologias Utilizadas

📂 Estrutura do Projeto

🗄️ Banco de Dados

⚙️ Como Executar

📌 Rotas da API

Usuários

Produtos

📬 Exemplos de Requisição

📄 Licença

✨ Funcionalidades
👤 Usuários

Criar usuário

Listar todos

Buscar por ID

Atualizar

Remover

📦 Produtos

Criar produto

Listar todos

Buscar por ID

Atualizar

Remover

🚀 Tecnologias Utilizadas

Node.js

Express

SQLite3

Nodemon (ambiente de desenvolvimento)

📂 Estrutura do Projeto
api-crud-usuarios-produtos/
├── package.json
├── database.sqlite
└── src
    ├── server.js
    ├── routes
    │   ├── index.js
    │   ├── productRoutes.js
    │   └── userRoutes.js
    ├── controllers
    │   ├── productController.js
    │   └── userController.js
    ├── services
    │   ├── productService.js
    │   └── userService.js
    └── database
        └── db.js

🗄️ Banco de Dados

A API utiliza SQLite, criado automaticamente ao iniciar o servidor.
Tabelas:

users
Campo	Tipo	Descrição
id	INTEGER PK	Identificador único
name	TEXT	Nome do usuário
email	TEXT UNIQUE	E-mail
created_at	DATETIME	Data de criação
products
Campo	Tipo	Descrição
id	INTEGER PK	Identificador único
name	TEXT	Nome do produto
price	REAL	Preço
stock	INTEGER	Estoque
created_at	DATETIME	Data de criação
⚙️ Como Executar
1️⃣ Instale as dependências
npm install

2️⃣ Execute o projeto

Ambiente de desenvolvimento (com reinício automático):

npm run dev


Ou modo normal:

npm start

3️⃣ Acesse o servidor
http://localhost:3000


A API estará acessível no prefixo:

http://localhost:3000/api

📌 Rotas da API
Usuários
Método	Rota	Descrição
POST	/api/users	Criar usuário
GET	/api/users	Listar todos
GET	/api/users/:id	Buscar por ID
PUT	/api/users/:id	Atualizar usuário
DELETE	/api/users/:id	Remover usuário
Produtos
Método	Rota	Descrição
POST	/api/products	Criar produto
GET	/api/products	Listar todos
GET	/api/products/:id	Buscar por ID
PUT	/api/products/:id	Atualizar produto
DELETE	/api/products/:id	Remover produto
📬 Exemplos de Requisição
➕ Criar usuário

POST /api/users

{
  "name": "João Silva",
  "email": "joao@example.com"
}

➕ Criar produto

POST /api/products

{
  "name": "Mouse Gamer",
  "price": 199.90,
  "stock": 12
}

🔍 Buscar produto por ID

GET /api/products/1

✏️ Atualizar usuário

PUT /api/users/1

{
  "name": "João Santos"
}

❌ Remover produto

DELETE /api/products/3

🛠️ Possíveis Melhorias Futuras

Login + autenticação JWT

Paginação e filtros

Middleware de validação (Joi/Zod)

Dockerfile

Testes automatizados (Jest)

📄 Licença

Este projeto está licenciado sob a licença MIT.
Sinta-se livre para usar, modificar e distribuir ⭐