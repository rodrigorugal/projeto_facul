// src/validators/userValidator.js

function isValidEmail(email) {
  // Regex simples, suficiente pra validação básica
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateCreateUser(body) {
  const errors = [];

  if (!body.name || typeof body.name !== 'string' || body.name.trim().length < 2) {
    errors.push('Nome é obrigatório e deve ter pelo menos 2 caracteres.');
  }

  if (!body.email || typeof body.email !== 'string') {
    errors.push('E-mail é obrigatório.');
  } else if (!isValidEmail(body.email)) {
    errors.push('E-mail em formato inválido.');
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

function validateUpdateUser(body) {
  const errors = [];

  if (body.name !== undefined) {
    if (typeof body.name !== 'string' || body.name.trim().length < 2) {
      errors.push('Nome, se informado, deve ter pelo menos 2 caracteres.');
    }
  }

  if (body.email !== undefined) {
    if (typeof body.email !== 'string' || !isValidEmail(body.email)) {
      errors.push('E-mail, se informado, deve estar em formato válido.');
    }
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

module.exports = {
  validateCreateUser,
  validateUpdateUser,
};
