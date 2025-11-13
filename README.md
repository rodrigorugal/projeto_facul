🛠️ API CRUD de Usuários e Produtos
Node.js + Express + SQLite + Arquitetura Modular + Testes Automatizados
📑 Sumário

Descrição

Tecnologias

Como Rodar a API

Estrutura do Projeto

Banco de Dados

Rotas

Validações

Personas

User Stories

MVP

Kanban

Testes Automatizados

Como Rodar os Testes

📝 Descrição

API criada para fins acadêmicos, seguindo arquitetura modular (controllers, services, routes, validators).
Permite operações completas de CRUD para Usuários e Produtos, mantendo validações robustas e um design escalável.

Agora o projeto também possui testes automatizados de unidade e integração, utilizando Jest e Supertest.

🚀 Tecnologias

Node.js

Express

SQLite3

Jest & Supertest

Nodemon

Git + GitHub

▶️ Como Rodar a API
npm install
npm run dev


URL Base:

http://localhost:3000/api

📁 Estrutura do Projeto
src/
 ├─ app.js            # App express (usado também nos testes)
 ├─ server.js         # Servidor que sobe o Express
 ├─ controllers/
 ├─ routes/
 ├─ services/
 ├─ validators/
 ├─ database/
 └─ ...
tests/
 ├─ integration/      # Testes de integração (Supertest)
 └─ unit/             # Testes unitários (Jest)

📦 Banco de Dados

SQLite3 armazenado em src/database.

A camada de banco é acessada por funções genéricas:

run(sql, params)

get(sql, params)

all(sql, params)

🌐 Rotas
Produtos
Método	Rota	Descrição
POST	/api/products	Criar produto
GET	/api/products	Listar produtos
GET	/api/products/:id	Buscar por ID
PUT	/api/products/:id	Atualizar
DELETE	/api/products/:id	Remover
Usuários
Método	Rota	Descrição
POST	/api/users	Criar usuário
GET	/api/users	Listar usuários
GET	/api/users/:id	Buscar por ID
PUT	/api/users/:id	Atualizar
DELETE	/api/users/:id	Remover
🔍 Validações
Usuários

Nome mínimo de 2 caracteres

Email obrigatório e válido

Atualização permite envio parcial (PATCH-like)

Produtos

Nome mínimo 2 caracteres

Preço ≥ 0

Estoque inteiro ≥ 0

Update também permite campos parciais

🧑‍💼 Personas

As personas completas estão no arquivo:
📄 PERSONAS.md

📘 User Stories

Arquivo:
📄 USER_STORIES.md

🔥 MVP

Arquivo:
📄 MVP.md

📋 Kanban

Arquivo:
📄 KANBAN.md

🧪 Testes Automatizados

O projeto possui testes automatizados utilizando:

✔ Jest — Testes Unitários

Validações (validators) são testadas isoladamente.

✔ Supertest — Testes de Integração

Testam endpoints reais da API (CRUD de Users e Products).

✔ Reset do Banco Antes de Cada Teste

Cada teste limpa as tabelas usando:

await run('DELETE FROM users');
await run('DELETE FROM products');

Estrutura dos testes
tests/
 ├─ unit/
 │   ├─ userValidator.test.js
 │   └─ productValidator.test.js
 └─ integration/
     ├─ users.test.js
     └─ products.test.js

▶️ Como Rodar os Testes
1. Instalar dependências
npm install

2. Rodar todos os testes
npm test

3. Rodar com coverage
npm test -- --coverage

🎯 Conclusão

Este projeto agora possui:

Arquitetura modular

CRUD completo

Banco SQLite

Validação robusta

Testes automatizados reais e estruturados

Código organizado para escalabilidade

Documentação clara