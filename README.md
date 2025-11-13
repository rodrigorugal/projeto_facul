# 🛠️ API CRUD de Usuários e Produtos  
### Node.js + Express + SQLite + Arquitetura Modular

---

# 📑 Sumário
1. [Descrição](#📝-descrição)  
2. [Tecnologias](#🚀-tecnologias)  
3. [Como Rodar](#▶️-como-rodar)  
4. [Estrutura](#📁-estrutura)  
5. [Rotas](#🌐-rotas)  
6. [Validações](#🔍-validações)  
7. [Personas](#🧑‍💼-personas)  
8. [User Stories](#📘-user-stories)  
9. [MVP](#🔥-mvp)  
10. [Kanban](#📋-kanban)

---

# 📝 Descrição
API criada para fins acadêmicos, com arquitetura modular, endpoints CRUD completos e validações robustas para **Usuários** e **Produtos**.

---

# 🚀 Tecnologias
- Node.js  
- Express  
- SQLite3  
- Nodemon  
- Git + GitHub  

---

# ▶️ Como Rodar

```bash
npm install
npm run dev

URL Base:

http://localhost:3000/api

src/
 ├─ controllers/
 ├─ routes/
 ├─ services/
 ├─ validators/
 ├─ database/
 └─ server.js

🌐 Rotas
Produtos
Método	Rota
POST	/api/products
GET	/api/products
GET	/api/products/:id
PUT	/api/products/:id
DELETE	/api/products/:id
Usuários
Método	Rota
POST	/api/users
GET	/api/users
GET	/api/users/:id
PUT	/api/users/:id
DELETE	/api/users/:id
🔍 Validações

Nome mínimo 2 caracteres

Email válido

Preço ≥ 0

Estoque inteiro ≥ 0

IDs devem ser inteiros positivos

🧑‍💼 Personas

Ver arquivo: PERSONAS.md

📘 User Stories

Ver arquivo: USER_STORIES.md

🔥 MVP

Ver arquivo: MVP.md

📋 Kanban

Ver arquivo: KANBAN.md


---

# 📁 **3. PERSONAS (4 personas)** — `PERSONAS.md`

*(Já preparado anteriormente; versão final incluída aqui)*

```md
# 👥 Personas do Projeto

## 1) Marcos Andrade — Gerente de Operações
Objetivo: Centralizar informações  
Dor: Dados inconsistentes  
Motivação: Eficiência operacional  

## 2) Carla Menezes — Analista de Vendas  
Objetivo: Consultas rápidas  
Dor: Falta de filtros  
Motivação: Agilidade  

## 3) Eduardo Lima — Coordenador de TI  
Objetivo: Integrar sistemas  
Dor: APIs instáveis  
Motivação: Arquitetura limpa  

## 4) Fernanda Rocha — Supervisora de Estoque  
Objetivo: Controle de estoque  
Dor: Estoque negativo  
Motivação: Segurança operacional  