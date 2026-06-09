/**
 * @fileoverview Model responsável pelos dados e operações relacionadas aos usuários da aplicação.
 */

/**
 * @type {Array<{id: number, email: string, senha: string, nome: string}>}
 * @description Lista de usuários armazenados em memória.
 */
const users = [
  { id: 1, email: 'admin@email.com', senha: '1234', nome: 'Admin' }
];

module.exports = {
  /**
   * Busca um usuário pelo seu email.
   * @param {string} email - Email do usuário a ser buscado.
   * @returns {{id: number, email: string, senha: string, nome: string}|undefined} O usuário encontrado ou undefined se não existir.
   */
  // TODO: Implementar criptografia de senha com bcrypt para maior segurança
  findByEmail: (email) => users.find(u => u.email === email)
};