// src/services/userService.js
const { run, get, all } = require('../database/db');

async function createUser({ name, email }) {
  if (!name || !email) {
    throw new Error('Campos obrigatórios: name, email');
  }

  const result = await run(
    `INSERT INTO users (name, email) VALUES (?, ?)`,
    [name, email]
  );

  return {
    id: result.id,
    name,
    email,
  };
}

async function getAllUsers() {
  return all(`SELECT * FROM users`);
}

async function getUserById(id) {
  return get(`SELECT * FROM users WHERE id = ?`, [id]);
}

async function updateUser(id, { name, email }) {
  const existing = await getUserById(id);
  if (!existing) {
    return null;
  }

  const newName = name ?? existing.name;
  const newEmail = email ?? existing.email;

  await run(
    `UPDATE users SET name = ?, email = ? WHERE id = ?`,
    [newName, newEmail, id]
  );

  return {
    id,
    name: newName,
    email: newEmail,
  };
}

async function deleteUser(id) {
  const result = await run(`DELETE FROM users WHERE id = ?`, [id]);
  return result.changes > 0;
}

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
