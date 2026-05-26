const express = require("express");
const router = express.Router();
const produtoController = require("../controllers/produtoController");
const auth = require('../middlewares/auth'); 

router.get("/produtos", auth, produtoController.listarProdutos);
router.post("/produtos", auth, produtoController.criarProduto);
router.get("/produtos/editar/:id", auth, produtoController.formEditarProduto);
router.post("/produtos/editar/:id", auth, produtoController.editarProduto);
router.post("/produtos/excluir/:id", auth, produtoController.excluirProduto);

module.exports = router;
