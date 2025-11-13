// src/validators/productValidator.js

function isValidNumber(value) {
  return typeof value === 'number' && !Number.isNaN(value);
}

function isInteger(value) {
  return Number.isInteger(value);
}

function validateCreateProduct(body) {
  const errors = [];

  if (!body.name || typeof body.name !== 'string' || body.name.trim().length < 2) {
    errors.push('Nome do produto é obrigatório e deve ter pelo menos 2 caracteres.');
  }

  if (body.price === undefined) {
    errors.push('Preço é obrigatório.');
  } else if (!isValidNumber(body.price) || body.price < 0) {
    errors.push('Preço deve ser um número maior ou igual a 0.');
  }

  if (body.stock === undefined) {
    // se não vier, tudo bem, o padrão no banco é 0
  } else if (!isInteger(body.stock) || body.stock < 0) {
    errors.push('Estoque deve ser um número inteiro maior ou igual a 0.');
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

function validateUpdateProduct(body) {
  const errors = [];

  if (body.name !== undefined) {
    if (typeof body.name !== 'string' || body.name.trim().length < 2) {
      errors.push('Nome, se informado, deve ter pelo menos 2 caracteres.');
    }
  }

  if (body.price !== undefined) {
    if (!isValidNumber(body.price) || body.price < 0) {
      errors.push('Preço, se informado, deve ser um número maior ou igual a 0.');
    }
  }

  if (body.stock !== undefined) {
    if (!isInteger(body.stock) || body.stock < 0) {
      errors.push('Estoque, se informado, deve ser um número inteiro maior ou igual a 0.');
    }
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

module.exports = {
  validateCreateProduct,
  validateUpdateProduct,
};
