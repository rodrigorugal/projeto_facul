import app from './app.js';
import sqlite3 from 'sqlite3';

const PORT = 3001;
const DB_PATH = './data/database.sqlite';

const db = new sqlite3.Database(DB_PATH, (err) => {
    if (err) return console.error("Erro ao conectar DB:", err.message);

    db.run(`CREATE TABLE IF NOT EXISTS produtos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        preco REAL,
        descricao TEXT
    )`, (err) => {
        if (err) console.error("Erro ao criar tabela:", err.message);
    });
});

app.set('db', db);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});