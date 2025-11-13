// src/controllers/productController.js
const productService = require('../services/productService');

async function create(req, res) {
  try {
    const product = await productService.createProduct(req.body);
    return res.status(201).json(product);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
}

async function getAll(req, res) {
  try {
    const products = await productService.getAllProducts();
    return res.json(products);
  } catch (err) {
    return res.status(500).json({ error: 'Erro ao listar produtos' });
  }
}

async function getById(req, res) {
  try {
    const { id } = req.params;
    const product = await productService.getProductById(id);

    if (!product) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }

    return res.json(product);
  } catch (err) {
    return res.status(500).json({ error: 'Erro ao buscar produto' });
  }
}

async function update(req, res) {
  try {
    const { id } = req.params;
    const updated = await productService.updateProduct(id, req.body);

    if (!updated) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }

    return res.json(updated);
  } catch (err) {
    return res.status(500).json({ error: 'Erro ao atualizar produto' });
  }
}

async function remove(req, res) {
  try {
    const { id } = req.params;
    const deleted = await productService.deleteProduct(id);

    if (!deleted) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }

    return res.status(204).send();
  } catch (err) {
    return res.status(500).json({ error: 'Erro ao deletar produto' });
  }
}

module.exports = {
  create,
  getAll,
  getById,
  update,
  remove,
};
