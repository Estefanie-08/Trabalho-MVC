const User = require('../models/User');

exports.getLogin = (req, res) => {
  res.render('login', { erro: null });
};

exports.postLogin = (req, res) => {
  const { email, senha } = req.body;
  const user = User.findByEmail(email);

  if (user && user.senha === senha) {
    req.session.user = { id: user.id, nome: user.nome, email: user.email };
    return res.redirect('/'); // redireciona pra home
  }

  res.render('login', { erro: 'E-mail ou senha inválidos!' });
};

exports.logout = (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('connect.sid');
    res.redirect('/login');
  });
};