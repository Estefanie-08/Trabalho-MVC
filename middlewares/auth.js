module.exports = (req, res, next) => {
  if (req.session && req.session.user) {
    return next(); // usuário logado, pode passar
  }
  res.redirect('/login'); // não logado, vai pro login
};