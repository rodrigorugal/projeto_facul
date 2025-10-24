class ProdutoService {
    constructor(db) {
        this.db = db;
    }

    async create(produto) {
        return new Promise((resolve, reject) => {
            const { nome, preco, descricao } = produto;
            const sql = 'INSERT INTO produtos (nome, preco, descricao) VALUES (?, ?, ?)';
            
            this.db.run(sql, [nome, preco, descricao], function(err) {
                if (err) {
                    return reject(err);
                }
                resolve({ id: this.lastID, ...produto });
            });
        });
    }

    async findAll() {
        return new Promise((resolve, reject) => {
            this.db.all('SELECT * FROM produtos', [], (err, rows) => {
                if (err) {
                    return reject(err);
                }
                resolve(rows);
            });
        });
    }
}

export default ProdutoService;