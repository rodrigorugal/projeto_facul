// src/services/productService.js
const { run, get, all } = require('../database/db');

async function createProduct({ name, price, stock = 0 }) {
  if (!name || price == null) {
    throw new Error('Campos obrigatórios: name, price');
  }

  const result = await run(
    `INSERT INTO products (name, price, stock) VALUES (?, ?, ?)`,
    [name, price, stock]
  );

  return {
    id: result.id,
    name,
    price,
    stock,
  };
}

async function getAllProducts() {
  return all(`SELECT * FROM products`);
}

async function getProductById(id) {
  return get(`SELECT * FROM products WHERE id = ?`, [id]);
}

async function updateProduct(id, { name, price, stock }) {
  const existing = await getProductById(id);
  if (!existing) {
    return null;
  }

  const newName = name ?? existing.name;
  const newPrice = price ?? existing.price;
  const newStock = stock ?? existing.stock;

  await run(
    `UPDATE products SET name = ?, price = ?, stock = ? WHERE id = ?`,
    [newName, newPrice, newStock, id]
  );

  return {
    id,
    name: newName,
    price: newPrice,
    stock: newStock,
  };
}

async function deleteProduct(id) {
  const result = await run(`DELETE FROM products WHERE id = ?`, [id]);
  return result.changes > 0;
}

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
