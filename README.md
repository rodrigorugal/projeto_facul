📦 API de Gerenciamento de Usuários e Produtos
CRUD completo com Node.js + Express + SQLite + Validações de Entrada

Este projeto implementa uma API modularizada seguindo arquitetura Routes → Controllers → Services, utilizando SQLite como banco local.
Agora com validações robustas, garantindo a integridade dos dados enviados pelo cliente.

📑 Índice

✨ Funcionalidades

🔒 Validações Implementadas

🚀 Tecnologias Utilizadas

📂 Estrutura do Projeto

🗄️ Banco de Dados

⚙️ Como Executar

📌 Rotas da API

Usuários

Produtos

📬 Exemplos de Requisição

⚠️ Exemplos de Erros de Validação

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

🔒 Validações Implementadas

A API agora possui validações completas:

✔️ Usuários

name obrigatório, mínimo 2 caracteres

email obrigatório e com formato válido

Atualizações aceitam apenas campos válidos

✔️ Produtos

name obrigatório, mínimo 2 caracteres

price deve ser número ≥ 0

stock deve ser inteiro ≥ 0 (opcional na criação)

✔️ Parâmetros da URL

IDs são validados

Apenas inteiros positivos são aceitos

Caso contrário → 400 - ID inválido

📌 Erros retornam JSON no formato:
{
  "errors": [
    "Mensagem indicando o problema"
  ]
}

🚀 Tecnologias Utilizadas

Node.js

Express

SQLite3

Nodemon

Arquitetura MVC (adaptado)

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
    ├── validators
    │   ├── productValidator.js
    │   └── userValidator.js
    └── database
        └── db.js

🗄️ Banco de Dados
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

2️⃣ Execute o servidor

Ambiente de desenvolvimento:

npm run dev


Modo normal:

npm start

3️⃣ Endereço da API
http://localhost:3000/api

📌 Rotas da API
👤 Usuários
Método	Rota	Descrição
POST	/api/users	Criar usuário
GET	/api/users	Listar todos
GET	/api/users/:id	Buscar por ID
PUT	/api/users/:id	Atualizar usuário
DELETE	/api/users/:id	Remover usuário
📦 Produtos
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

✏️ Atualizar produto
PUT /api/products/1
{
  "price": 149.90
}

⚠️ Exemplos de Erros de Validação
❌ Nome muito curto
{
  "errors": [
    "Nome do produto é obrigatório e deve ter pelo menos 2 caracteres."
  ]
}

❌ E-mail inválido
{
  "errors": [
    "E-mail em formato inválido."
  ]
}

❌ Preço negativo
{
  "errors": [
    "Preço, se informado, deve ser um número maior ou igual a 0."
  ]
}

❌ ID inválido
{
  "error": "ID inválido"
}

📄 Licença

Este projeto está sob a licença MIT.
Sinta-se livre para utilizar, modificar e evoluir este código.