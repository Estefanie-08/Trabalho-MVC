/**
 * @fileoverview Model responsável pelo gerenciamento dos dados de produtos.
 * Realiza as operações de CRUD diretamente na estrutura de dados em memória.
 */

/**
 * @type {Array<{id: number, nome: string}>}
 * @description Lista de produtos armazenados em memória.
 */
let produtos = [
  { id: 1, nome: "carne" },
  { id: 2, nome: "batata" }
];

/**
 * Retorna todos os produtos cadastrados.
 * @returns {Array<{id: number, nome: string}>} Lista com todos os produtos.
 */
function listarProdutos() {
  return produtos;
}

/**
 * Adiciona um novo produto à lista.
 * O ID é gerado automaticamente com base no último produto cadastrado.
 * @param {string} nome - Nome do produto a ser cadastrado.
 * @returns {void}
 */
function adicionarProduto(nome) {
  const novoProduto = {
    id: produtos.length > 0 ? produtos[produtos.length - 1].id + 1 : 1,
    nome: nome
  };

  produtos.push(novoProduto);
}

/**
 * Busca um produto pelo seu ID.
 * @param {number|string} id - ID do produto a ser buscado.
 * @returns {{id: number, nome: string}|undefined} O produto encontrado ou undefined se não existir.
 */
function buscarProdutoPorId(id) {
  return produtos.find(produto => produto.id === Number(id));
}

/**
 * Atualiza o nome de um produto existente.
 * @param {number|string} id - ID do produto a ser atualizado.
 * @param {string} nome - Novo nome do produto.
 * @returns {void}
 */
function atualizarProduto(id, nome) {
  const produto = produtos.find(produto => produto.id === Number(id));

  if (produto) {
    produto.nome = nome;
  }
}

/**
 * Remove um produto da lista pelo seu ID.
 * @param {number|string} id - ID do produto a ser removido.
 * @returns {void}
 */
function excluirProduto(id) {
  // TODO: Futuramente implementar exclusão no banco de dados MySQL
  produtos = produtos.filter(produto => produto.id !== Number(id));
}

module.exports = {
  listarProdutos,
  adicionarProduto,
  buscarProdutoPorId,
  atualizarProduto,
  excluirProduto
};