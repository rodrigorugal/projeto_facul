import ProdutoService from "../services/produto.service.js";

const ProdutoController = (app) => {
  const db = app.get("db");
  const produtoService = new ProdutoService(db);

  const createProduto = async (req, res) => {
    console.log("#################");
    console.log(
      "Controller: Requisição recebida para criar produto:",
      req.body
    );

    try {
      const novoProduto = await produtoService.create(req.body);
      console.log("Produto criado com sucesso:", novoProduto);
      res.status(201).json(novoProduto);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Erro ao criar produto", error: error.message });
    }
  };

  const getAllProdutos = async (req, res) => {
    try {
      const produtos = await produtoService.findAll();
      res.status(200).json(produtos);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Erro ao buscar produtos", error: error.message });
    }
  };

  return { createProduto, getAllProdutos };
};

export default ProdutoController;
