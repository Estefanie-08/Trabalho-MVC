const users = [
  { id: 1, email: 'admin@email.com', senha: '1234', nome: 'Admin' }
];

module.exports = {
  findByEmail: (email) => users.find(u => u.email === email)
};