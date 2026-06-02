const produtoModel = require("../models/produtoModel");

function listarProdutos(req, res) {
  /*
    #swagger.tags = ['Produtos']
    #swagger.summary = 'Lista todos os produtos'
    #swagger.description = 'Retorna a página com todos os produtos cadastrados no sistema. Requer sessão autenticada.'
    #swagger.responses[200] = {
      description: 'Lista de produtos retornada com sucesso.',
      schema: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: { type: 'integer', example: 1 },
            nome: { type: 'string', example: 'carne' }
          }
        }
      }
    }
    #swagger.responses[302] = {
      description: 'Usuário não autenticado. Redireciona para /login.'
    }
  */
  const produtos = produtoModel.listarProdutos();
  res.render("produtos", { produtos });
}

function criarProduto(req, res) {
  /*
    #swagger.tags = ['Produtos']
    #swagger.summary = 'Cria um novo produto'
    #swagger.description = 'Recebe o nome do produto no corpo da requisição, gera um ID automaticamente e adiciona o produto à lista. Redireciona para /produtos após a criação. Requer sessão autenticada.'
    #swagger.parameters['body'] = {
      in: 'body',
      name: 'Produto',
      required: true,
      description: 'Dados do produto a ser criado.',
      schema: {
        $nome: 'Arroz'
      }
    }
    #swagger.responses[302] = {
      description: 'Produto criado com sucesso. Redireciona para /produtos.'
    }
    #swagger.responses[400] = {
      description: 'Requisição inválida. O campo "nome" é obrigatório.'
    }
    #swagger.responses[401] = {
      description: 'Usuário não autenticado. Redireciona para /login.'
    }
  */
  const { nome } = req.body;
  produtoModel.adicionarProduto(nome);
  res.redirect("/produtos");
}

function formEditarProduto(req, res) {
  /*
    #swagger.tags = ['Produtos']
    #swagger.summary = 'Exibe o formulário de edição de produto'
    #swagger.description = 'Busca o produto pelo ID informado na URL e retorna a página de edição com os dados atuais preenchidos. Requer sessão autenticada.'
    #swagger.parameters['id'] = {
      in: 'path',
      name: 'id',
      required: true,
      type: 'integer',
      description: 'ID numérico do produto a ser editado. Ex: 1'
    }
    #swagger.responses[200] = {
      description: 'Formulário de edição retornado com sucesso com os dados do produto.'
    }
    #swagger.responses[404] = {
      description: 'Produto com o ID informado não foi encontrado.'
    }
    #swagger.responses[302] = {
      description: 'Usuário não autenticado. Redireciona para /login.'
    }
  */
  const produto = produtoModel.buscarProdutoPorId(req.params.id);
  res.render("editarProduto", { produto });
}

function editarProduto(req, res) {
  /*
    #swagger.tags = ['Produtos']
    #swagger.summary = 'Atualiza os dados de um produto'
    #swagger.description = 'Recebe o ID do produto via URL e o novo nome via corpo da requisição. Atualiza o produto correspondente e redireciona para /produtos. Requer sessão autenticada.'
    #swagger.parameters['id'] = {
      in: 'path',
      name: 'id',
      required: true,
      type: 'integer',
      description: 'ID numérico do produto a ser atualizado. Ex: 1'
    }
    #swagger.parameters['body'] = {
      in: 'body',
      name: 'Produto',
      required: true,
      description: 'Novo nome do produto.',
      schema: {
        $nome: 'Feijão'
      }
    }
    #swagger.responses[302] = {
      description: 'Produto atualizado com sucesso. Redireciona para /produtos.'
    }
    #swagger.responses[404] = {
      description: 'Produto com o ID informado não foi encontrado.'
    }
    #swagger.responses[400] = {
      description: 'Requisição inválida. O campo "nome" é obrigatório.'
    }
    #swagger.responses[401] = {
      description: 'Usuário não autenticado. Redireciona para /login.'
    }
  */
  const { nome } = req.body;
  produtoModel.atualizarProduto(req.params.id, nome);
  res.redirect("/produtos");
}

function excluirProduto(req, res) {
  /*
    #swagger.tags = ['Produtos']
    #swagger.summary = 'Remove um produto'
    #swagger.description = 'Recebe o ID do produto via URL e remove ele permanentemente da lista. Redireciona para /produtos após a exclusão. Requer sessão autenticada. Atenção: esta ação não pode ser desfeita.'
    #swagger.parameters['id'] = {
      in: 'path',
      name: 'id',
      required: true,
      type: 'integer',
      description: 'ID numérico do produto a ser removido. Ex: 2'
    }
    #swagger.responses[302] = {
      description: 'Produto removido com sucesso. Redireciona para /produtos.'
    }
    #swagger.responses[404] = {
      description: 'Produto com o ID informado não foi encontrado.'
    }
    #swagger.responses[401] = {
      description: 'Usuário não autenticado. Redireciona para /login.'
    }
  */
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