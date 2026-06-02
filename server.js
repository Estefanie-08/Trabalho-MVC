const express = require("express");
const path = require("path");
const session = require('express-session');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json');

const pageRoutes = require("./routes/pageRoutes");
const produtoRoutes = require("./routes/produtoRoutes");
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(session({
  secret: 'minha-chave-secreta',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 1000 * 60 * 60 }
}));

// Rota da documentação Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use('/', authRoutes);
app.use("/", pageRoutes);
app.use("/", produtoRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log(`Documentação disponível em http://localhost:${PORT}/api-docs`);
});