// src/server.js
const express = require('express');
const app = express();
const routes = require('./routes');

// middlewares
app.use(express.json());

// rotas
app.use('/api', routes);

app.get('/', (req, res) => {
  res.json({
    message: 'API de Gerenciamento de Estoque e Usuários (CRUD Core)',
  });
});

// porta
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
