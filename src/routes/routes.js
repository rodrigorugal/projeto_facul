import express from 'express';
import ProdutoController from '../controllers/produto.controller.js';

const router = express.Router();

router.use((req, res, next) => {
    const controller = ProdutoController(req.app);
    req.controller = controller;
    next();
});

router.post('/produtos', (req, res) => req.controller.createProduto(req, res));
router.get('/produtos', (req, res) => req.controller.getAllProdutos(req, res));

export default router;