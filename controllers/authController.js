const User = require('../models/User');

exports.getLogin = (req, res) => {
  /*
    #swagger.tags = ['Autenticação']
    #swagger.summary = 'Exibe a página de login'
    #swagger.description = 'Retorna a página HTML do formulário de login para o usuário preencher suas credenciais.'
    #swagger.responses[200] = {
      description: 'Página de login renderizada com sucesso.'
    }
  */
  res.render('login', { erro: null });
};

exports.postLogin = (req, res) => {
  /*
    #swagger.tags = ['Autenticação']
    #swagger.summary = 'Realiza o login do usuário'
    #swagger.description = 'Recebe email e senha no corpo da requisição. Se as credenciais forem válidas, cria uma sessão autenticada e redireciona para a página inicial. Caso contrário, retorna a página de login com uma mensagem de erro.'
    #swagger.parameters['body'] = {
      in: 'body',
      name: 'Credenciais',
      required: true,
      description: 'Email e senha do usuário cadastrado.',
      schema: {
        $email: 'admin@email.com',
        $senha: '1234'
      }
    }
    #swagger.responses[302] = {
      description: 'Login bem-sucedido. Redireciona para a página inicial (/).'
    }
    #swagger.responses[401] = {
      description: 'Credenciais inválidas. Retorna a página de login com mensagem de erro: "E-mail ou senha inválidos!"'
    }
  */
  const { email, senha } = req.body;
  const user = User.findByEmail(email);

  if (user && user.senha === senha) {
    req.session.user = { id: user.id, nome: user.nome, email: user.email };
    return res.redirect('/');
  }

  res.render('login', { erro: 'E-mail ou senha inválidos!' });
};

exports.logout = (req, res) => {
  /*
    #swagger.tags = ['Autenticação']
    #swagger.summary = 'Realiza o logout do usuário'
    #swagger.description = 'Encerra a sessão ativa do usuário, apaga o cookie de sessão e redireciona para a página de login.'
    #swagger.responses[302] = {
      description: 'Logout realizado com sucesso. Redireciona para /login.'
    }
    #swagger.responses[500] = {
      description: 'Erro interno ao tentar destruir a sessão.'
    }
  */
  req.session.destroy(() => {
    res.clearCookie('connect.sid');
    res.redirect('/login');
  });
};