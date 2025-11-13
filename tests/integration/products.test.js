// tests/integration/products.test.js
const request = require('supertest');
const app = require('../../src/app');
const { run } = require('../../src/database/db');

beforeEach(async () => {
  // limpa a tabela de produtos antes de cada teste
  await run('DELETE FROM products');
});

describe('Products API', () => {
  it('deve criar produto válido (POST /api/products)', async () => {
    const response = await request(app)
      .post('/api/products')
      .send({
        name: 'Teclado',
        price: 100,
        stock: 10,
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.name).toBe('Teclado');
    expect(response.body.price).toBe(100);
    expect(response.body.stock).toBe(10);
  });

  it('não deve criar produto com preço inválido', async () => {
    const response = await request(app)
      .post('/api/products')
      .send({
        name: 'Mouse',
        price: -5,
      });

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('errors');
    expect(response.body.errors.length).toBeGreaterThan(0);
  });

  it('deve listar produtos (GET /api/products)', async () => {
    await request(app).post('/api/products').send({
      name: 'P1',
      price: 10,
      stock: 1,
    });

    await request(app).post('/api/products').send({
      name: 'P2',
      price: 20,
      stock: 2,
    });

    const response = await request(app).get('/api/products');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBe(2);
  });

  it('deve buscar produto por id (GET /api/products/:id)', async () => {
    const created = await request(app).post('/api/products').send({
      name: 'Produto X',
      price: 50,
    });

    const id = created.body.id;

    const response = await request(app).get(`/api/products/${id}`);

    expect(response.status).toBe(200);
    expect(response.body.id).toBe(id);
    expect(response.body.name).toBe('Produto X');
  });

  it('deve atualizar produto (PUT /api/products/:id)', async () => {
    const created = await request(app).post('/api/products').send({
      name: 'Antigo',
      price: 10,
      stock: 1,
    });

    const id = created.body.id;

    const response = await request(app)
      .put(`/api/products/${id}`)
      .send({
        price: 20,
      });

    expect(response.status).toBe(200);
    expect(response.body.id).toBe(id);
    expect(response.body.price).toBe(20);
    expect(response.body.name).toBe('Antigo');
  });

  it('deve deletar produto (DELETE /api/products/:id)', async () => {
    const created = await request(app).post('/api/products').send({
      name: 'PraExcluir',
      price: 5,
    });

    const id = created.body.id;

    const delResponse = await request(app).delete(`/api/products/${id}`);
    expect(delResponse.status).toBe(204);

    const getResponse = await request(app).get(`/api/products/${id}`);
    expect(getResponse.status).toBe(404);
  });

  it('deve retornar 400 para ID inválido', async () => {
    const response = await request(app).get('/api/products/abc');
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('error', 'ID inválido');
  });
});
