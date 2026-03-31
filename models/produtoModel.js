let produtos = [
  { id: 1, nome: "carne" },
  { id: 2, nome: "batata" }
];

function listarProdutos() {
  return produtos;
}

function adicionarProduto(nome) {
  const novoProduto = {
    id: produtos.length > 0 ? produtos[produtos.length - 1].id + 1 : 1,
    nome: nome
  };

  produtos.push(novoProduto);
}

function buscarProdutoPorId(id) {
  return produtos.find(produto => produto.id === Number(id));
}

function atualizarProduto(id, nome) {
  const produto = produtos.find(produto => produto.id === Number(id));

  if (produto) {
    produto.nome = nome;
  }
}

function excluirProduto(id) {
  produtos = produtos.filter(produto => produto.id !== Number(id));
}

module.exports = {
  listarProdutos,
  adicionarProduto,
  buscarProdutoPorId,
  atualizarProduto,
  excluirProduto
};