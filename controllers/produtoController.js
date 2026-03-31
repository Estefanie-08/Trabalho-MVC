const produtoModel = require("../models/produtoModel");

function listarProdutos(req, res) {
  const produtos = produtoModel.listarProdutos();
  res.render("produtos", { produtos });
}

function criarProduto(req, res) {
  const { nome } = req.body;
  produtoModel.adicionarProduto(nome);
  res.redirect("/produtos");
}

function formEditarProduto(req, res) {
  const produto = produtoModel.buscarProdutoPorId(req.params.id);
  res.render("editarProduto", { produto });
}

function editarProduto(req, res) {
  const { nome } = req.body;
  produtoModel.atualizarProduto(req.params.id, nome);
  res.redirect("/produtos");
}

function excluirProduto(req, res) {
  produtoModel.excluirProduto(req.params.id);
  res.redirect("/produtos");
}

module.exports = {
  listarProdutos,
  criarProduto,
  formEditarProduto,
  editarProduto,
  excluirProduto
};