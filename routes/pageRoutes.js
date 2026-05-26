const express = require("express");
const router = express.Router();
const auth = require('../middlewares/auth'); // <- aqui em cima

router.get("/", auth, (req, res) => {
  res.render("index");
});

router.get("/sobre", auth, (req, res) => {
  res.render("sobre");
});

router.get("/contato", auth, (req, res) => {
  res.render("contato");
});

module.exports = router; // <- sempre por último