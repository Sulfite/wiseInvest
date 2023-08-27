require('dotenv').config({path: __dirname + '/.env'})
const express = require("express");
const bodyParser = require("body-parser");
const jwt = require('jsonwebtoken');

const app = express();
const cors = require("cors");
const port = 3000;

// Usos necessarios
app.use(cors("*"));
app.use(bodyParser.json());

// Importação das Rotas
const usuariosRoutes = require("./Routes/usuarioRoutes");
const authenticationRoutes = require("./Routes/authenticationRoutes");
const walletRoutes = require("./Routes/walletRoutes");

// Rotas por modulos
app.use("/", usuariosRoutes);
app.use("/auth", authenticationRoutes);
app.use("/wallet", walletRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})