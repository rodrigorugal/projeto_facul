// src/app.js
const express = require('express');
const routes = require('./routes');

const app = express();

// middlewares
app.use(express.json());

// rotas da API
app.use('/api', routes);

// rota raiz (opcional para health check)
app.get('/', (req, res) => {
  res.json({
    message: 'API de Gerenciamento de Estoque e Usuários (CRUD Core)',
  });
});

module.exports = app;
