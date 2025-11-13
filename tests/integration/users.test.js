// tests/integration/users.test.js
const request = require('supertest');
const app = require('../../src/app');
const { run } = require('../../src/database/db');

beforeEach(async () => {
  // limpa a tabela de usuários antes de cada teste
  await run('DELETE FROM users');
});

describe('Users API', () => {
  it('deve criar um usuário válido (POST /api/users)', async () => {
    const response = await request(app)
      .post('/api/users')
      .send({
        name: 'João Silva',
        email: 'joao@example.com',
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.name).toBe('João Silva');
    expect(response.body.email).toBe('joao@example.com');
  });

  it('não deve criar usuário com dados inválidos', async () => {
    const response = await request(app)
      .post('/api/users')
      .send({
        name: 'J', // pequeno demais
        email: 'email-invalido',
      });

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('errors');
    expect(Array.isArray(response.body.errors)).toBe(true);
    expect(response.body.errors.length).toBeGreaterThan(0);
  });

  it('deve listar usuários (GET /api/users)', async () => {
    await request(app).post('/api/users').send({
      name: 'User 1',
      email: 'user1@example.com',
    });

    await request(app).post('/api/users').send({
      name: 'User 2',
      email: 'user2@example.com',
    });

    const response = await request(app).get('/api/users');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBe(2);
  });

  it('deve buscar usuário por id (GET /api/users/:id)', async () => {
    const created = await request(app).post('/api/users').send({
      name: 'Buscar',
      email: 'buscar@example.com',
    });

    const id = created.body.id;

    const response = await request(app).get(`/api/users/${id}`);

    expect(response.status).toBe(200);
    expect(response.body.id).toBe(id);
    expect(response.body.name).toBe('Buscar');
  });

  it('deve retornar 404 ao buscar usuário inexistente', async () => {
    const response = await request(app).get('/api/users/99999');
    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty('error');
  });

  it('deve atualizar usuário (PUT /api/users/:id)', async () => {
    const created = await request(app).post('/api/users').send({
      name: 'Antigo',
      email: 'antigo@example.com',
    });

    const id = created.body.id;

    const response = await request(app)
      .put(`/api/users/${id}`)
      .send({
        name: 'Novo Nome',
      });

    expect(response.status).toBe(200);
    expect(response.body.id).toBe(id);
    expect(response.body.name).toBe('Novo Nome');
    expect(response.body.email).toBe('antigo@example.com');
  });

  it('deve deletar usuário (DELETE /api/users/:id)', async () => {
    const created = await request(app).post('/api/users').send({
      name: 'Remover',
      email: 'remove@example.com',
    });

    const id = created.body.id;

    const delResponse = await request(app).delete(`/api/users/${id}`);
    expect(delResponse.status).toBe(204); // sem conteúdo

    const getResponse = await request(app).get(`/api/users/${id}`);
    expect(getResponse.status).toBe(404);
  });

  it('deve retornar 400 para ID inválido', async () => {
    const response = await request(app).get('/api/users/abc');
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('error', 'ID inválido');
  });
});
