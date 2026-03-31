const express = require("express");
const router = express.Router();
const produtoController = require("../controllers/produtoController");

router.get("/produtos", produtoController.listarProdutos);
router.post("/produtos", produtoController.criarProduto);
router.get("/produtos/editar/:id", produtoController.formEditarProduto);
router.post("/produtos/editar/:id", produtoController.editarProduto);
router.post("/produtos/excluir/:id", produtoController.excluirProduto);

module.exports = router;