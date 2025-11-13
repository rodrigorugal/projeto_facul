// src/controllers/userController.js
const userService = require('../services/userService');

async function create(req, res) {
  try {
    const user = await userService.createUser(req.body);
    return res.status(201).json(user);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
}

async function getAll(req, res) {
  try {
    const users = await userService.getAllUsers();
    return res.json(users);
  } catch (err) {
    return res.status(500).json({ error: 'Erro ao listar usuários' });
  }
}

async function getById(req, res) {
  try {
    const { id } = req.params;
    const user = await userService.getUserById(id);

    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    return res.json(user);
  } catch (err) {
    return res.status(500).json({ error: 'Erro ao buscar usuário' });
  }
}

async function update(req, res) {
  try {
    const { id } = req.params;
    const updated = await userService.updateUser(id, req.body);

    if (!updated) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    return res.json(updated);
  } catch (err) {
    return res.status(500).json({ error: 'Erro ao atualizar usuário' });
  }
}

async function remove(req, res) {
  try {
    const { id } = req.params;
    const deleted = await userService.deleteUser(id);

    if (!deleted) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    return res.status(204).send();
  } catch (err) {
    return res.status(500).json({ error: 'Erro ao deletar usuário' });
  }
}

module.exports = {
  create,
  getAll,
  getById,
  update,
  remove,
};
