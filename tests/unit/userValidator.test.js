// tests/unit/userValidator.test.js
const {
  validateCreateUser,
  validateUpdateUser,
} = require('../../src/validators/userValidator');

describe('userValidator - create', () => {
  it('deve aceitar usuário válido', () => {
    const { valid, errors } = validateCreateUser({
      name: 'João',
      email: 'joao@example.com',
    });

    expect(valid).toBe(true);
    expect(errors.length).toBe(0);
  });

  it('deve recusar nome curto', () => {
    const { valid, errors } = validateCreateUser({
      name: 'J',
      email: 'joao@example.com',
    });

    expect(valid).toBe(false);
    expect(errors).toContain(
      'Nome é obrigatório e deve ter pelo menos 2 caracteres.'
    );
  });

  it('deve recusar e-mail inválido', () => {
    const { valid, errors } = validateCreateUser({
      name: 'João',
      email: 'invalido',
    });

    expect(valid).toBe(false);
    expect(errors).toContain('E-mail em formato inválido.');
  });
});

describe('userValidator - update', () => {
  it('deve permitir atualizar só o nome válido', () => {
    const { valid, errors } = validateUpdateUser({
      name: 'Novo Nome',
    });

    expect(valid).toBe(true);
    expect(errors.length).toBe(0);
  });

  it('deve recusar nome inválido no update', () => {
    const { valid, errors } = validateUpdateUser({
      name: 'J',
    });

    expect(valid).toBe(false);
    expect(errors).toContain(
      'Nome, se informado, deve ter pelo menos 2 caracteres.'
    );
  });

  it('deve recusar e-mail inválido no update', () => {
    const { valid, errors } = validateUpdateUser({
      email: 'errado',
    });

    expect(valid).toBe(false);
    expect(errors).toContain(
      'E-mail, se informado, deve estar em formato válido.'
    );
  });
});
