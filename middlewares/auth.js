/**
 * @fileoverview Middleware de autenticação responsável por proteger
 * as rotas privadas da aplicação, verificando se o usuário possui sessão ativa.
 */

/**
 * Middleware que verifica se o usuário está autenticado antes de permitir acesso à rota.
 * Se a sessão estiver ativa, permite a continuação da requisição.
 * Caso contrário, redireciona para a página de login.
 * @param {import('express').Request} req - Objeto de requisição do Express.
 * @param {import('express').Response} res - Objeto de resposta do Express.
 * @param {import('express').NextFunction} next - Função que passa o controle para o próximo middleware.
 * @returns {void} Chama next() se autenticado ou redireciona para /login se não autenticado.
 */
module.exports = (req, res, next) => {
  if (req.session && req.session.user) {
    return next(); // usuário logado, pode passar
  }
  res.redirect('/login'); // não logado, vai pro login
};