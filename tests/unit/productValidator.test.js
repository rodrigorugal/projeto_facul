// tests/unit/productValidator.test.js
const {
  validateCreateProduct,
  validateUpdateProduct,
} = require('../../src/validators/productValidator');

describe('productValidator - create', () => {
  it('deve aceitar produto válido', () => {
    const { valid, errors } = validateCreateProduct({
      name: 'Produto',
      price: 10,
      stock: 0,
    });

    expect(valid).toBe(true);
    expect(errors.length).toBe(0);
  });

  it('deve recusar sem nome', () => {
    const { valid, errors } = validateCreateProduct({
      price: 10,
    });

    expect(valid).toBe(false);
    expect(errors).toContain(
      'Nome do produto é obrigatório e deve ter pelo menos 2 caracteres.'
    );
  });

  it('deve recusar preço negativo', () => {
    const { valid, errors } = validateCreateProduct({
      name: 'P',
      price: -1,
    });

    expect(valid).toBe(false);
    expect(errors).toContain(
      'Preço deve ser um número maior ou igual a 0.'
    );
  });

  it('deve recusar estoque não inteiro', () => {
    const { valid, errors } = validateCreateProduct({
      name: 'Produto',
      price: 10,
      stock: 1.5,
    });

    expect(valid).toBe(false);
    expect(errors).toContain(
      'Estoque deve ser um número inteiro maior ou igual a 0.'
    );
  });
});

describe('productValidator - update', () => {
  it('deve aceitar update parcial válido', () => {
    const { valid, errors } = validateUpdateProduct({
      price: 20,
    });

    expect(valid).toBe(true);
    expect(errors.length).toBe(0);
  });

  it('deve recusar price inválido no update', () => {
    const { valid, errors } = validateUpdateProduct({
      price: -5,
    });

    expect(valid).toBe(false);
    expect(errors).toContain(
      'Preço, se informado, deve ser um número maior ou igual a 0.'
    );
  });
});
