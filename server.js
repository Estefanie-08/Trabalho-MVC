const express = require("express");
const path = require("path");

const pageRoutes = require("./routes/pageRoutes");
const produtoRoutes = require("./routes/produtoRoutes");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", pageRoutes);
app.use("/", produtoRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});